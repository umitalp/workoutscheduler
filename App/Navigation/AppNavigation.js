import React from "react";
import { StackNavigator } from "react-navigation";
import styles from "./Styles/NavigationStyles";

// screens identified by the router
import LaunchScreen from "../Containers/LaunchScreen";
import ListScreen from "../Containers/ListScreen";
import WorkoutListScreen from "../Containers/WorkoutListScreen";

const PrimaryNav = StackNavigator(
	{
		LaunchScreen: { screen: LaunchScreen },
		ListScreen: { screen: ListScreen },
		WorkoutListScreen: { screen: WorkoutListScreen },
	},
	{
		initialRouteName: "LaunchScreen",
		headerMode: "none",
	}
);

export default PrimaryNav;
