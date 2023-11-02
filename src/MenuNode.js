import React, { useState, useContext, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import 'animate.css';
import ThemeContext from './theme.js';

const MenuNode= ({ node, direction, range, diameter, click }) => {
	const {theme, set_theme, theme_name} = useContext(ThemeContext);
	const [icon_index, set_icon_index] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const navigate = useNavigate();
	const partition = range/node.subnodes.length
	const vector_length = 150;
	const subnode_size = 100;
	const button_size = diameter;
	const svg_length = vector_length+(button_size);
	const theta_offset = (partition/2)+(direction-(range/2));
	const subbutton = (icon_index, set_icon_index, set_theme, theme_name, link) => {
		if (link[0] == '/'){
			navigate(link);
			return;
		}
		window.location.href = link;
	};
	const Node_icon = Array.isArray(node.icon) ? node.icon[icon_index % node.icon.length] : node.icon;
	return (
		<div
		className="animate__animated animate__fadeIn"
		style={{position: 'relative'}}
		onMouseEnter={() => {setIsHovered(true);}}
		onMouseLeave={() => {setIsHovered(false);}}
		>
			<button
				style={{
					backgroundColor: `${theme.element_background}`,
					border: `1px solid ${theme.border}`,
					color: `${theme.text}`,
					position: 'absolute',
					top: `${-button_size/2}px`,
					left: `${-button_size/2}px`,
					width: `${button_size}px`,
					height: `${button_size}px`,
					borderRadius: '50%',
					padding: '10px',
					cursor: 'pointer'
				}}
				onClick={()=>click(icon_index, set_icon_index, set_theme, theme_name, node.link)}
			>
				{isHovered && node.sublabel.length!=0&& <label className="animate__animated animate__slideInDown"style={{
					position: 'absolute',
					top: `${-button_size/4}px`,
					left: '0px',
					whiteSpace: 'nowrap',
					overflow: 'hidden',
					textOverflow: 'elipsis',
					border: `2px solid ${theme.border}`,
					backgroundColor: `${theme.element_background}`,
					color: `${theme.text}`,
					padding: '5px',
					zIndex: '100'
				}}>{node.sublabel}</label>}
				<Node_icon style={{
					pointerEvents: 'none',
					width: '100%',
					height: '100%',
					fill: `${theme.border}`,
				}}/>
			</button>
			{isHovered && node.subnodes.length > 0 && (
			<div>
				{node.subnodes.map((subnode, index) => {
					const theta = theta_offset+(index*partition);
					const x_component = vector_length*Math.cos(theta*(Math.PI/180));
					const y_component = vector_length*Math.sin(theta*(Math.PI/180));
					return <div>
						<svg style={{
							position: 'absolute',
							top: `${-svg_length/2}px`,
							left: `${-svg_length/2}px`,
							width: `${svg_length}px`,
							height: `${svg_length}px`,
							zIndex: '-1000000'
						}}>
							<line x1={svg_length/2} y1={svg_length/2} x2={(svg_length/2)+x_component} y2={(svg_length/2)+y_component} stroke={theme.border} stroke_width="2"/>
						</svg>
						<div style={{
							position: 'absolute',
							top:`${y_component}px`,
							left:`${x_component}px`,
							width:'20px',
							height:'20px'
						}}>
							<MenuNode key={index} node={subnode} direction={theta} range={range/1.5} diameter={subnode_size} click={subbutton}/>
						</div>
					</div>
				})}
			</div>
			)}
		</div>
	);
};

export default MenuNode;

