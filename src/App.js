import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import HomePage from './HomePage.js';
import ArticlePage from './ArticlePage.js';
import CollectionPage from './CollectionPage.js';
import {ReactComponent as SunIcon} from './node_icons/sun.svg';
import {ReactComponent as MoonIcon} from './node_icons/moon.svg';
import {ReactComponent as LinkIcon} from './node_icons/link.svg';
import {ReactComponent as ProfileIcon} from './node_icons/profile.svg';
import {ReactComponent as GithubIcon} from './node_icons/github.svg';
import {ReactComponent as LambdaIcon} from './node_icons/lambda.svg';
import {ReactComponent as DocumentIcon} from './node_icons/document.svg';
import {ReactComponent as AiIcon} from './node_icons/ai.svg';
import {ReactComponent as CacheIcon} from './node_icons/cache.svg';

function App() {
	const data =  {
		sublabel: 'Change Theme',
		icon: [SunIcon,MoonIcon],
		link:'',
		description:'',
		subnodes: [
			{
				sublabel: 'Biographical Info',
				icon: ProfileIcon,
				link:'/bio',
				description:'Here are the pages related to me, and meta information about this website.',
				subnodes: [
					{
						sublabel: 'Github',
						icon: GithubIcon,
						link:'https://github.com/lucalexander/',
						description:'This is my public Github, it holds the major git repositories related to my projects. I try to keep most codebases I work on public, with the exception of proprietary projects for my job, and some older code that I dont believe is a good representation of my current ability.',
						subnodes: []
					},
					{
						sublabel: 'Luc',
						icon: DocumentIcon,
						link:'/bio/luc',
						description:'Hi, I\'m Luc.\nI use this website to display past projects I found interesting to work on, and some current development and research efforts I\'m making in my personal life, as well as larger projects for university. The domain of this website is restricted to concepts of computation and computer sciences.\nAs much as my identity reaches far beyond these topics, I am a programmer. This is my academic career, my job, and my main hobby.\n\nCurrently im working on the initial stages of this very website, a pretty unique neural architecture search system for neural networks as the capstone project for my university computer science honors program, and developing an indepth understanding of programs as abstracted expressions of lambda calculus to prepare for future projects in pure functional programming so that future solutions to problems I solve can be more computationally pure and natural.\n\nHere\'s an (out of date) resume as a placeholder until I revise it for the present day.',
						subnodes:[]
					}
				]
			},
			{
				sublabel: 'Lambda Calculus',
				icon: LambdaIcon,
				link:'/lambda',
				description:'The lambda calculus is a Turing equivalent mathematical system, meaning its both a pure mathematic language, and a programming language, cementing the mathematic root of computation. All programs that can be written are expressible in lambda caluclus, all programming languages are abstractions over this system. It is also the basis for the functional programming paradigm which lead to popular programming languaages like Haskell, Erlang, Ocaml, Lisp (plus all of its dialects).\n\nI want to compose a standard library for pure lambda calculus, so that we can understand how some of our most basic digital computing tools should be implemented in a functionally pure language. This will optimally lead to a very expressive programming language that has both high and low level control, is fast, and allows the user to intuit very natural solutions without sacrificing maintainability.',
				subnodes: [
					{
						sublabel: 'Data Structures',
						icon: CacheIcon,
						link:'',
						description:'While I have written up the theory for part of this page, I have not yet created a formal document for the vector, matrix, graph, and their related transformations.',
						subnodes:[]
					},
					{
						sublabel: 'Number Systems',
						icon: DocumentIcon,
						link:'/lambda/number_systems',
						description:'Before we do any crazy implementations in our functional standard library, we need ways of expressing the more primitive types.\n\nIn digital computer science, this constitutes:\nBooleans (discrete integral values representing true and false, or numerically 1 and 0)\nIntegers\nCharacters (which can be encoded as natural numbers which represent some text character)\nDecimal numbers\n\nAny further data types require some sense of structure. We will define a small 2 dimension vector we will use as a pair, and later in the data structures section we will define arbitrary dimension vectors as a monad. At that point we can create more complicated types, like strings.\nFor now though, we need a way to represent our primitives, and since they are all encodings of numeric systems, we will define these first.',
						subnodes:[
							{
								sublabel: 'Natural Numbers',
								icon: DocumentIcon,
								link:'/lambda/number_systems/naturals',
								description:'Here we are implementing a monad for natural numbers using church encodings. Church numerals are a base 1 numeral system, and the resuling representation allows controlled finite recursion, which is very useful both in defining the operations relevant to the monad, and in general computational problem solving.',
								subnodes: []
							},
							{
								sublabel: 'Integers',
								icon: DocumentIcon,
								link:'/lambda/number_systems/integers',
								description:'Here we use our natural number system and its related features to define a numeric set with wider cardinality. This is leading us to a general purpose representation of quantities and magnitudes in computation.',
								subnodes: []
							},
							{
								sublabel: 'Rational Numbers',
								icon: DocumentIcon,
								link:'/lambda/number_systems/rationals',
								description:'This page and its accompanying document are misnamed, technically this implementation does not support radicals yet, and therefore does not constitute a real number system, only a rational one. That being said...\n\nThis document is a demonstrative implementation of how the prior natural number and integer representation systems in the lambda calculus can be applied to create a useful number system for general computation. When we work with numbers in computers, the most expressible form we need is rational numbers, typically represented as floating point decimal numbers. These are encoded in base 2, and have limited precision. For theoretical systems of computation, there are easier and more precise representation methods, although the precision is often arbitrary. Here we detail this and implement most of the basic operations needed for the rational number monad.',
								subnodes: []
							}
						]
					}
				],
			},
			{
				sublabel: 'NAS Capstone',
				icon: AiIcon,
				link:'/nas',
				description:'Neural Architecture Search (NAS) is the process of programatically devising an optimal architecture of a neural network for a given problem.\n\nThis is my university capstone project for the computer science department. It poses neural networks used for machine learning as modular node graphs, where each node represents a layer of neurons in a neural network. From this we can grow networks and try different graph structures to explore the neural space with reinforcement learning. To exploit the information from the explored search space, we perform a union of the most successful graph architectures, whos branches\' discrete presences can be relaxed into a continuous (and therefore differential) decision, whos branch inclusion weights can be learned, and then resolidified to a discrete graph neural network. The representation allows parallel branches to the network, which can loop back in time to create recurrant memory units, and gated memory.\n\nThe software as a project under the university will conclude in Ddecember, and will be a minimum viable product implementation, not feature complete. Based on its success I will expand and improve it.',
				subnodes: [
					{
						sublabel: 'Concept',
						icon: DocumentIcon,
						link:'/nas/concept',
						description:'This was the (verbose) project proposal. It details the steps of the project, and the required systems that need to be implemented.\n\n The references at the bottom of the pdf ar hyperlinks, but the renderer functionality for this breaks on some browsers, so there are the references:',
						subnodes: [],
					},
					{
						sublabel: 'Framework',
						icon: DocumentIcon,
						link:'/nas/framework',
						description:'Before starting the NAS implementation, I needed a machine learning framework that provided the features I needed. No large modern framework has everything I need, and while I could have cobbled together some system that emulates the desired feature, I would much rather have complete control over the system im using. This means writing it myself.\n\nThis allows me to have complete control over the efficiency, memory management, andn expressiibility of the user interface module. It also allows me to add specific features in the future that may not be available in other tools.',
						subnodes: [
							{
								sublabel: "Progress Reports",
								icon: DocumentIcon,
								link:'/nas/framework/reports',
								description:'Here are the progress reporots for this frameworks development. These are part of the work required for the capstone.',
								subnodes: [
									{
										sublabel: "Implementation Document",
										icon: DocumentIcon,
										link: '/nas/framework/reports/implementation',
										description:'This is the initial implemtation specification of the framework. It details the plan for the structure of the internal data structures.',
										subnodes: []
									},
									{
										sublabel: "Structure",
										icon: DocumentIcon,
										link: '/nas/framework/reports/structure',
										description:'This is the first progress update, it details the resulting internal structure and user level tools in their current state. It also lays out the next stge of development.',
										subnodes: []
									}
								]
							},
							{
								sublabel: 'Repository',
								icon: GithubIcon,
								link:'https://github.com/LucAlexander/NeuroMorph',
								description:'This is the public git repository of the framework segment of the project hosted on Github.',
								subnodes: []
							},
							{
								sublabel: 'Documentation',
								icon: DocumentIcon,
								link:'',
								description:'This is where the documentation for the user level module of the finished tool will go. The tool is not finished yet, so this has not yet been written.',
								subnodes: []
							}
						]
					},
					{
						sublabel: 'Repository',
						icon: GithubIcon,
						link:'',
						description:'Nas project repository.',
						subnodes: []
					},
					{
						sublabel: "Documentation",
						icon: DocumentIcon,
						link:'',
						description:'And its accompanying usage documentation.',
						subnodes: []
					}
				]
			},
			{
				sublabel:'Cache Efficient Framework',
				icon:CacheIcon,
				link:'/xi',
				description:'This is the the most recent in a saga of software framework development efforts that optimize for high resultant program locality. Written in ANSII C with some help from the SDL2 media library, it compiles projects to Linux, Windows, and Web Assembly through emscripten. I dont have any formal documents for this project, only for its prercursor which was done as a university project for the honors program, which is also stored on git.',
				subnodes:[
					{
						sublabel: 'Repository',
						icon: GithubIcon,
						link:'https://github.com/LucAlexander/Xi',
						description:'Git repository hosted on Github.',
						subnodes: []
					},
					{
						sublabel: 'Documentation',
						icon: DocumentIcon,
						link:'https://github.com/LucAlexander/Xi/blob/master/README.md',
						description:'Documentation stored within the repository.',
						subnodes: []
					}
				]
			}
		],
	};
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage data={data}/>}/>
				<Route path="/lambda" element={<ArticlePage url="/basics.pdf" subs={data.subnodes[1].subnodes} node={data.subnodes[1]} />}/>
				<Route path="/lambda/number_systems" element={<CollectionPage subs={data.subnodes[1].subnodes[1].subnodes} node={data.subnodes[1].subnodes[1]}/>}/>
				<Route path="/lambda/number_systems/naturals" element={<ArticlePage url="/naturals.pdf" subs={data.subnodes[1].subnodes} node={data.subnodes[1].subnodes[1].subnodes[0]} />}/>
				<Route path="/lambda/number_systems/integers" element={<ArticlePage url="/integers.pdf" subs={data.subnodes[1].subnodes} node={data.subnodes[1].subnodes[1].subnodes[1]}/>}/>
				<Route path="/lambda/number_systems/rationals" element={<ArticlePage url="/reals.pdf" subs={data.subnodes[1].subnodes} node={data.subnodes[1].subnodes[1].subnodes[2]}/>}/>
				<Route path="/xi" element={<CollectionPage subs={data.subnodes[3].subnodes} node={data.subnodes[3]}/>}/>
				<Route path="/bio" element={<CollectionPage subs={data.subnodes[0].subnodes} node={data.subnodes[0]}/>}/>
				<Route path="/bio/luc" element={<ArticlePage url="/resume.pdf" subs={data.subnodes[0].subnodes} node={data.subnodes[0].subnodes[1]}/>}/>
				<Route path="/nas" element={<CollectionPage subs={data.subnodes[2].subnodes} node={data.subnodes[2]}/>}/>
				<Route path="/nas/concept" element={<ArticlePage url="/proposal.pdf" subs={data.subnodes[2].subnodes} node={data.subnodes[2].subnodes[0]} references={[
					{
						reference: 'https://iq.opengenus.org/back-propagation-through-time/',
						text: 'Backpropogation through time'
					},
					{
						reference: 'https://medium.com/analytics-vidhya/a-complete-guide-to-adam-and-rmsprop-optimizer-75f4502d83be',
						text: 'Advanced optimizers'
					},
					{
						reference: 'https://optimization.cbe.cornell.edu/index.php?title=Adam',
						text: 'Adam optimizer'
					},
					{
						reference: 'https://inst.eecs.berkeley.edu/~cs188/sp20/assets/files/SuttonBartoIPRLBook2ndEd.pdf',
						text: 'Reinforcement Learning'
					},
					{
						reference: 'https://differentiable.xyz/papers',
						text: 'Works on differential relaxations of structures'
					},
					{
						reference: 'https://ieeexplore.ieee.org/document/5595777',
						text: 'Supergraph composition of models'
					},
					{
						reference: 'https://towardsdatascience.com/illustrated-guide-to-lstms-and-gru-s-a-step-by-step-explanation-44e9eb85bf21',
						text: 'LSTM and GRU models'
					},
				]}/>}/>
				<Route path="/nas/framework" element={<CollectionPage subs={data.subnodes[2].subnodes[1].subnodes} node={data.subnodes[2].subnodes[1]}/>}/>
				<Route path="/nas/framework/reports" element={<CollectionPage subs={data.subnodes[2].subnodes[1].subnodes[0].subnodes} node={data.subnodes[2].subnodes[1]}/>}/>
				<Route path="/nas/framework/reports/implementation" element={<ArticlePage url="/framework_implementation.pdf" subs={data.subnodes[2].subnodes} node={data.subnodes[2].subnodes[1].subnodes[0].subnodes[0]}/>}/>
				<Route path="/nas/framework/reports/structure" element={<ArticlePage url="/progress_report_framework_0.pdf" subs={data.subnodes[2].subnodes} node={data.subnodes[2].subnodes[1].subnodes[0].subnodes[1]}/>}/>
			</Routes>
		</Router>
	);
}

export default App;
