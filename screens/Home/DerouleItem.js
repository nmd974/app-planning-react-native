//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const changeMinToHours = data => {
    var nbHour = parseInt(data / 60);
    var nbminuteRestante = data % 60;
    if (nbminuteRestante == 0) {
      if (nbHour < 10) {
        nbHour = '0' + nbHour;
      }
      return nbHour + ':00';
    } else {
      if (nbminuteRestante < 10) {
        nbminuteRestante = '0' + nbminuteRestante;
      }
      if (nbHour < 10) {
        nbHour = '0' + nbHour;
      }
      return nbHour + ':' + nbminuteRestante;
    }
  };
  
// create a component
const DerouleItem = (props) => {
    console.log(props);
    return (
        <View>
        <Text>{props.data.exam}</Text>
        <Text>{changeMinToHours(props.data.duration)} min</Text>

        </View>
    );
};

//make this component available to the app
export default DerouleItem;
