//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
let DATA = [
    {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
    {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
    {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
    {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
    {time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
  ]

// create a component
const Compteur = () => {
    return (
      <View style={styles.container}>
        <Timeline 
          style={styles.list}
          data={DATA}
        />
      </View>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      color: 'white',
      padding: 20,
          paddingTop:65,
          backgroundColor:'#2c3e50'
    },
    list: {
        color: "white",
      flex: 1,
      marginTop:20,
    },
  });

//make this component available to the app
export default Compteur;
