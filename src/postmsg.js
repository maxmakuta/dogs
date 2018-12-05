import React from "react";
import webService from "./webservice";

export default class PostMsg extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			text: "",
		}
		this.setText = this.setText.bind(this);
		this.sendData = this.sendData.bind(this);
	}

	setText({target:{value:text}}){
		this.setState({text});
	}

	sendData(){
		if(this.props.currentRoom && this.state.text){
			let msgObj = {
				text: this.state.text,
				userId: 434353,
				roomId: this.props.currentRoom,
			}
			webService.postData(`http://localhost:6060/api/addmessage`, JSON.stringify(msgObj))
			.then( data => {
				this.setState({text: ""});
				this.props.setRoomId(this.props.currentRoom);
				// console.log("Data was sent", data);
			});
			
		}
	}

	render() {


		return (
				<ul className="list-group">
					<li className="list-group-item">
						<div className="input-group">
							<input value={this.state.text} onChange={this.setText} className="form-control" type="text" />
							<span className="input-group-btn">
								<button
									/// disabled={this.props.currentRoom && this.state.text ? false : true}
									className="btn btn-default"
									onClick={this.sendData}
									>
									Send Message
								</button>
							</span>
						</div>
					</li>
				</ul>
			)
	}
}


