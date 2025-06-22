const express = require('express');
const router = express.Router();
const Task = require('../models/TaskModel'); // Adjust path if needed

// Example: GET /search-tasks?q=keyword
router.get('/', async (req, res) => {
  try { 
    const keyword = req.query.q;

    if (!keyword) {
      return res.status(400).json({ error: "Search query is required (use ?q=yourKeyword)" });
    }

    const regex = new RegExp(keyword, 'i'); // Case-insensitive search
    const tasks = await Task.find({
      $or: [
        { title: regex },
        { description: regex }
      ]
    });

    res.status(200).json(tasks);
  } catch (error) {
    console.error('Error searching tasks:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;