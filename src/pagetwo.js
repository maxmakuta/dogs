import React from "react";
import webService from "./webservice";

class Rooms extends React.Component {
	constructor(props){
		super(props);
		this.hideMe = this.hideMe2.bind(this);
		this.state = {
			Retriever: [
				{
					breed: "chesapeake",
					color: "white"
				},
				{
					breed: "curly",
					color: "white"
				},
				{
					breed: "flatcoated",
					color: "white"
				},
				{
					breed: "golden",
					color: "white"
				},
				
			],
			
			Spaniel: [
				{
					breed: "blenheim",
					color: "white"
				},
				{
					breed: "brittany",
					color: "white"
				},
				{
					breed: "cocker",
					color: "white"
				},
				{
					breed: "irish",
					color: "white"
				},
				{
					breed: "japanese",
					color: "white"
				},
				{
					breed: "sussex",
					color: "white"
				},
				{
					breed: "welsh",
					color: "white"
				}
			],

			
		}
	}

	componentDidMount(){
		// setTimeout( () => {
		// 	this.props.history.push("/"); /// Программный переход внутри Router.
		// }, 10000 );
	}
	hideMe2(){

		
	}




	render() {
		

		let goods = (<h1>Oppps, Something went wrong!</h1>);

		if(this.props.match.params.goodId == "Retriever" || this.props.match.params.goodId == "Spaniel"){
			let key = this.props.match.params.goodId; 
			
			goods = this.state[key].map( item => {
				return (<li key={item.breed} className="list-group-item">{item.breed} <button key={item.breed} onClick={this.hideMe2}> <img src="http://localhost:8080/img/dog.png"/> </button></li>  )
			} )
		}

		return (
				<div className="col-xs-12 col-md-4 col-md-offset-4"
					style={{height: 500, backgroundColor: "lightblue"}}
				>
					
					<h1>{this.props.match.params.goodId}</h1>
					<ul className="list-group">
						{goods}

					</ul>
				</div>
			)
	}
}

export default Rooms;

