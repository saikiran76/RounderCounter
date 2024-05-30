import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Footer = () => {
  const animationProps = useSpring({
    from: { transform: 'translateY(100%)' },
    to: { transform: 'translateY(0%)' },
    config: { duration: 30000 },
    // Add Bezier interpolation for a smoother animation
    props: { transform: value => `translateY(${value.interpolate({
      inputRange: [0, 1],
      outputRange: [100, 0], // Adjust output range for desired movement
      easing: 'bezier(0.25, 0.1, 0.25, 1.0)' // Adjust Bezier curve for desired easing
    })})%` },
  });

  return (
    <animated.div style={animationProps}>
      {/* Your content here (icons, text, etc.) */}
      <p>This is the animated bottom section with Bezier easing.</p>
    </animated.div>
  );
};

export default Footer;

