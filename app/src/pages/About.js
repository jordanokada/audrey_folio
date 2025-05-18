import Stack from '../components/Stack';
import './About.css';

const About = () => {
    const images = [
        { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
        { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
        { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
        { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
    ];
    return (
        <div className="about-container">
            <div className='about-text'>
                <h2>About me</h2>
                <p>
                    Hiiiiiiiiiiiiii dfasdf asdkfjalkdfj adf dfjkj ja e aiasjdf dfkja lorem ais ofadf lakdjfk ajdf dfkje a  e e e aksdjf joju0 adsf djd
                </p>
            </div>
            <div className="about-stack">
                <Stack
                    randomRotation={true}
                    sensitivity={180}
                    sendToBackOnClick={false}
                    cardDimensions={{ width: 300, height: 300 }}
                    cardsData={images}
                    className="about-me-stack"
                />
            </div>
        </div>
    );
};

export default About;