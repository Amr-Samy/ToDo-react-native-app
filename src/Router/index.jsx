import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import StackNavigator from "./StackNavigator";
import CompletedTodos from './../Screens/Completed_screen';

const Tab = createBottomTabNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerTitle: "Todo App", headerTintColor: "#fff", headerStyle: {
                        backgroundColor: '#6F35A5'
                    },
                    tabBarActiveTintColor: '#fff',
                    tabBarInactiveTintColor: 'lightgray',
                    tabBarActiveBackgroundColor: '#6F35A5',
                    tabBarInactiveBackgroundColor: '#230E36',
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#6F35A5',
                    }
                }}
                tabBarOptions={{
                    // activeTintColor: '#fff',
                    // inactiveTintColor: 'lightgray',
                    // activeBackgroundColor: '#6F35A5',
                    // inactiveBackgroundColor: '#230E36',
                    // showLabel: false,
                    style: {
                        backgroundColor: '#6F35A5',
                        // paddingBottom: 3
                    }
                }}
            >
                <Tab.Screen
                    name="Main"
                    component={StackNavigator}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Done"
                    component={CompletedTodos}
                    options={{
                        tabBarLabel: 'Done',
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="checkmark-done-outline" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Router;
