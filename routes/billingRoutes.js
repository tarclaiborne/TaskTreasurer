const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const verifyToken = require('../middleware/authMiddleware');

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Optional price map if you want to use friendly plan names
const priceMap = {
  basic: 'price_abc123',
  pro: 'price_1RbEZHQ38f2lb3OFzb0Qq2Fg',
  team: 'price_xyz789',
};

// POST /billing/create-checkout-session
router.post('/create-checkout-session', verifyToken, async (req, res) => {
  const { plan } = req.body;

  const priceId = priceMap[plan]; // 🔁 map 'pro' → Stripe Price ID
  if (!priceId) {
    return res.status(400).json({ error: 'Invalid or missing plan' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      customer_email: req.user.email, // enables Stripe to send receipts
      metadata: {
        userId: req.user.id,
        selectedPlan: plan,
      },
      success_url: 'https://tasktreasurer.web.app/success',
      cancel_url: 'https://tasktreasurer.web.app/cancel',
    });

    res.status(200).json({ sessionId: session.id });
  } catch (err) {
    console.error('Stripe Checkout Error:', err.message);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

module.exports = router;

