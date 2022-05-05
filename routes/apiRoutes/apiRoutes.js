const express = require("express");
const router = require("express").Router();
const fs = require("fs");
const {createANote} = require('../../lib/data');
const data = require('../../db/db.json');

router.get('/notes', (req,res) => {
    res.send(data);
});

router.post('/notes', (req, res) => {
    createANote(req.body);
    res.json();
});













module.exports = router;