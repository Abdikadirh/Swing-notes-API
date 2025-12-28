const { Note } = require('../models');
const { Op } = require('sequelize');

exports.getNotes = async (req, res) => {
    try {
        const notes = await Note.findAll({ where: { userId: req.user.id } });
        res.json(notes);
    } catch (error) {
        res.status(500).json({ error: 'Server error retrieving notes.' });
    }
};

exports.createNote = async (req, res) => {
    try {
        const { title, text } = req.body;

        if (!title || title.length > 50) {
            return res.status(400).json({ error: 'Title is required and must be max 50 characters.' });
        }
        if (!text || text.length > 300) {
            return res.status(400).json({ error: 'Text is required and must be max 300 characters.' });
        }

        const note = await Note.create({
            title,
            text,
            userId: req.user.id,
        });

        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({ error: 'Server error creating note.' });
    }
};

exports.updateNote = async (req, res) => {
    try {
        const { id } = req.body; // or req.params.id, but the requirement table just says /api/notes PUT
        const { title, text } = req.body;

        if (!id) {
            return res.status(400).json({ error: 'Note ID is required in the body.' });
        }

        const note = await Note.findOne({ where: { id, userId: req.user.id } });
        if (!note) {
            return res.status(404).json({ error: 'Note not found or access denied.' });
        }

        if (title !== undefined) {
            if (title.length > 50) return res.status(400).json({ error: 'Title max 50 characters.' });
            note.title = title;
        }
        if (text !== undefined) {
            if (text.length > 300) return res.status(400).json({ error: 'Text max 300 characters.' });
            note.text = text;
        }

        await note.save();
        res.json(note);
    } catch (error) {
        res.status(500).json({ error: 'Server error updating note.' });
    }
};

exports.deleteNote = async (req, res) => {
    try {
        const { id } = req.body; // or req.params.id

        if (!id) {
            return res.status(400).json({ error: 'Note ID is required in the body.' });
        }

        const result = await Note.destroy({ where: { id, userId: req.user.id } });
        if (result === 0) {
            return res.status(404).json({ error: 'Note not found or access denied.' });
        }

        res.json({ message: 'Note deleted successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Server error deleting note.' });
    }
};

exports.searchNotes = async (req, res) => {
    try {
        const { title } = req.query;

        if (!title) {
            return res.status(400).json({ error: 'Search title query parameter is required.' });
        }

        const notes = await Note.findAll({
            where: {
                userId: req.user.id,
                title: {
                    [Op.iLike]: `%${title}%`, // Postgres case-insensitive search
                },
            },
        });

        res.json(notes);
    } catch (error) {
        res.status(500).json({ error: 'Server error searching notes.' });
    }
};
