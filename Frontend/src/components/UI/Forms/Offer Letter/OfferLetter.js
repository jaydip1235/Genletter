import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import CandidateDetails from './CandidateDetails';
import CompanyDetails from './CompanyDetails';
import DateToday from './DateToday';
import Deadline from './Deadline';
import FinalPage from './FinalPage';
import JobDetails from './JobDetails';
import PersonalDetails from './PersonalDetails';

const OfferLetter = () => {

  const { id } = useParams();

  const navigate = useNavigate();
  const [index, setIndex] = useState(1);

  const [refs, setRefs] = useState({
    candidateDetails: {
      fname: '', //done
      lname: '', //done
    },
    companyDetails: {
      companyName: '', //done
      companyLogoURL: '' //done
    },
    jobDetails: {
      jobLocation: '', //done
      jobType: '', //done
      jobTitle: '', //done
      startDate: '', //done
      responsibilitiesAndExpectations: [''], //done
      reportingDept: '', //done
      salary: '', //done
      salaryFrequency: '', //done
      otherBenefits: [''], //done
      paidLeaves: '' //done
    },
    deadline: {
      deadline: '' //
    },
    personalDetails: {
      name: '', //done
      title: '' //done
    },
    dateToday: {
      dateToday: ''//done
    }
  })

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/edit/offer_letter/${id}`)
        .then((response) => {
          console.log(response.data);
          setRefs(response.data);
        })
        .catch(() => {
          alert('error!');
        })
    }
  }, [id]);

  const fieldChangeHandler = input => e => {
    const split = input.split(' '), cat = split[0], subCat = split[1];
    const copy = { ...refs };
    copy[cat][subCat] = e.target.value;
    setRefs(copy);
  }

  const fieldSubChangeHandler = input => e => {
    const split = input.split(' ');
    const cat = split[0], subCat = split[1], index = split[2];
    const copy = { ...refs };
    copy[cat][subCat][index] = e.target.value;
    setRefs(copy);
  }

  const fieldSubAddHandler = input => {
    const split = input.split(' ');
    const cat = split[0], subCat = split[1];
    const copy = { ...refs };
    copy[cat][subCat].push('');
    setRefs(copy);
  }

  const fieldSubDecreaseHandler = input => {
    const split = input.split(' ');
    const cat = split[0], subCat = split[1];
    const copy = { ...refs };
    copy[cat][subCat].pop();
    setRefs(copy);
  }

  const imageHandler = (src) => {
    const split = src.split(' ');
    const copy = { ...refs };
    copy[split[0]][split[1]] = split[2];
    setRefs(copy);
    console.log(copy);
  }

  const nextStep = () => {
    setIndex(index + 1);
  }

  const prevStep = () => {
    setIndex(index - 1);
  }

  const formatDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    let hrs = today.getHours();
    let mins = today.getMinutes();
    var ampm = hrs >= 12 ? 'pm' : 'am';
    hrs = hrs % 12;
    hrs = hrs ? hrs : 12; // the hour '0' should be '12'
    mins = mins < 10 ? '0' + mins : mins;
    var strTime = hrs + ':' + mins + ' ' + ampm;
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = strTime + ', ' + dd + '/' + mm + '/' + yyyy;
    console.log(formattedToday);
    return formattedToday;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(refs);
    const obj = {
      candidateDetails: {
        fname: refs.candidateDetails.fname,
        lname: refs.candidateDetails.lname
      },
      companyDetails: {
        companyName: refs.companyDetails.companyName,
        companyLogoURL: refs.companyDetails.companyLogoURL
      },
      jobDetails: {
        jobType: refs.jobDetails.jobType,
        jobTitle: refs.jobDetails.jobTitle,
        startDate: refs.jobDetails.startDate,
        responsibilitiesAndExpectations: refs.jobDetails.responsibilitiesAndExpectations,
        reportingDept: refs.jobDetails.reportingDept,
        salary: refs.jobDetails.salary,
        salaryFrequency: refs.jobDetails.salaryFrequency,
        otherBenefits: refs.jobDetails.otherBenefits,
        paidLeaves: refs.jobDetails.paidLeaves
      },
      deadline: {
        deadline: refs.deadline.deadline
      },
      personalDetails: {
        name: refs.personalDetails.name,
        title: refs.personalDetails.title,
        signature: refs.personalDetails.signature
      },
      dateToday: {
        dateToday: refs.dateToday.dateToday
      },
      date: formatDate()
    }

    setRefs({
      candidateDetails: {
        fname: '', //done
        lname: '', //done
      },
      companyDetails: {
        companyName: '', //done
        companyLogoURL: ''
      },
      jobDetails: {
        jobType: '', //done
        jobTitle: '', //done
        startDate: '', //done
        responsibilitiesAndExpectations: [''], //done
        reportingDept: '', //done
        salary: '', //done
        salaryFrequency: '', //done
        otherBenefits: [''], //done
        paidLeaves: '' //done
      },
      deadline: {
        deadline: '' //done
      },
      personalDetails: {
        name: '', //done
        title: '', //done
        signature: ''
      },
      dateToday: {
        dateToday: ''
      }
    });
    navigate('/offer_letter/templates/1', { state: refs });

    await fetch("http://localhost:5000/offer_letter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id, ...obj }),
    })
      .catch(error => {
        window.alert(error);
        console.log("error");
        return;
      });

  }

  let content = '';

  switch (index) {
    case 1:
      content = (
        <CandidateDetails title='Candidate Details' values={refs} onChange={fieldChangeHandler} nextStep={nextStep}></CandidateDetails>
      );
      break;
    case 2:
      content = (
        <CompanyDetails title='Company Details' values={refs} onChange={fieldChangeHandler} nextStep={nextStep} prevStep={prevStep} onImageChange={imageHandler} />
      );
      break;
    case 3:
      content = (
        <JobDetails title='Job Details' values={refs} onChange={fieldChangeHandler} nextStep={nextStep} prevStep={prevStep} onChangeSub={fieldSubChangeHandler} increaseSub={fieldSubAddHandler} decreaseSub={fieldSubDecreaseHandler} />
      );
      break;
    case 4:
      content = (
        <Deadline title='Deadline' values={refs} onChange={fieldChangeHandler} nextStep={nextStep} prevStep={prevStep} />
      );
      break;
    case 5:
      content = (
        <PersonalDetails title='Personal Details' values={refs} onChange={fieldChangeHandler} nextStep={nextStep} prevStep={prevStep} onImageChange={imageHandler} />
      );
      break;
    case 6:
      content = (
        <DateToday title='Date Today' values={refs} onChange={fieldChangeHandler} nextStep={nextStep} prevStep={prevStep} formSubmitted={handleSubmit} />
      );
      break;
    default:
      content = (
        <FinalPage title='Thank You!' values={refs} />
      );
  }
  return <>{content}</>
}

export default OfferLetter;