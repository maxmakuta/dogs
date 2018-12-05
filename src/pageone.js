import React from "react";
import styled from "styled-components";
// import f1 from './img/f1.jpg'



export default class Messages extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			color: "grey",
			display: "block",
		}
		this.hideMe = this.hideMe.bind(this);

	}

	hideMe(){

		// this.setState({display: "none"});
	}



	render() {


		let MyButton = styled.button`
			width: 50px;
			height: 30px;
			background-color: ${this.state.color};
			border: 1px solid grey;
		`;

		let MyP = styled.p`
			display: ${this.state.display}
		`;
		let MyImg = styled.img`
			width: 290px;
			height: 350px;
		`;
		
		return (
				<div className="col-xs-12 col-md-4 col-md-offset-4"
					style={{height: 500, backgroundColor: "lightgrey"}}
				>
					<h1>{this.props.text}</h1>
					<MyP>
						<MyImg src="http://localhost:8080/img/dogs.jpg"  />
						<MyButton onClick={this.hideMe}> About </MyButton>
					</MyP>
				</div>
			)
	}
}

