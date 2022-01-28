import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';
import Logo from '../../assets/svgs/logo.svg';
import RouteName from '../RouteName';
const SideDrawer = ({navigation}) => {
  const topHeader = () => {
    return (
      <>
        <View style={styles.topHeaderView}>
          <Logo width={50} height={50} />
        </View>
      </>
    );
  };
  const mainMenu = [
    {
      title: 'Home',
      onPress: () => {
        navigation.navigate(RouteName.MAINSTACK);
      },
    },
    {
      title: 'Profile',
    },
  ];

  const mainMenuView = () => {
    return (
      <View style={styles.mainMenu}>
        {mainMenu.map((item, index) => {
          return (
            <TouchableOpacity style={styles.drawerItems} onPress={item.onPress}>
              <Text style={styles.drawerItemsText}>{item.title}</Text>
              <Image
                source={require('../../assets/Images/rightArrow.png')}
                style={styles.arrow}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        {topHeader()}
        {mainMenuView()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SideDrawer;
