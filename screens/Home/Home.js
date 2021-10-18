//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import HomeItem from './HomeItem';
const {width, height} = Dimensions.get('window');

const Home = props => {
  let CONTENT = props.data.data;
  if (CONTENT) {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>Liste des examens :</Text>
        <FlatList
          data={CONTENT.exam}
          renderItem={itemData => <HomeItem data={itemData.item} />}
          keyExtractor={item => item.id}
        />
      </View>
    );
  } else {
    <View>
      <Text>Vous n'avez pas d'examens prévus</Text>
    </View>;
  }
};

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    alignContent: 'flex-start',
    color: '#fff',
    textAlign: 'left',
    padding: 17,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#2c3e50',
    height: height,
  },
});

export default Home;
