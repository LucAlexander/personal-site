import {useEffect, useRef, useContext, useState} from 'react';
import ThemeContext from './theme.js';
import {ReactComponent as BackIcon} from './node_icons/back.svg';
import {useNavigate} from 'react-router-dom';
import MenuNode from './MenuNode.js';
import Scrollable from './Scrollable.js'

function CollectionPage({subs, node}){
	const {theme, set_theme, theme_name} = useContext(ThemeContext)
	const navigate = useNavigate();

	const subdata = {
		sublabel:'',
		icon: BackIcon,
		link:'',
		description:'',
		subnodes:subs
	};

	const back = () => {
		navigate('/');
	}

	const navigateToLink = (icon_index, set_icon_index, set_theme, theme_name, link) => {
		if (link[0] == '/'){
			navigate(link);
			return;
		}
		window.location.href = link;
	};

	const item_style={
		height:'50px',
		padding:'50px',
		transition: 'opacity 0.3s'
	};

	return (
		<div style={{paddingTop: '100px', width:'100vw', height:`100vh`, background:`${theme.background}`, color:`${theme.text}`, overflow:'hidden'}}>
			<div style={{position:'fixed', top:'75px', left:'75px'}}>
				<MenuNode node={subdata} direction={45} range={120} diameter={100} click={back}/>
			</div>
			<div style={{whiteSpace: 'pre-wrap', position: 'fixed', top:'75px',left:'50%', transform: 'translateX(-50%)'}}>
				<div style={{fontSize: '200%'}}>
					{node.sublabel}
				</div>
				<br></br>
				{node.description}
				<hr></hr>
			</div>
			<Scrollable>
				<div style={item_style}></div>
				<div style={item_style}></div>
				<div style={item_style}></div>
				<div style={item_style}></div>
				<div style={item_style}></div>
				{subs.map((subnode, index)=>{
					const dynam = {...subnode};
					dynam.subnodes=[]
					return <div style={item_style}>
						<MenuNode node={dynam} direction={45} range={120} diameter={100} click={navigateToLink}/>
						<div style={{position:'relative', left:'100px',display: '-webkit-box',
						    webkitBoxOrient: 'vertical',
						    lineHeight: '1.5em',       // Adjust as per your requirement
						    maxHeight: '6em',         // 1.5em * 4
						    overflow: 'hidden',
						    webkitLineClamp: 4,
						    wordWrap: 'break-word',
							width: '300px',
							textOverflow: 'ellipses'
						}}>{dynam.description}</div>
					</div>
				})}
				<div style={item_style}></div>
				<div style={item_style}></div>
				<div style={item_style}></div>
				<div style={item_style}></div>
			</Scrollable>
		</div>
	);
}
export default CollectionPage;
