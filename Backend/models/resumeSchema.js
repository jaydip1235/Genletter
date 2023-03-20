const mongoose = require('mongoose');

const resumeSchema = (
    {
        loggedIn: {
            type: String
        },
        fname: {
            type: String
        },
        lname: {
            type: String
        },
        phoneNo: {
            type: Number
        },
        email: {
            type: String
        },
        rollNo: {
            type: String
        },
        links: [
            {
                name: {
                    type: String
                },
                link: {
                    type: String
                }
            }
        ],
        education: [
            {
                degree: {
                    type: String
                },
                course: {
                    type: String
                },
                university: {
                    type: String
                },
                year: {
                    type: Number
                },
                grade: {
                    type: String
                }
            }
        ],
        workex: [
            {
                title: {
                    type: String
                },
                organisation: {
                    type: String
                },
                duration: {
                    type: String
                },
                contributions: {
                    type: String
                },
                links: [
                    {
                        name: {
                            type: String
                        },
                        link: {
                            type: String
                        }
                    }
                ]
            }
        ],
        projects: [
            {
                name: {
                    type: String
                },
                description: {
                    type: String
                },
                completed: {
                    type: String
                },
                links: [
                    {
                        name: {
                            type: String
                        },
                        link: {
                            type: String
                        }
                    }
                ]
            }
        ],
        achievements: [
            {
                achievement: {
                    type: String
                },
                description: {
                    type: String
                },
                links: [
                    {
                        name: {
                            type: String
                        },
                        link: {
                            type: String
                        }
                    }
                ]
            }
        ],
        skills: {
            languages: [
                {
                    type: String
                }
            ],
            frameworksLibrariesAndDatabases: [
                {
                    type: String
                }
            ],
            subjects: [
                {
                    type: String
                }
            ]
        },
        por: [
            {
                position: {
                    type: String
                },
                organisation: {
                    type: String
                },
                duration: {
                    type: String
                },
                work: {
                    type: String
                },
                links: [
                    {
                        name: {
                            type: String
                        },
                        link: {
                            type: String
                        }
                    }
                ]
            }
        ],
        date: {
            type: String
        }
    }
);

module.exports = mongoose.model('Resume', resumeSchema);