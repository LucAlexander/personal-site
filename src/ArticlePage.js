import {useEffect, useRef, useContext, useState} from 'react';
import ThemeContext from './theme.js';
import {pdfjs, Document, Page} from 'react-pdf';
import './hideannotations.css';
import {ReactComponent as CloseIcon} from './node_icons/close.svg';
import {ReactComponent as PlusIcon} from './node_icons/plus.svg';
import {useNavigate} from 'react-router-dom';
import MenuNode from './MenuNode.js';
import {ReactComponent as BackIcon} from './node_icons/back.svg';
import "animate.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ArticlePage({url, subs, node, references}){
	const {theme, set_theme, theme_name} = useContext(ThemeContext);
	const [numPages, setNumPages] = useState(null);
	const [showPDF, setShowPDF] = useState(false);
	const navigate = useNavigate();

	function docLoad({numPages : newNumPages}){
		setNumPages(newNumPages);
	}

	useEffect(()=>{
		document.documentElement.style.setProperty('--pdf-filter', theme.pdf_filter)
	}, [theme]);

	const back = () => {
		navigate('/');
	}
	const subdata = {
		sublabel:'',
		icon: BackIcon,
		link:'',
		description : '',
		subnodes:subs
	};

	return (
		<div className="animate__animated animate__fadeIn"style={{position:'relative',width:"100vw",height:"100vh",background:`${theme.background}`,overflow: "hidden"}}>
			<div style={{position: 'absolute',top: '10px',left: '10px',zIndex: '0', color: `${theme.text}`}}>
				<div style={{float:'left',padding:'50px'}}>
					<MenuNode node={subdata} direction={45} range={120} diameter={100} click={back}/>
				</div>
				<div style={{whiteSpace: 'pre-wrap', float:'left',padding:'50px',width:'50vw', fontSize:'150%'}}>
					<div style={{fontSize:'200%'}}>
						{node.sublabel}
					</div>
					<br></br>
					{node.description}
					{references && 
						<table>
						<br></br>
						{references.map((link, index) => (
							<tr><td style={{border: '1px solid black', borderCollapse: 'collapse'}}>
								<a key={index} href={link.reference} target="_blank" rel="noopener noreferrer">
									{link.text}
								</a>
							</td></tr>
						))}
						</table>
					}
				</div>
				<div style={{float:'left',padding:'50px'}}>
					{!showPDF && <>
						<button
							style={{position: 'absolute', backgroundColor: `${theme.background}`}}
							onClick={()=>{setShowPDF(true);}}
						>
							<Document file={url} onLoadSuccess={docLoad}>
									<Page scale={1} renderTextLayer={false} pageNumber={1} style={{margin: "0", padding: "0"}}/>
									<div style={{position:'absolute',left:'50%',top:'50%',color:`${theme.border}`}}>
										<PlusIcon style={{position:'absolute',left:'-150px',top:'-150px',width:'300px',height:'300px'}}/>
									</div>
							</Document>
						</button>
					</>}
				</div>
			</div>
			{showPDF &&<>
				<div style={{backgroundColor: `${theme.border}`, opacity: '0.7', width:'100%',height:'100%'}}/>
				<button
					onClick={()=>{setShowPDF(false);}}
					style={{borderRadius:'50%',backgroundColor: `${theme.background}`,border:`2px solid ${theme.border}`,color:`${theme.border}`,zIndex:'1001', position: 'absolute', top:'50px',right:'150px',width:'50px',height:'50px'}}
				>
					<CloseIcon style={{
						width: '100%',
						height: '100%'
					}}/>
				</button>
				<div style={{position: 'absolute',top: '0',left: '0',width: '100%',height: '100%',zIndex: '1000',overflowY: 'scroll'}}>
					<div style={{backgroundColor: `${theme.element_background}`,borderRadius: '20px',width: '50vw',margin: '10vh 25vw'}}>
						<Document file={url} onLoadSuccess={docLoad}>
							{Array.from(new Array(numPages), (el, index) => (
								<Page scale={1.6} renderTextLayer={false} key={`page_${index+1}`} pageNumber={index+1} style={{margin: "0", padding: "0"}}/>
							))}
						</Document>
					</div>
				</div>
			</>}
		</div>
	);
}
export default ArticlePage;
