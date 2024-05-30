import { useSpring, animated } from "@react-spring/web";

const Bezier = () => {
  const animationProps = useSpring({
    from: { backgroundPosition: '0% 50%' },
    to: { backgroundPosition: '100% 50%' },
    config: {
      duration: 10000,
      easing: t => t * t * (3 - 2 * t) 
    },
    loop: { reverse: true } 
  });

  return (
    <animated.div
      className="border-[#1B3D58] border-l-[0.25rem] border-r-[0.25rem] border-t-[0.25rem] rounded-md mt-5"
      style={{
        ...animationProps,
        height: '240px',
        width: '100%',
        background: 'linear-gradient(90deg, #0F172A, #F472B6, #36B6EE)',
        backgroundSize: '300% 100%'
      }}
    >
      <p style={{ color: 'white', textAlign: 'center', paddingTop: '50px' }}>
        Smooth and Fluid Beizer
      </p>
      <p className="border-[#1B3D58] border-l-[0.25rem] border-r-[0.25rem] border-t-[0.25rem] rounded-md" style={{ color: 'white', textAlign: 'center', paddingTop: '50px' }}>
        Smooth and Fluid Beizer
      </p>
      <p className="border-[#1B3D58] border-l-[0.25rem] border-r-[0.25rem] border-t-[0.25rem] rounded-md" style={{ color: 'white', textAlign: 'center', paddingTop: '50px' }}>
        Smooth and Fluid Beizer
      </p>
    </animated.div>
  );
};

export default Bezier;
