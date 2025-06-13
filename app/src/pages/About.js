import './About.css';
import Stack from '../components/Stack';
import pic1 from '../assets/about_me/pic1.png';
import pic2 from '../assets/about_me/pic2.png';
import pic3 from '../assets/about_me/pic_3.jpeg';

const About = () => {
    const images = [
        { id: 1, img: pic1 },
        { id: 2, img: pic2 },
        { id: 3, img: pic3},
        { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
    ];
    return (
        // Arranges divs vertically
        <div className="about-container">
            {/* Arranges divs horizontally */}
            <div className="about-content">
                <div className='about-text'>
                    <p>
                        Hiiiiiiiiiiiiii dfasdf asdkfjalkdfj adf dfjkj ja e aiasjdf dfkja lorem ais ofadf lakdjfk ajdf dfkje a  e e e aksdjf joju0 adsf djd
                        dfasdf asdkfjalkdfj adf dfjkj ja e aiasjdf dfkja lorem ais ofadf lakdjfk ajdf dfkje a  e e e aksdjf joju0 adsf djd
                        dfasdf asdkfjalkdfj adf dfjkj ja e aiasjdf dfkja lorem ais ofadf lakdjfk ajdf dfkje a  e e e aksdjf joju0 adsf djd
                        dfasdf asdkfjalkdfj adf dfjkj ja e aiasjdf dfkja lorem ais ofadf lakdjfk ajdf dfkje a  e e e aksdjf joju0 adsf djd
                    </p>
                </div>
                <div className="about-stack">
                    <Stack
                        randomRotation={true}
                        sensitivity={180}
                        sendToBackOnClick={false}
                        cardDimensions={{ width: 250, height: 300 }}
                        cardsData={images}
                        className="about-me-stack"
                    />
                </div>
            </div>
            <h2 className="about-me-header">About Me</h2>
        </div>
    );
};

export default About;