import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const Button = ({title, onPress, buttonStyle, buttonTextStyle}) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        {backgroundColor: '#f00', ...buttonStyle},
      ]}
      onPress={onPress}>
      <Text style={[styles.buttonText, {color: '#fff', ...buttonTextStyle}]}>
        {title || 'Button'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: 45,
    width: '100%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Button;
