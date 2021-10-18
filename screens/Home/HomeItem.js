import React, {useEffect, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Modal
} from 'react-native';
import Deroule from './Deroule';
const {width, height} = Dimensions.get('window');

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

const transformDate = data => {
  const months = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ];
  const parts = data.split('-');
  const date = new Date(parts[2], parts[1] - 1, parts[0]);
  // console.log(date);
  return (
    date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear()
  );
};

const HomeItem = props => {
  const [showModal, setShowModal] = useState(false);
  const changeModalVisible = (bool) => {
    setShowModal(bool);
  }
  // console.log(props.data);
  if (props.data) {
    return (
      <TouchableOpacity onPress={() => changeModalVisible(true)}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.header}>Examen : {props.data.label}</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.title}>Date de passage :</Text>
            <Text style={styles.subTitle}>
              {transformDate(props.data.date_exam)}
            </Text>
            <Text style={styles.title}>Heure de début :</Text>
            <Text style={styles.subTitle}>
              {changeMinToHours(props.data.heure_exam)}
            </Text>
            <Modal animationType="slide" transparent={true} visible={showModal}>
              <Deroule data={props.data} show={showModal} closeModal={() => changeModalVisible(false)}/>
            </Modal>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  cardHeader: {
    padding: 17,
    backgroundColor: '#03718D',
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    fontWeight: '700',
  },
  card: {
    height: 250,
    width: width,
    padding: 17,
  },
  cardContent: {
    backgroundColor: '#EEEDE7',
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17,
    height: 150,
    padding: 17,
  },
  title: {
    fontWeight: '700',
  },
  subTitle: {
    marginBottom: 17,
  },
  header: {
    fontWeight: '700',
    fontSize: 18,
    color: '#EEEDE7',
    textAlign: 'center',
  },
});

export default HomeItem;
