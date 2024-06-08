import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const LightButton = ({label, labelStyle}) => {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <Text style={styles.labelStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default LightButton;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'gray',
    paddingHorizontal: 50,
    paddingVertical: 7,
    borderRadius: 5,
  },

  labelStyle: {
    color: 'white',
  },
});
