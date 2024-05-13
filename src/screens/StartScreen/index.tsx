import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MyColor} from '../../components/Colors';
import {LogoIcon} from '../../assets/icons';
import {MyFonts} from '../../components/Fonts';

const StartScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <LogoIcon />
      <Text style={styles.txt}>Canteen</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.txtBtn}>START</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: MyColor.Primary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontFamily: MyFonts.bold,
    fontSize: 36,
    color: 'black',
  },
  txtBtn: {
    fontFamily: MyFonts.bold,
    fontSize: 24,
    color: 'white',
  },
  btn: {
    marginVertical: 30,
    backgroundColor: MyColor.PrimaryContent,
    borderRadius: 15,
    paddingVertical: 5,
    width: 135,
    alignItems: 'center',
  },
});
