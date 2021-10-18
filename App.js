//import liraries
import React, {useState, useEffect} from 'react';
import NavigationContent from './components/navigation/Navigation';
import {Text, View} from 'react-native';
import Loader from './components/UIElements/Loader';
import axios from 'axios';

// create a component
const App = () => {
  const [getData, setData] = useState(null);
  useEffect(async () => {
    try {
      await axios
        .get(
          'https://app-planning-cda.herokuapp.com/api/user/exam?token=f48f4ec544c95f8d8196e0a180382a68',
        )
        .then(response => {
          setData(response.data);
          console.log(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (!getData) {
    return <Loader />;
  } else {
    return <NavigationContent data={getData.data}/>;
  }
};

//make this component available to the app
export default App;
