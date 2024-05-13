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
import {MyColor} from '../../components/Colors/login';
import {MyFonts} from '../../components/Fonts';

interface FormData {
  username: string;
  password: string;
}

const Login = ({navigation}: any) => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
  });

  const handleLogin = () => {
    try {
      const validation = validate();
      if (!validation) {
        Alert.alert('Please fill all the field input with correct information');
      } else {
        navigation.navigate('Home');
        setFormData({
          username: '',
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
            placeholder="Username"
            onChangeText={e => handleChange('username', e)}
            value={formData.username}
          />
          <Input
            style={styles.inpt}
            placeholder="Password"
            secureTextEntry
            onChangeText={e => handleChange('password', e)}
            value={formData.password}
          />
        </View>
        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
          <Text style={styles.txtBtn}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.txtBtn1}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: MyColor.Secondary,
    flex: 1,
    alignItems: 'center',
  },
  form: {
    backgroundColor: MyColor.Primary,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 60,
    rowGap: 60,
  },
  inpt: {
    borderRadius: 6,
    width: 260,
    backgroundColor: '#D9D9D9',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: MyFonts.normal,
    paddingVertical: 3,
  },
  btn: {
    backgroundColor: MyColor.PrimaryContent,
    borderRadius: 15,
    paddingVertical: 5,
    width: 200,
    alignItems: 'center',
  },
  txtBtn: {
    fontFamily: MyFonts.normal,
    fontSize: 24,
    color: 'white',
  },
  txtBtn1: {
    fontFamily: MyFonts.normal,
    fontSize: 15,
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    textAlign: 'center',
  }
});
