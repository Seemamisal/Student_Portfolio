import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../HomeScreen";
import EducationScreen from "./EducationScreen";
import ProjectsScreen from "./ProjectsScreen";
import SkillsScreen from "./SkillsScreen";
import ContactScreen from "./ContactScreen";
import Icon from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();

const Main = () => {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            drawerIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }} 
        />
        <Drawer.Screen 
          name="Education" 
          component={EducationScreen} 
          options={{ 
            drawerIcon: ({ color, size }) => (
              <Icon name="graduation-cap" color={color} size={size} />
            ),
          }} 
        />
        <Drawer.Screen 
          name="Project" 
          component={ProjectsScreen} 
          options={{ 
            drawerIcon: ({ color, size }) => (
              <Icon name="folder" color={color} size={size} />
            ),
          }} 
        />
        <Drawer.Screen 
          name="Skill" 
          component={SkillsScreen} 
          options={{ 
            drawerIcon: ({ color, size }) => (
              <Icon name="star" color={color} size={size} />
            ),
          }} 
        />
        <Drawer.Screen 
          name="Contact" 
          component={ContactScreen} 
          options={{ 
            drawerIcon: ({ color, size }) => (
              <Icon name="phone" color={color} size={size} />
            ),
          }} 
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Main;
