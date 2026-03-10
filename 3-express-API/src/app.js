// server ko create karna
const express = require('express');
const app = express();
app.use(express.json()); // JSON body ko parse karne ke liye middleware


const notes = [];
// title and description it gives user
// POST Api for creating a note

app.post('/notes',(req,res)=>{
    // console.log(req.body);
    notes.push(req.body);
    res.status(201).json({message:'Note created successfully'});  // it check in postman and it shows the message that note created successfully
});

// server se data frountend show karana
// GET api method
app.get('/notes',(req,res)=>{
    res.status(200).json({
        message:'Notes retrieved successfully',
        notes:notes
    }); // it check in postman and it shows the all notes which we created
});

// DELETE api method
// :index -> for dynamic route parameter, it is used to identify which note we want to delete

app.delete('/notes/:index',(req,res)=>{
    const index = req.params.index; // it gives the index of note which we want to delete
    delete notes[index]
    res.status(200).json({
        message:'Note deleted successfully'
    })
})

// PUT/PATCH api method for updating the note
app.patch('/notes/:index',(req,res)=>{
    const index = req.params.index; // it gives the index of note which we want to update
    // it only description ko update karta hai, title ko update nahi karta hai again you create another api for updating the title same as description
    const description = req.body.description; // it gives the new description which we want to update
    notes[index].description = description; // it updates the description of note which we want to update
    res.status(200).json({
        message:'Note updated successfully'
    })
})
module.exports = app;