const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();
const Resume = require('../models/resumeSchema');
const OfferLetter = require('../models/offerLetterSchema');

router.get('/resume/:id', async (req, res) => {
    const id = req.params.id;
    const getResume = await Resume.findOne({ _id: mongoose.Types.ObjectId(id) });
    if (getResume) {
        const obj = {
            fnameRef: getResume.fname,
            lnameRef: getResume.lname,
            phoneRef: getResume.phoneNo,
            emailRef: getResume.email,
            rollnoRef: getResume.rollNo,
            linksRef: getResume.links,
            educationRef: getResume.education,
            workexRef: getResume.workex,
            projectsRef: getResume.projects,
            achievementsRef: getResume.achievements,
            skillsRef: getResume.skills,
            porRef: getResume.por
        };
        res.json(obj);
    } else {
        res.json("No data found!");
    }
});

router.get('/offer_letter/:id', async (req, res) => {
    const id = req.params.id;
    const getOfferLetter = await OfferLetter.findOne({ _id: mongoose.Types.ObjectId(id) });
    if (getOfferLetter) {
        const obj = {
            candidateDetails: getOfferLetter.candidateDetails,
            companyDetails: getOfferLetter.companyDetails,
            jobDetails: getOfferLetter.jobDetails,
            deadline: getOfferLetter.deadline,
            personalDetails: getOfferLetter.personalDetails,
            dateToday: getOfferLetter.dateToday,
            date: getOfferLetter.date
        };
        res.json(obj);
    } else {
        res.json('No data found!');
    }
});

module.exports = router;