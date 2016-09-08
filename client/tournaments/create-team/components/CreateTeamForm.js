//Import Packages
import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

//Import Depdendencies

//Component: CreateTeamForm - Form used to create a team for tournaments

export default class CreateTeamForm extends React.Component{
    constructor(){
        super();
        this.state = {error: false};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        //Capture values in fields
        const name = ReactDOM.findDOMNode(this.refs.teamName).value;
        const memberName1 = ReactDOM.findDOMNode(this.refs.teamMember1).value;
        const memberName2 = ReactDOM.findDOMNode(this.refs.teamMember2).value;
        const memberName3 = ReactDOM.findDOMNode(this.refs.teamMember3).value;
        const memberName4 = ReactDOM.findDOMNode(this.refs.teamMember4).value;
        const memberName5 = ReactDOM.findDOMNode(this.refs.teamMember5).value;
        //Put player usernames into an object
        const teamName = name;
        console.log(teamName);
        const leaders = [memberName1];
        const members = [memberName1, memberName2, memberName3, memberName4, memberName5];
        const team = {
            "teamName" : teamName,
            "leaders" : leaders,
            "members" : members
        }
        console.log(team);

        if (name !== '' && memberName1 !== '' && memberName2 !== '' &&
            memberName3 !== '' && memberName4 !== '' && memberName5 !== '') {
            Meteor.call('team_create', team,
                (err) => {
                    if (err) {
                        console.log('Failed to create Team.');
                        this.setState({error: err.reason});
                        console.log(err);
                        //console.log(team);
                    } else {
                        console.log('Successfully created Team.');
                        FlowRouter.go("/view-teams");
                    }
                }
            );
        } else {
            this.setState({error: 'Team Name and Team Members cannot be empty. Please try again.'});
        }
    }

    //Need to create a container for pub and sub
    currentUser(){
        let username = Meteor.users.findOne({_id: Meteor.userId()});
        return username.username;
    }

    render(){
        let errorMessage;
        if (this.state.error !== false){
            errorMessage = (
                <div className="ui top attached error message">
                    <i className="icon warning"></i>
                    {this.state.error}
                </div>
            )
        }
        return(
            <div>
                {errorMessage}
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label>Team Name</label>
                        <input name="teamName" placeholder="Team Name" type="text" ref="teamName" />
                    </div>
                    <div className="field">
                        <label>Team Members</label>
                        <div className="ui input labeled field">
                            <div className="ui label">Team Leader (you)</div>
                            <input name="teamMember1" placeholder="Team Member Username" type="text" ref="teamMember1" /*Login bug, comment when working*/value={this.currentUser()} disabled="true" />
                        </div>
                        <div className="field">
                            <input name="teamMember2" placeholder="Team Member Username" type="text" ref="teamMember2" />
                        </div>
                        <div className="field">
                            <input name="teamMember3" placeholder="Team Member Username" type="text" ref="teamMember3" />
                        </div>
                        <div className="field">
                            <input name="teamMember4" placeholder="Team Member Username" type="text" ref="teamMember4" />
                        </div>
                        <div className="field">
                            <input name="teamMember5" placeholder="Team Member Username" type="text" ref="teamMember5" />
                        </div>
                    </div>
                    <button className="ui button primary" type="submit">Create Team</button>
                </form>
            </div>
        )
    }
}
