import { StyleSheet, Text, Image, View, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MyColor } from '../../components/Colors/home';
import { LogoIcon } from '../../assets/icons/home';
import { MyFonts } from '../../components/Fonts';

const Home = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Home')}>
          <Image style={styles.img7} source={require('../../assets/icons/makanan/home.png')} />
      </TouchableOpacity>
      <Text style={styles.txt}>Checkout</Text>

      <View style={styles.tbl}>
           <View style={styles.tbl2} />
           <View style={styles.tbl3} />
           <View style={styles.tbl4} />
           <View style={styles.tbl5} />
      </View>
      <TouchableOpacity style={styles.btn}
        onPress={() => navigation.navigate('SignUp')}></TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inpt: {
    borderRadius: 6,
    width: 260,
    backgroundColor: MyColor.Primary,
    fontSize: 22,
    textAlign: 'center',
    fontFamily: MyFonts.normal,
    paddingVertical: 3,
  },

  tbl1: {
    backgroundColor: MyColor.Primary,
    width: 450,
    height: 70,
    marginTop: 0,
    marginBottom:-15,
  },

  tbl: {
    borderRadius: 10,
    backgroundColor: MyColor.Primary,
    width: 350,
    height: 650,
    marginTop: 10,
    marginBottom: 150,

  },

  tbl2: {
    backgroundColor: MyColor.Secondary,
    borderRadius: 10,
    width: 300,
    height: 100,
    marginTop: 50,
    marginLeft: 25,
  },

  tbl3: {
    backgroundColor: MyColor.Secondary,
    borderRadius: 10,
    width: 300,
    height: 100,
    marginTop: 50,
    marginLeft: 25,
  },

  tbl4: {
    backgroundColor: MyColor.Secondary,
    borderRadius: 10,
    width: 300,
    height: 100,
    marginTop: 50,
    marginLeft: 25,
  },

  tbl5:{
    backgroundColor: MyColor.Secondary,
    borderRadius: 10,
    width: 300,
    height: 100,
    marginTop: 50,
    marginLeft: 25,
  },

  img7: {
    marginLeft:290,
    marginBottom: -40,
    marginTop:90,
  },

  btn: {

  },

  txt:{
    fontFamily:MyFonts.bold,
    fontSize:30,
    color:'black',

  },

  lg: {
    marginTop: 10,
    marginBottom: -210,
  },
});
