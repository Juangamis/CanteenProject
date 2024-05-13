import {
  StyleSheet,
  Text,
  TextInput as Input,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MyColor} from '../../components/Colors';
import {MyFonts} from '../../components/Fonts';

interface FormData {
  name: string;
  username: string;
  email: string;
  password: string;
}

const SignUp = ({navigation}: any) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    username: '',
    email: '',
    password: '',
  });

  const handleSignUp = () => {
    try {
      const validation = validate();
      if (!validation) {
        Alert.alert('Please fill all the field input with correct information');
      } else {
        navigation.navigate('Login');
        setFormData({
          name: '',
          username: '',
          email: '',
          password: '',
        });
      }
    } catch (error) {}
  };

  const validate = () => {
    for (const key in formData) {
      const value = formData[key as keyof FormData].trim();

      if (value === '') {
        return false;
      } else if (value.includes(' ')) {
        return false;
      }
    }

    return true;
  };

  const handleChange = (name: string, value: string) => {
    setFormData({...formData, [name]: value});
  };

  useEffect(() => {
    console.log('formData', formData);
  }, [formData]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginVertical: 'auto', alignItems: 'center', rowGap: 50}}>
        <View style={styles.form}>
          <Input
            style={styles.inpt}
            placeholder="Name"
            onChangeText={e => handleChange('name', e)}
            value={formData.name}
          />
          <Input
            style={styles.inpt}
            placeholder="Username"
            onChangeText={e => handleChange('username', e)}
            value={formData.username}
          />
          <Input
            style={styles.inpt}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={e => handleChange('email', e)}
            value={formData.email}
          />
          <Input
            style={styles.inpt}
            placeholder="Password"
            secureTextEntry
            onChangeText={e => handleChange('password', e)}
            value={formData.password}
          />
        </View>
        <TouchableOpacity style={styles.btn} onPress={handleSignUp}>
          <Text style={styles.txtBtn}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  form: {
    backgroundColor: MyColor.Primary,
    borderRadius: 17,
    paddingHorizontal: 30,
    paddingVertical: 40,
    rowGap: 60,
  },
  inpt: {
    borderRadius: 6,
    width: 260,
    backgroundColor: 'white',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: MyFonts.normal,
    paddingVertical: 3,
  },
  btn: {
    backgroundColor: MyColor.Primary,
    borderRadius: 15,
    paddingVertical: 5,
    width: 200,
    alignItems: 'center',
  },
  txtBtn: {
    fontFamily: MyFonts.normal,
    fontSize: 24,
    color: 'black',
  },
});
