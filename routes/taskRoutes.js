const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const requireProPlan = require('../middleware/requireProPlan');

// Controller imports
const {
  createTask,
  getUserTasks,
  updateTask,
  deleteTask,
  getPremiumStats, // pro feature
} = require('../controllers/taskController');

// Routes

// 🔒 Protected: Get all user tasks
router.get('/', verifyToken, getUserTasks);

// 🔒 Protected: Create task
router.post('/', verifyToken, createTask);

// 🔒 Protected: Update task
router.put('/:id', verifyToken, updateTask);

// 🔒 Protected: Delete task
router.delete('/:id', verifyToken, deleteTask);

// 🔒🔑 Pro-only: Access advanced analytics or filters
router.get('/premium-stats', verifyToken, requireProPlan, getPremiumStats);

module.exports = router;
