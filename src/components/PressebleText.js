import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const PressebleText = ({label, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={style}>{label}</Text>
    </TouchableOpacity>
  );
};

export default PressebleText;

const styles = StyleSheet.create({});
