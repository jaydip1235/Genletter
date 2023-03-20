const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();
const Resume = require('../models/resumeSchema');
const passport = require('../passport');

router.post('/', async (req, res) => {
    const loggedIn = await passport.getUserEmail();
    console.log(loggedIn);
    const { id, fname, lname, rollNo, links, email, phoneNo, education, workex, projects, achievements, skills, por, date } = req.body;
    const obj = {
        loggedIn: loggedIn,
        fname: fname,
        lname: lname,
        phoneNo: phoneNo,
        email: email,
        rollNo: rollNo,
        links: links,
        education: education,
        workex: workex,
        projects: projects,
        achievements: achievements,
        skills: skills,
        por: por,
        date: date
    };
    if (!id) {
        const resume = await Resume.create(obj);
        if (resume) {
            console.log(`Data posted with mongoose id = ${resume._id}`);
        }
    }
    else {
        const resume = await Resume.updateOne({ _id: mongoose.Types.ObjectId(id) }, obj);
        if (resume) {
            console.log(`Resume updated with mongoose id = ${id}`);
        }
    }
});

router.get('/history', async (req, res) => {
    const loggedIn = await passport.getUserEmail();
    await Resume.find({ loggedIn: loggedIn }).then((data) => {
        // console.log(data);
        res.json(data);
    })
        .catch((error) => {
            console.log(error);
        });
});

module.exports = router;