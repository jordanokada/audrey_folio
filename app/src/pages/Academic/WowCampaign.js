import './WowCampaign.css';
import wowimage1 from '../../assets/photos/wow_campaign_1.png';
import wowimage2 from '../../assets/photos/wow_campaign_2.png';
import wow_before from '../../assets/photos/wow_before.png';
import wow_after from '../../assets/photos/wow_after.png';

const WowCampaign = () => {
    return (
        <div className="wow-campaign-container">
            <h2 className="header">WOW! Children's Museum Campaign</h2>
            <div className="text-section">
                <p className="text-content">
                    <strong>What:</strong> How do we portray the value of WOW! Children’s Museum for children, while making a case for donors’ investment in the museum and its’ mission?
                </p>
                <p className="text-content">
                    <strong>Role:</strong> Stragetist/Copywriter</p>
            </div>

            <h2 className="subheader">Campaign Slogan</h2>
            <h3 className="subheader2"><strong>Be a Hero.</strong> People don’t want to feel like just a donor; they want to feel like a hero. </h3>
            <h2 className="subheader">Pamphlet Design</h2>
            <div className="pamphlet-row">    
                <div className="content-row">
                    <img className="wow-image" src={wowimage1} alt="WOW Campaign" />
                    <img className="wow-image" src={wowimage2} alt="WOW Campaign" />
                </div>
                <div className="pamphlet-description">
                    <p>
                        The wow campaign is blah blah blah blah blah. I was tasked 
                        to do blah blah blah, and my work consists of these pamphlets 
                        blah blah blah. This helped the company to do blah blah blah
                    </p>
                </div>
            </div>

            <h3 className="subheader">Before and After: Donor Appreciation Emails</h3>

            <div className="content-row2">
                <img className="wow-email" src={wow_before} alt="WOW Campaign" />
                <img className="wow-email" src={wow_after} alt="WOW Campaign" />
            </div>
        </div>
    );
}

export default WowCampaign;