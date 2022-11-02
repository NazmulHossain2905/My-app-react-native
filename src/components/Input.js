import React from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';

const Input = ({title}) => {
  return (
    <>
      {title && <Text style={styles.title}>{title}</Text>}
      <TextInput style={styles.input} />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: '#222',
    marginTop: 10,
    fontWeight: '300',
  },
  input: {
    backgroundColor: '#cccccc99',
    padding: 6,
    borderRadius: 4,
    color: '#000',
    marginVertical: 5,
  },
});

export default Input;
