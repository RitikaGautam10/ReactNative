import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Menu from '../../assets/svgs/menu.svg';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Menu width={20} height={20} />
      </TouchableOpacity>
      <Text style={styles.headerText}>TuneIt</Text>
    </View>
  );
};

export default Header;
