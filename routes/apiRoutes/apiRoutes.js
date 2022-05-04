const express = require("express");
const router = require("express").Router();
const fs = require("fs");
const {createANote} = require('../../lib/data');
const data = require('../../db/db.json');

router.get('/notes', (req,res) => {
    res.json(data.slice(1));
});

router.post('/notes', (req, res) => {
    const newNote = createANote(req.body, data);
    res.json(newNote);
});













module.exports = router;