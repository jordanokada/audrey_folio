import { useRef } from 'react';
import VariableProximity from '../components/VariableProximity';
import '../App.css';

const Home = () => {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        paddingTop: '10rem',
        paddingLeft: '7rem',
        paddingRight: '7rem',
        display: 'flex',
        justifyContent: 'center',
      }}
      >
        <VariableProximity
          label={"Hi there! I'm Audrey Geer. Welcome to my portfolio!"}
          className={'title-card'}
          fromFontVariationSettings="'wght' 400, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={containerRef}
          radius={100}
          falloff='linear'
        />
      </div>
  );
};

export default Home;