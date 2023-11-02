import MenuNode from './MenuNode.js';
import React, { useRef, useEffect, useState } from 'react';

const Scrollable = ({ children }) => {
  const scrollableRef = useRef(null);
  const [_, forceUpdate] = useState();

  useEffect(() => {
    const scrollable = scrollableRef.current;
    
    const updateOpacity = () => {
      console.log("Scrolling..."); // Debug Step 1

      const center = scrollable.scrollTop + (scrollable.clientHeight / 2);
      const children = Array.from(scrollable.children);

      children.forEach(child => {
	const computedStyle = window.getComputedStyle(child);
	const childPaddingTop = parseFloat(computedStyle.paddingTop);
	const childPaddingBottom = parseFloat(computedStyle.paddingBottom);
	const itemCenter = child.offsetTop + (child.clientHeight - childPaddingTop - childPaddingBottom) / 2;

        const distanceFromCenter = Math.abs(center - itemCenter);

        const fadeDistance = 200; 
        let opacity = 1 - (distanceFromCenter / fadeDistance);
        if (opacity < 0) opacity = 0; 
        if (opacity > 1) opacity = 1; 

        console.log(`Opacity for child: ${opacity}`); // Debug Step 4
        
        child.style.opacity = opacity;
      });

      forceUpdate(Math.random()); // Debug Step 3
    };

    updateOpacity();
    scrollable.addEventListener('scroll', updateOpacity);

    return () => {
      scrollable.removeEventListener('scroll', updateOpacity);
    };
  }, []);

	return (
		<div style={{
			boxSizing: 'border-box',
			alignItems: 'center',
			display: 'flex',
			flexDirection: 'column',
			flexWrap: 'nowrap',
			justifyContent: 'center',
			alignItems: 'center',
			width: '100%',
			height: `${(children.length+1)*100}px`,
			overflowY:'scroll'
		}} ref={scrollableRef}>
			{children}
		</div>
	);
}

export default Scrollable;

