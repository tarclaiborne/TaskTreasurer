const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

router.post(
  '/',
  express.raw({ type: 'application/json' }),
  async (req, res) => {
    const sig = req.headers['stripe-signature'];
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.error('❌ Webhook signature verification failed:', err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    const data = event.data.object;

    switch (event.type) {
      case 'checkout.session.completed': {
        const userId = data.metadata?.userId;
        if (userId) {
          try {
            const User = require('../models/User');
            await User.findByIdAndUpdate(userId, {
              plan: 'pro',
              billingStatus: 'active',
              stripeCustomerId: data.customer, // optional: store Stripe ID
              stripeSubscriptionId: data.subscription, // optional: store sub ID
            });
            console.log(`✅ Upgraded user ${userId} to Pro`);
          } catch (err) {
            console.error('❌ Failed to upgrade user:', err.message);
          }
        }
        break;
      }

      case 'invoice.payment_succeeded':
        console.log('💰 Payment succeeded:', data.id);
        break;

      case 'invoice.payment_failed':
        console.warn('⚠️ Payment failed:', data.id);
        break;

      case 'customer.subscription.deleted':
        console.log('📉 Subscription cancelled:', data.id);
        // Optionally downgrade user plan here too
        break;

      default:
        console.log(`🔔 Unhandled event: ${event.type}`);
    }

    res.status(200).send('✅ Event received');
  }
);

module.exports = router;

