/* eslint-disable no-alert */
import React from 'react';
import {Button, SafeAreaView, StyleSheet, Alert} from 'react-native';

const AlertEx = () => {
  const showAlert = () => {
    Alert.alert('Title', 'Message', [
      {
        text: 'Ok',
        onPress: () => {
          alert('ok pressed');
        },
        style: 'default',
      },
      {
        text: 'Cancel',
        onPress: () => {
          alert('Cancel pressed');
        },
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => {
          alert('Delete pressed');
        },
        style: 'destructive',
      },
      {cancelable: false},
    ]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Button title={'Press Me'} onPress={showAlert} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
});
export default AlertEx;
