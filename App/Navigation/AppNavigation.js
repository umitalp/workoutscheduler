import React from "react";
import { StackNavigator } from "react-navigation";
import styles from "./Styles/NavigationStyles";

import LandingScreenView from "../Containers/LandingScreenView";
import ParticipantListView from "../Containers/ParticipantListView";
import WorkoutListView from "../Containers/WorkoutListView";


const PrimaryNav = StackNavigator(
	{
		LandingScreenView: { screen: LandingScreenView},
		WorkoutListView: { screen: WorkoutListView },
		ParticipantListView: { screen: ParticipantListView }
	},
	{
		initialRouteName: "LandingScreenView",
		headerMode: "none",
	}
);

export default PrimaryNav;
