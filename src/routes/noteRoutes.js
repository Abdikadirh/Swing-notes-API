const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');
const authenticateToken = require('../middleware/auth');

router.use(authenticateToken);

/**
 * @swagger
 * /api/notes:
 *   get:
 *     summary: Get all notes for the logged in user
 *     tags: [Notes]
 *     responses:
 *       200:
 *         description: List of notes
 *       401:
 *         description: Unauthorized
 */
router.get('/', noteController.getNotes);

/**
 * @swagger
 * /api/notes/search:
 *   get:
 *     summary: Search notes by title
 *     tags: [Notes]
 *     parameters:
 *       - in: query
 *         name: title
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Search results
 */
router.get('/search', noteController.searchNotes);

/**
 * @swagger
 * /api/notes:
 *   post:
 *     summary: Create a new note
 *     tags: [Notes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               text:
 *                 type: string
 *     responses:
 *       201:
 *         description: Note created
 */
router.post('/', noteController.createNote);

/**
 * @swagger
 * /api/notes:
 *   put:
 *     summary: Update an existing note
 *     tags: [Notes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               title:
 *                 type: string
 *               text:
 *                 type: string
 *     responses:
 *       200:
 *         description: Note updated
 */
router.put('/', noteController.updateNote);

/**
 * @swagger
 * /api/notes:
 *   delete:
 *     summary: Delete a note
 *     tags: [Notes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Note deleted
 */
router.delete('/', noteController.deleteNote);

module.exports = router;
