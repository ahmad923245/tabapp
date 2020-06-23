import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { createStackNavigator, } from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Tab3 from '../components/Tab3'
import Tab4 from '../components/Tab4'
import Review  from '../components/Review'
import Review2  from '../components/Review2'



const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
      <HomeStack.Navigator headerMode="none"
      >
        <HomeStack.Screen name="Tab3"  component={Tab3} />
        <HomeStack.Screen name="Tab4" component={Tab4} />
      </HomeStack.Navigator>
    );
  }


const ReviewStack = createStackNavigator();

function ReviewStackScreen() {
    return (
      <ReviewStack.Navigator headerMode="none"
      >
        <ReviewStack.Screen name="Review"  component={Review} />
        <ReviewStack.Screen name="Review2" component={Review2} />
      </ReviewStack.Navigator>
    );
  }

const Tab = createMaterialTopTabNavigator();

function Tab2() {
  return (
    <Tab.Navigator
    tabBarOptions={{
        activeTintColor:'#1c56ac',
        inactiveTintColor:'#blue',
        showIcon:true,
        headerMode:"none",
        
        
        renderIndicator:()=>null,
        
      }}
      initialRouteName="Home"
      swipeEnabled={false}
    
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="About" component={HomeStackScreen} />
      <Tab.Screen name="Review" component={ReviewStackScreen} />
    </Tab.Navigator>
      
  );
}

export default Tab2;
