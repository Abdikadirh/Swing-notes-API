const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Note = sequelize.define('Note', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            len: [0, 50],
        },
    },
    text: {
        type: DataTypes.STRING(300),
        allowNull: false,
        validate: {
            len: [0, 300],
        },
    },
    // createdAt and modifiedAt (updatedAt) are handled by Sequelize automatically
}, {
    timestamps: true,
    updatedAt: 'modifiedAt', // Rename updatedAt to modifiedAt 
});

module.exports = Note;
