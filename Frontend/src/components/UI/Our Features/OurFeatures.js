import classes from './OurFeatures.module.css';
import Card from './Card';

const OurFeatures = () => {
    return (
        <div className={`${classes.bg}`}>
            <div className={`${classes.heading}`}>CREATE A DOCUMENT IN CLICK OF A BUTTON</div>
            <div className={`${classes.subheading}`}>OUR FEATURES.</div>
            <div className={`${classes.cards}`}>
                <Card name='Create an offer letter' link='/offer_letter/details' />
                <Card name='Create an application letter' link='/application_letter/details' />
                <Card name='Create a resume' link='/resume/details' />
            </div>
        </div>
    );
}

export default OurFeatures;