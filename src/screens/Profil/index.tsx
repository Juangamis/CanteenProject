import { StyleSheet, Image, View, Text, TouchableOpacity, } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LogoIcon } from '../../assets/icons';
import { MyColor } from '../../components/Colors/home';
import { MyFonts } from '../../components/Fonts';

const Home = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      

      <View style={styles.tbl}>
           <View style={styles.tbl2}>
           <Image style={styles.img8} source={require('../../assets/icons/Profil/orang.png')} />
           </View>
           <TouchableOpacity style={styles.btn}
        onPress={() => navigation.navigate('Home')}>
            <Image style={styles.img7} source={require('../../assets/icons/makanan/home.png')} />
        </TouchableOpacity>
        <View>
          <Text style={styles.txt}>Name: Juan</Text>
          <Text style={styles.txt}>Email: gamisjuan@gmail.com</Text>
          <Text style={styles.txt}>Phone: 0813 xxx xxx</Text>
          <Text style={styles.txt}>Status: New Member</Text>
        </View>

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


  tbl: {
    borderRadius: 10,
    backgroundColor: MyColor.Primary,
    width: 450,
    height: 250,
    marginTop: 10,
    marginBottom: 620,

  },

  tbl2: {
    backgroundColor: MyColor.Secondary,
    borderRadius: 10,
    width: 250,
    height: 180,
    marginTop: 50,
    marginLeft: 100,
  },

  img7: {
    marginLeft:360,
    marginBottom: -40,
    marginTop:-200,
  },

  btn: {

  },

  txt:{
    fontFamily:MyFonts.normal,
    fontSize:20,
    color:'black',
    marginLeft:50,
    marginTop:50,
  },

  img8:{
    borderRadius:10,
    marginBottom:30,
    marginLeft:-10,
  },

  lg: {
    marginTop: 10,
    marginBottom: -210,
  },
});
