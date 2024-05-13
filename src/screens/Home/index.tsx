import { StyleSheet, TextInput as Input, Image, View, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MyColor } from '../../components/Colors/home';
import { LogoIcon } from '../../assets/icons/home';
import { MyFonts } from '../../components/Fonts';

const Home = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <LogoIcon style={styles.lg} />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Login')}>
        <Image style={styles.img7} source={require('../../assets/icons/home/logout.png')} />
      </TouchableOpacity>

      <View style={styles.tbl}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Makanan')}>
          <View style={styles.tbl2}>
            <Image style={styles.img1} source={require('../../assets/icons/home/mie.png')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Minuman')}>
          <View style={styles.tbl3}>
            <Image style={styles.img2} source={require('../../assets/icons/home/nutri.png')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Desert')}>
          <View style={styles.tbl4}>
            <Image style={styles.img3} source={require('../../assets/icons/home/kacang.png')} />
          </View>
        </TouchableOpacity>

      </View>
      <View style={styles.tbl1}>
      <TouchableOpacity style={styles.btn}
          onPress={() => navigation.navigate('Profil')}>
          <Image style={styles.img4} source={require('../../assets/icons/home/profil.png')} />
        </TouchableOpacity>

        

        <TouchableOpacity style={styles.btn}
          onPress={() => navigation.navigate('Pembayaran')}>
          <Image style={styles.img5} source={require('../../assets/icons/home/order.png')} />
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.btn}
          onPress={() => navigation.navigate('Pesanan')}>
          <Image style={styles.img6} source={require('../../assets/icons/home/pesanan.png')} />
        </TouchableOpacity>

        <Input />
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
    marginBottom: -15,
  },

  tbl: {
    borderRadius: 10,
    backgroundColor: MyColor.Primary,
    width: 350,
    height: 600,
    marginTop: 10,
    marginBottom: 50,

  },

  tbl2: {
    backgroundColor: MyColor.Secondary,
    borderRadius: 10,
    width: 300,
    height: 100,
    marginTop: 80,
    marginLeft: 25,
  },

  tbl3: {
    backgroundColor: MyColor.Secondary,
    borderRadius: 10,
    width: 300,
    height: 100,
    marginTop: 80,
    marginLeft: 25,
  },

  tbl4: {
    backgroundColor: MyColor.Secondary,
    borderRadius: 10,
    width: 300,
    height: 100,
    marginTop: 80,
    marginLeft: 25,
  },

  img1: {
    marginLeft: 10,
    marginTop: 9,
  },

  img2: {
    marginLeft: 15,
    marginTop: -12,
  },

  img3: {
    marginRight: 19,
    marginLeft: -20,
    marginTop: -4,
  },

  img4: {
    marginLeft: 340,

  },
  img5: {
    marginLeft: 200,
    marginTop: -54,
  },
  img6: {
    marginLeft: 60,
    marginTop: -44,
  },

  img7: {
    marginRight: 300,
    marginBottom: 20,
    marginTop: 130,
  },

  btn: {

  },

  lg: {
    marginTop: 10,
    marginBottom: -210,
  },
});
