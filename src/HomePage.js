import MenuNode from './MenuNode.js';
import ThemeContext from './theme.js';
import "animate.css";
import React, { useContext, useState, useEffect } from 'react';


function HomePage({data}){
	const {theme, set_theme, theme_name} = useContext(ThemeContext);
	const [isVisible, setIsVisible] = useState(false);
	const [isVisibleSuffix, setIsVisibleSuffix] = useState(false);
	const [isVisibleSubheading, setIsVisibleSubheading] = useState(false);
	const change_color = (icon_index, set_icon_index, set_theme, theme_name, link) => {
		set_theme((theme_name=="dark"?"light":"dark"));
		set_icon_index(icon_index+1);
	};
	useEffect(()=>{
		const timer = setTimeout(()=>{
			setIsVisible(true);
		}, 1500);
		const timerSuffix = setTimeout(()=>{
			setIsVisibleSuffix(true);
		}, 3000);
		const timerSubheading = setTimeout(()=>{
			setIsVisibleSubheading(true);
		}, 4500);
		return ()=>{clearTimeout(timer);clearTimeout(timerSuffix);clearTimeout(timerSubheading);};
	}, []);
	return (
		<>
			<div style={{background: `${theme.background}`, fontSize: '100px', color: `${theme.border}`, display:'flex',justifyContent:'center',alignItems:'center', height:'20vh'}}>
				{isVisible && 
				<div style={{}}className="animate__animated animate__fadeIn">
					Hello
				</div>
				}
			</div>
			<div style={{background: `${theme.background}`, fontSize: '35px', color: `${theme.border}`, display:'flex',justifyContent:'center',alignItems:'center', height:'5vh'}}>
				{isVisibleSubheading && 
				<div style={{}}className="animate__animated animate__fadeIn">
					Hover over the Node
				</div>
				}
			</div>
			<div style={{background: `${theme.background}`,display:'flex', justifyContent:'center', alignItems:'center', height:'50vh'}}>
				<MenuNode node={data} direction={0} range={360} diameter={150} click={change_color}/>
			</div>
			<div style={{background: `${theme.background}`, fontSize: '20px', color: `${theme.border}`, display:'flex',justifyContent:'center',alignItems:'center', height:'25vh'}}>
				{isVisibleSuffix&& 
				<div style={{}}className="animate__animated animate__fadeIn">
					This is my project portfolio website
				</div>
				}
			</div>
		</>
	);

}

export default HomePage;
