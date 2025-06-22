module.exports = (req, res, next) => {
  if (req.user?.plan === 'pro') {
    return next();
  }
  return res.status(403).json({ error: 'Pro plan required' });
};
