import React from 'react';  
import {Link} from 'react-router';
require('scss/module.scss');

var Main = React.createClass ({  
	// Initial state will be defined which will clear the data after editing the button
	getInitialState(){
		return {
			editForm:false,
			getname: '',
			getemail: '',
			getheadline: '',
			getskill: '',
			geturl: ''
		}
	},
	getEditableClass(){
		if(this.state.editForm===true){
			return 'editable';
		}else{
			return 'non-editable';
		}
	},
	SubmitForm(e){
		e.preventDefault();
		if(this.state.editForm===false){
			this.setState({
				editForm: true,
				getname: '',
				getemail: '',
				getheadline: '',
				getskill: '',
				geturl: ''
			});
		}else{
			this.setState({editForm: false});
			let apiData ={};
			apiData['getname'] = this.state.getname;
			apiData['getemail'] = this.state.getemail;
			apiData['getheadline'] = this.state.getheadline;
			apiData['getskill'] = this.state.getskill;
			apiData['geturl'] = this.state.geturl;
			$.ajax({
				type: 'POST',
				url: "/savedata", 
				data: apiData, 
				dataType: 'json' , 
				success: function(result){
		        	console.log(res);
			    },
			    error:function(err){
			    	console.log(err);
			    }
			});
		}
	},
	getAtrribute(){
		if(this.state.editForm===false){
			return 'disabled';
		}else{
			return '';
		}
	},
	getButtonCss(){
		if(this.state.editForm===false){
			return 'edit-img';
		}else{
			return 'updated-img';
		}
	},
	autoGrow(){
	    this.refs.headline.style.height = "5px";
	    this.refs.headline.style.height = (this.refs.headline.scrollHeight)+"px";
	},
	changeText(e) {
		this.setState({
			getname: e.target.value
		});
	},
	changeEmail(e) {
		this.setState({
			getemail: e.target.value
		});
	},
	changeHeadline(e) {
		this.setState({
			getheadline: e.target.value
		});
	},
	changeSkill(e) {
		this.setState({
			getskill: e.target.value
		});
	},
	changeUrl(e) {
		this.setState({
			geturl: e.target.value
		});
	},
	render() {
		return (
			<div className="row">
				<div className="model-box">
					<div className="img-par">
							<div className="img-child">
								<div className="img-base">
								</div>
							</div>
					</div>
					<form ref="formId" autoComplete="off">
						<div className="header-box">
							<div className="col-xs-3"></div>
							<div className="col-xs-6">
								<input name="getName" className="input-class name-class" disabled={this.getAtrribute()} value={this.state.getname} onChange={this.changeText} placeholder="Type your Name"></input>
								<input name="getEmail" className="input-class email-class" disabled={this.getAtrribute()} value={this.state.getemail}  onChange={this.changeEmail} placeholder="Type your Email Id"></input>
							</div>
							<div className="col-xs-3 submit-button">
								<div className="button-par">
									<button className={"button-class " + this.getButtonCss()} onClick={this.SubmitForm}></button>
								</div>
								
							</div>
						</div>
						<div className="content-area">
							<p className="heading">HEADLINE</p>
							<textarea name="getHeading" className={"content-text " + this.getEditableClass()}
							disabled={this.getAtrribute()} ref="headline" value={this.state.getheadline}  onChange={this.changeHeadline} onKeyUp={this.autoGrow}
							placeholder="type your headline"></textarea>
							<p className="heading">SKILLS</p>
							<input name="getSkills" className={"content-text " + this.getEditableClass()}
							disabled={this.getAtrribute()} onChange={this.changeSkill} value={this.state.getskill}   placeholder="type your skills"></input>
							<p className="heading">URL</p>
							<input name="url" className={"content-text " + this.getEditableClass()}
							disabled={this.getAtrribute()} onChange={this.changeUrl} value={this.state.geturl}  placeholder="type your website/blog URL"></input>
						</div>
						<div className="footer">
							<div className="logo-name"></div>
							<div className="logo-class"></div>
						</div>
					</form>
				</div>
		    </div>
		);
	}
});

module.exports = Main;