//Import Packages
import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { mount } from 'react-mounter';

//Import Dependencies
//Layouts
import HomeLayout from './home/HomeLayout';
import LoginLayout from './login/LoginLayout';
import RegisterLayout from './register/RegisterLayout';
import AboutLayout from './about/AboutLayout';
import CreateTeamLayout from './tournaments/create-team/CreateTeamLayout';
import ViewTeamsLayout from './tournaments/view-teams/ViewTeamsLayout';
import CreateTournamentLayout from './tournaments/create-tournament/CreateTournamentLayout';
import ViewTournamentLayout from './tournaments/view-tournaments/ViewTournamentsLayout';
import ManageTeamsLayout from './user/manage-teams/ManageTeamsLayout';

//Components
import NavBar from './common/NavBar';
import Home from './home/components/Home';
import About from './about/components/About';
import LoginForm from './login/components/LoginForm';
import RegisterForm from './register/components/RegisterForm';

//Containers
import ViewTeamsContainer from './tournaments/view-teams/ViewTeamsContainer';
import CreateTeamContainer from './tournaments/create-team/CreateTeamContainer';
import ViewTournamentContainer from './tournaments/view-tournaments/ViewTournamentsContainer';
import CreateTournamentContainer from './tournaments/create-tournament/CreateTournamentContainer';
import ManageTeamsContainer from './user/manage-teams/ManageTeamsContainer';


/*

This is the main routing file, all routes are placed in here

*/

//Routes

FlowRouter.route("/", {
    name: "Home",
    action() {
        mount(HomeLayout, {
            navBar: (<NavBar />),
            home: (<Home />),
        })
    }
});

FlowRouter.route("/login", {
    name: "Login",
    action() {
        mount(LoginLayout, {
            navBar: (<NavBar />),
            loginForm: (<LoginForm />),
        })
    }
});

FlowRouter.route("/register", {
    name: "Register",
    action() {
        mount(RegisterLayout, {
            navBar: (<NavBar />),
            registerForm: (<RegisterForm />),
        })
    }
});

FlowRouter.route("/about", {
    name: "About",
    action() {
        mount(AboutLayout, {
            navBar: (<NavBar />),
            about: (<About />),
        })
    }
});

FlowRouter.route("/teams/create-team", {
    name: "Create Team",
    action() {
        mount(CreateTeamLayout, {
            navBar: (<NavBar />),
            container: (<CreateTeamContainer />),           
        })
    }
});

FlowRouter.route("/teams", {
    name: "View Teams",
    action() {
        mount(ViewTeamLayout, {
            navBar: (<NavBar />),
            container: (<ViewTeamContainer />),           
        })
    }
});

FlowRouter.route("/tournaments/create-tournament", {
    name: "Create Tournament",
    action() {
        mount(CreateTournamentLayout, {
            navBar: (<NavBar />),
            container: (<CreateTournamentContainer />),
        })
    }
});

FlowRouter.route("/tournaments", {
    name: "View Tournaments",
    action() {
        mount(ViewTournamentLayout, {
            navBar: (<NavBar />),
            container: (<ViewTournamentContainer />),           
        })
    }
});

//User Routes
let userRoutes = FlowRouter.group({
    prefix: "/user",
    name: "User"
    //create a trigger to redirect if not logged in
});

userRoutes.route("/", {
    name: "User Settings",
    action() {
        //mount user settings layout
    }
});

userRoutes.route("/manage-teams", {
    name: "Manage Teams",
    action() {
        mount(ManageTeamsLayout, {
            navBar: (<NavBar />),
            container: (<ManageTeamsContainer />),
        })
    }
});


