const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();
const OfferLetter = require('../models/offerLetterSchema');
const passport = require('../passport');

router.post('/', async (req, res) => {
    // console.log(req.body);
    const loggedIn = await passport.getUserEmail();
    // console.log(loggedIn);
    const { id, candidateDetails, companyDetails, jobDetails, deadline, personalDetails, dateToday, date } = req.body;
    const obj = {
        loggedIn: loggedIn,
        candidateDetails: candidateDetails,
        companyDetails: companyDetails,
        jobDetails: jobDetails,
        deadline: deadline,
        personalDetails: personalDetails,
        dateToday: dateToday,
        date: date
    };
    if (!id) {
        const offerLetter = await OfferLetter.create(obj);
        if (offerLetter) {
            console.log(`Data posted with mongoose id = ${offerLetter._id}`);
        }
    }
    else {
        const offerLetter = await OfferLetter.updateOne({ _id: mongoose.Types.ObjectId(id) }, obj);
        if (offerLetter) {
            console.log(`Offer Letter updated with mongoose id = ${id}`);
        }
    }
});

router.get('/history', async (req, res) => {
    const loggedIn = await passport.getUserEmail();
    await OfferLetter.find({ loggedIn: loggedIn }).then((data) => {
        res.json(data);
    })
        .catch((error) => {
            console.log(error);
        });
});

module.exports = router;