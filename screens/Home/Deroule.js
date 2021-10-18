//import liraries
import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableHighlight,
  Dimensions,
  FlatList,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Timeline from 'react-native-timeline-flatlist';
import DerouleItem from './DerouleItem';
const {width, height} = Dimensions.get('window');
let DATA = [
    {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
    {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
    {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
    {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
    {time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
  ]

const MyModal = props => {
    // console.log("HERE");
    console.log(props.data.activities);
    // let data_activities = new Array();
    // props.data.activities.forEach(element => {
    //     [...data_activities] = {"time" : element.duration, "title": element.exam, "description" : "rien"};
    // });
                        {/* <Timeline 
                    style={styles.list}
                    data={DATA}
                    /> */}
  if(props.show){
    return (
      <View style={styles.centeredView}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Déroulé de votre examen :</Text>
                <FlatList
                    data={props.data.activities}
                    renderItem={itemData => <DerouleItem data={itemData.item} />}
                    keyExtractor={item => item.id}
                />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => props.closeModal(false)}>
                <Text style={styles.textStyle}>Fermer</Text>
              </Pressable>
            </View>
          </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#fff',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  list: {
    flex: 1,
    marginTop:20,
  },
});

//make this component available to the app
export default MyModal;
