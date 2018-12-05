import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PageOne from "./pageone";
import PageTwo from "./pagetwo";
import "./style.css";


export default class List extends React.Component {
	constructor(){
		super();
		this.state = {
			currentRoom: null,
		}
		

	}

	render(){
		return (
			<Router>
				<div className="container">
					<div className="col-xs-12 col-md-4 col-md-offset-4">
						<nav>
							<Link to="/">Home page</Link>
							<Link to="/Retriever">Retriever</Link>
							<Link to="/Spaniel">Spaniel</Link>
						</nav>
					</div>
					<Route exact path="/" render={ (props) => <PageOne text="DOGS" /> } />
					<Route path="/:goodId" component={PageTwo} />				
					{/*<Route path="/:goodId" render={ (props) => {
						console.log(props);
						return <PageTwo match={props.match} history={props.history}/>
					}}  />*/}
				{/*<Route path="/:goodId/:item" component={PageThree} />*/}
				</div>
			</Router>
		)
	}
};



