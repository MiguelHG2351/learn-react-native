/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet, View, Text,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
  const [count, setCount] = useState(0)

  function countUp() {
    setCount(count + 1)
  }

  function countLow() {
    setCount(count - 1)
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <TouchableOpacity style={styles.btn} onPress={countUp}>
              <Text style={styles.textStyle}>
                +
              </Text>
          </TouchableOpacity>
          <Text style={styles.count}>
            {count}
          </Text>
          <TouchableOpacity style={styles.btn} onPress={countLow}>
              <Text style={styles.textStyle}>
                -
              </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
  },
  subContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  btn: {
    color: "#fff",
    width: 50,
    height: 50,
    backgroundColor: '#54ffa4',
    justifyContent: 'center',
    marginVertical: 12,
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 25,
    color: '#fff'
  },
  count: {
    color: '#fff'
  }
});

export default App;
