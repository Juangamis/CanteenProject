import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MyColor } from '../../components/Colors/home';
import { MyFonts } from '../../components/Fonts';

const Minuman = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.tbl}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('Home')}>
                    <Image style={styles.img9} source={require('../../assets/icons/makanan/home.png')} />
                </TouchableOpacity>
                <Text style={styles.txt}>Minuman</Text>
                <View style={styles.tbl2}>
                    <Image style={styles.img1} source={require('../../assets/icons/Minuman/nutri.png')} />
                    <Text style={styles.txt1}>Nutrisari</Text>
                </View>

                <View style={styles.tbl3}>
                    <Image style={styles.img2} source={require('../../assets/icons/Minuman/aqua.png')} />
                    <Text style={styles.txt2}>Air Mineral</Text>
                </View>

                <View style={styles.tbl4}>
                    <Image style={styles.img3} source={require('../../assets/icons/Minuman/teh.png')} />
                    <Text style={styles.txt3}>Es Teh</Text>
                </View>

                <View style={styles.tbl5}>
                    <Image style={styles.img4} source={require('../../assets/icons/Minuman/alpokat.png')} />
                    <Text style={styles.txt4}>Juice Alpukat </Text>
                </View>

                <View style={styles.tbl6}>
                    <Image style={styles.img5} source={require('../../assets/icons/Minuman/milo.png')} />
                    <Text style={styles.txt5}>Es Milo</Text>
                </View>

                <View style={styles.tbl7}>
                    <Image style={styles.img6} source={require('../../assets/icons/Minuman/boba.png')} />
                    <Text style={styles.txt6}>Milk Boba</Text>
                </View>

                <View style={styles.tbl8}>
                    <Image style={styles.img7} source={require('../../assets/icons/Minuman/orange.png')} />
                    <Text style={styles.txt7}>Orange Juice</Text>
                </View>

                <View style={styles.tbl9}>
                    <Image style={styles.img8} source={require('../../assets/icons/Minuman/susu.png')} />
                    <Text style={styles.txt8}>Chocolate Milk</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Desert')}>
                    <Text style={styles.txt9}>Desert</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Makanan')}>
                <Text style={styles.txt10}>Makanan</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Minuman;

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

    txt: {
        textAlign: "center",
        marginTop: 15,
        marginBottom: -50,
        fontSize: 30,
        fontFamily: MyFonts.bold,
        color: 'black',
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
        width: 360,
        height: 700,
        marginTop: 20,
        marginBottom: 50,

    },

    tbl2: {
        backgroundColor: MyColor.Secondary,
        borderRadius: 10,
        width: 145,
        height: 125,
        marginTop: 70,
        marginLeft: 25,
    },

    tbl3: {
        backgroundColor: MyColor.Secondary,
        borderRadius: 10,
        width: 145,
        height: 125,
        marginTop: 30,
        marginLeft: 25,
    },

    tbl4: {
        backgroundColor: MyColor.Secondary,
        borderRadius: 10,
        width: 145,
        height: 125,
        marginTop: 30,
        marginLeft: 25,
    },

    tbl5: {
        backgroundColor: MyColor.Secondary,
        borderRadius: 10,
        width: 145,
        height: 125,
        marginTop: 30,
        marginLeft: 25,
    },

    tbl6: {
        backgroundColor: MyColor.Secondary,
        borderRadius: 10,
        width: 145,
        height: 125,
        marginTop: -590,
        marginLeft: 190,
    },
    tbl7: {
        backgroundColor: MyColor.Secondary,
        borderRadius: 10,
        width: 145,
        height: 125,
        marginTop: 30,
        marginLeft: 190,
    },
    tbl8: {
        backgroundColor: MyColor.Secondary,
        borderRadius: 10,
        width: 145,
        height: 125,
        marginTop: 30,
        marginLeft: 190,
    },
    tbl9: {
        backgroundColor: MyColor.Secondary,
        borderRadius: 10,
        width: 145,
        height: 125,
        marginTop: 30,
        marginLeft: 190,
    },

    img1: {
        marginLeft: 25,
        marginTop: 9,
    },

    img2: {
        marginLeft: 40,
        marginTop: 9,
    },

    img3: {
        marginLeft: 25,
        marginTop: 9,
    },

    img4: {
        marginLeft: 35,
        marginTop: 9,
    },
    img5: {
        marginLeft: 35,
        marginTop: 7,
    },
    img6: {
        marginLeft: 35,
        marginTop: 7,
    },

    img7: {
        marginLeft: 26,
        marginTop: 9,
    },
    img8: {
        marginLeft: 30,
        marginTop: 5,
    },

    img9: {
        marginLeft: 290,
        marginTop: -3,
        marginBottom: -50,
    },

    txt1: {
        textAlign: 'center',
        fontFamily: MyFonts.normal,
        color: 'black',
        marginTop:'auto',
    },

    txt2: {
        textAlign: 'center',
        fontFamily: MyFonts.normal,
        color: 'black',
        marginTop:'auto',
    },

    txt3: {
        textAlign: 'center',
        fontFamily: MyFonts.normal,
        color: 'black',
        marginTop:'auto',
    },

    txt4: {
        textAlign: 'center',
        fontFamily: MyFonts.normal,
        color: 'black',
        marginTop:'auto',
    },

    txt5: {
        textAlign: 'center',
        fontFamily: MyFonts.normal,
        color: 'black',
        marginTop:'auto',
    },
    txt6: {
        textAlign: 'center',
        fontFamily: MyFonts.normal,
        color: 'black',
        marginTop:'auto',
    },
    txt7: {
        textAlign: 'center',
        fontFamily: MyFonts.normal,
        color: 'black',
        marginTop:"auto",
    },
    txt8: {
        textAlign: 'center',
        fontFamily: MyFonts.normal,
        color: 'black',
        marginTop:"auto",
    },
    txt9:{
        fontFamily:MyFonts.bold,
        fontSize:20,
        color:'black',
        marginTop:-10,
        marginRight:270
    },
    txt10:{
        fontFamily:MyFonts.bold,
        fontSize:20,
        color:'black',
        marginTop:-30,
        marginLeft:270,
    },

    btn: {

    },

});
