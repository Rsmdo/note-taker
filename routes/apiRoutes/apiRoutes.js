const express = require("express");
const router = require("express").Router();
const fs = require("fs");
const {createANote, deleteANote} = require('../../lib/data');
const data = require('../../db/db.json');

router.get('/notes', (req,res) => {
    res.send(data);
});

router.post('/notes', (req, res) => {
    createANote(req.body); //calling the function created in the data file 
    res.json();
});

router.delete('/notes/:id', (req, res) => { //the id at the end is to target a specific id
    deleteANote(req.params);
    res.json();
});

//done












module.exports = router;