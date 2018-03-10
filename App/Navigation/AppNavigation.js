import React from "react";
import { StackNavigator } from "react-navigation";
import styles from "./Styles/NavigationStyles";

// screens identified by the router
import ListScreen from "../Containers/ListScreen";
import LaunchScreen from "../Containers/LaunchScreen";

const PrimaryNav = StackNavigator(
	{
		LaunchScreen: { screen: LaunchScreen },
		ListScreen: { screen: ListScreen },
	},
	{
		initialRouteName: "LaunchScreen",
		headerMode: "none",
	}
);

export default PrimaryNav;
