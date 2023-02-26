import React from 'react'
import { useLocation } from 'react-router-dom';
import styles from './OfferLetter1.module.css';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import _ from 'lodash';

const OfferLetter1 = () => {

    const props = useLocation().state;

    const otherBenefits = (benefits) => {
        const x = props.jobDetails.otherBenefits;
        if (x.length === 0) return;
        let content = ' including other side benefits like';
        for (let i = 0; i < benefits.length; i++) {
            content += (', ' + _.lowerCase(benefits[i]));
        }
        // console.log(content);
        return content;
    }

    const salary = (type, salary, duration) => {
        let content = '';
        if (_.lowerCase(type) === 'internship') {
            content += ('a stipend of ' + salary);
        }
        else {
            content += ('an annual cost to company (CTC) of ' + salary + ' paid to you ' + _.lowerCase(duration));
        }
        return content;
    }

    const responsibilitiesAndExpectations = (rae) => {
        let content = _.lowerCase(rae[0]);
        if (rae.length === 0) return;
        for (let i = 1; i < rae.length; i++) {
            content += (', ' + _.lowerCase(rae[i]));
        }
        return content + '.';
    }

    // const downloadHandler = () => {
    //     const source = document.getElementById("offer_letter");
    //     const doc = new jsPDF({
    //         orientation: 'portrait',
    //         format: 'letter',
    //         unit: 'px'
    //     });
    //     doc.html(source, {
    //         callback: function (pdf) {
    //             pdf.save(`${props.candidateDetails.fname} ${props.candidateDetails.lname} Offer Letter.pdf`);
    //         },
    //         x: -30,
    //         y: -35,
    //         html2canvas: {
    //             scale: 0.4,
    //             useCORS: true
    //         }
    //     });
    // };

    const downloadHandler = async () => {
        const download = document.getElementById('offer_letter');
        html2canvas(download)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF("p", "mm", "a4");
                var width = pdf.internal.pageSize.getWidth();
                var height = pdf.internal.pageSize.getHeight();
                pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
                pdf.save(`${props.candidateDetails.fname} ${props.candidateDetails.lname} Offer Letter.pdf`);
            })
    }

    return (
        <div>
            <div className={`${styles.offer_letter}`} id='offer_letter'>
                <div className={`${styles.header}`}>
                    <img src={props.companyDetails.companyLogoURL} alt='company-logo' className={`${styles.logo}`} />
                    <div>
                        <div className={`${styles.company_name}`}>{props.companyDetails.companyName}</div>
                        <div style={{ textAlign: 'right', fontSize: '1.2rem' }}>{props.jobDetails.jobLocation}</div>
                    </div>
                </div>
                <hr />
                <div className={`${styles.main_body}`}>
                    <div className={`${styles.date} ${styles.para}`}>{props.dateToday.dateToday}</div>
                    <div className={`${styles.title}`}>Offer Letter</div>
                    <div className={`${styles.content}`}>
                        <div className={`${styles.para}`}>Dear <span className={`${styles.bold}`}>{props.candidateDetails.fname} {props.candidateDetails.lname}</span>,</div>
                        <div className={`${styles.para}`}>Congratulations! We are please to confirm that you have been selected to work for <span className={`${styles.bold}`}>{props.companyDetails.companyName}</span>. We are delighted to make you the following job offer.</div>
                        <div className={`${styles.para}`}>The position we are offering you is a <span className={`${styles.bold}`}>{_.lowerCase(props.jobDetails.jobType)}</span> role of <span className={`${styles.bold}`}>{props.jobDetails.jobTitle}</span> with <span className={`${styles.bold}`}>{salary(props.jobDetails.jobType, props.jobDetails.salary, props.jobDetails.salaryFrequency)}{otherBenefits(props.jobDetails.otherBenefits)} and {props.jobDetails.paidLeaves} paid annual leaves</span>. This position reports to the <span className={`${styles.bold}`}>{_.lowerCase(props.jobDetails.reportingDept)}</span> department. Your daily responsibilities will include <span className={`${styles.bold}`}>{responsibilitiesAndExpectations(props.jobDetails.responsibilitiesAndExpectations)}</span></div>
                        <div className={`${styles.para}`}>We would like you to start working on <span className={`${styles.bold}`}>{props.jobDetails.startDate}</span>. Please report to <span className={`${styles.bold}`}>{props.personalDetails.name}, {props.personalDetails.title}</span> for documentation and orientation. If this date is acceptable, please contact us latest by <span className={`${styles.bold}`}>{props.deadline.deadline}</span>.</div>
                        <div className={`${styles.para}`}>Please keep in mind, this employment offer is in no way a legally binding contract. As an at-will employee, both you and <span className={`${styles.bold}`}>{props.companyDetails.companyName}</span> are able to terminate employment for any reason at any time.</div>
                        <div className={`${styles.para}`}><span className={`${styles.bold}`}>{props.companyDetails.companyName}</span> looks forward to bringing you on board! If you have any questions, please feel free to reach out at anytime and we’ll be more than happy to help you.</div>
                    </div>
                    <div className={`${styles.salutation}`}>
                        <div className={`${styles.para}`}>Best regards,</div>
                        <div className={`${styles.para} ${styles.bold}`}>
                            <div>{props.personalDetails.name}</div>
                            <div>{props.personalDetails.title}</div>
                            <img src={props.personalDetails.signature} alt='signature' className={`${styles.sign}`} />
                        </div>
                        <div className={`${styles.para}`}>Accepted by,</div>
                        <div className={`${styles.para}`}>
                            <div className={`${styles.bold}`}>{props.candidateDetails.fname} {props.candidateDetails.lname}</div>
                            <div>Signature</div>
                            <hr className={`${styles.line}`} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.btn_div}`}>
                <button className={`${styles.btn}`} onClick={downloadHandler}>Download as PDF</button>
            </div>
        </div>
    )
}

export default OfferLetter1;