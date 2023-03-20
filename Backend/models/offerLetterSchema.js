const mongoose = require('mongoose');

const offerLetterSchema = (
    {
        loggedIn: {
            type: String
        },
        candidateDetails: {
            fname: {
                type: String
            },
            lname: {
                type: String
            }
        },
        companyDetails: {
            companyName: {
                type: String
            },
            companyLogoURL: {
                type: String
            }
        },
        jobDetails: {
            jobLocation: {
                type: String
            },
            jobType: {
                type: String
            },
            jobTitle: {
                type: String
            },
            startDate: {
                type: String
            },
            responsibilitiesAndExpectations: [
                {
                    type: String
                }
            ],
            reportingDept: {
                type: String
            },
            salary: {
                type: String
            },
            salaryFrequency: {
                type: String
            },
            otherBenefits: [
                {
                    type: String
                }
            ],
            paidLeaves: {
                type: String
            }
        },
        deadline: {
            deadline: {
                type: String
            }
        },
        personalDetails: {
            name: {
                type: String
            },
            title: {
                type: String
            }
        },
        dateToday: {
            dateToday: {
                type: String
            }
        },
        date: {
            type: String
        }
    }
);

module.exports = mongoose.model('OfferLetter', offerLetterSchema);