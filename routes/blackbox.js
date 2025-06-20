const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const { ask, uid, webSearch } = req.query;

  if (!ask || !uid) {
    return res.status(400).json({ error: 'Missing required query parameters: ask, uid' });
  }

  // Simulate logic
  const simulatedAnswer = `You asked: "${ask}". Web search engine used: ${webSearch || 'none'}.`;

  return res.json({
    uid,
    question: ask,
    answer: simulatedAnswer
  });
});

module.exports = router;
