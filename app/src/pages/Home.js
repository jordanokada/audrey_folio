import { useRef } from 'react';
import VariableProximity from '../components/VariableProximity';
import '../App.css';
import SplitText from '../components/SplitText';

const Home = () => {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        paddingTop: '8rem',
        paddingLeft: '7rem',
        paddingRight: '7rem',
        display: 'flex',
        justifyContent: 'center',
      }}
      >
        {/* <VariableProximity
          label={"Hi there! I'm Audrey Geer. Welcome to my portfolio!"}
          className={'title-card'}
          fromFontVariationSettings="'wght' 500, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={containerRef}
          radius={100}
          falloff='linear'
        /> */
        <SplitText
          text="Hi there! I'm Audrey Geer. Welcome to my portfolio!"
          className="title-card"
          delay={150}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          // onLetterAnimationComplete={handleAnimationComplete}
        />
        }
      </div>
  );
};

export default Home;