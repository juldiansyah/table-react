import React, { Component } from 'react';
import './style.scss';

class Popup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: null,
			submitted: false
		}
	}

	onChange(e) {
		this.setState({
			message: e.target.value
		})
	}

	send () {
		this.setState({submitted: true})
		if(this.state.message) {
			this.close();
			setTimeout(() => {
				alert(this.state.message);
			}, 200)
		}
	}

	close () {
		this.props.closePopup();
		this.setState({message: null})
	}

	render() {
		let {driver} = this.props;
 
		return (
			<div className="popup-container__background">
				<div className="popup-container">
					<div className="popup-container__top">
						<h4>Notify {driver.name}</h4>
						<textarea onChange={this.onChange.bind(this)} className={this.state.submitted && !this.message ? 'error' : null } placeholder="Insert Message Here..."></textarea>
					</div>
					<div className="popup-container__bottom">
						<button className="sends" onClick={this.send.bind(this)}>Send</button>
						<button className="cancel" onClick={this.close.bind(this)}>Cancel</button>
					</div>
				</div>
			</div>
		);
	}

}

export default Popup;