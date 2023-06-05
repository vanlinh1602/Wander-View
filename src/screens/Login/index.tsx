import auth from '@react-native-firebase/auth';
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Input,
  Pressable,
  Stack,
  Text,
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { Alert, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';

import { SignUp, Waiting } from '../../components';
import { images } from '../../lib/assets';
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from '../../lib/icons';
import { selectLoadingUser, selectUserID } from '../../redux/selectors/user';
import type { LoginInfo } from '../../types/login';
import FogotPass from './FogotPass';
import S from './styles';

type Props = {
  navigation?: any;
  route: any;
};

function Login({ navigation, route }: Props) {
  const [show, setShow] = useState(false);
  const userId = useSelector(selectUserID);
  const [showModalSign, setShowModalSign] = useState(false);
  const [showModalFogot, setShowModalFogot] = useState(false);
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({});
  const [waiting, setWaiting] = useState<boolean>(false);
  const loadUser = useSelector(selectLoadingUser);

  useEffect(() => {
    if (userId) {
      const { screen } = (route as Route).params;
      (navigation as Navigation).navigate('Main', screen);
    }
  }, [userId, navigation, route]);

  const validate = (): boolean => {
    if (!loginInfo.email) {
      Alert.alert('Login', 'Please input email');
      return false;
    }
    if (!loginInfo.pass) {
      Alert.alert('Login', 'Please input pass');
      return false;
    }
    return true;
  };

  const loginWithEmail = async () => {
    if (!validate()) return;
    setWaiting(true);
    await auth()
      .signInWithEmailAndPassword(loginInfo.email ?? '', loginInfo.pass ?? '')
      .then(() => {
        const { screen } = (route as Route).params;
        (navigation as Navigation).navigate('Main', screen);
      })
      .catch(error => {
        setWaiting(false);
        Alert.alert('Login', error.message);
      });
  };
  return (
    <ImageBackground style={S.background} source={images.backgroundLogin}>
      {waiting || loadUser ? <Waiting /> : null}
      {showModalSign ? (
        <SignUp
          onClose={() => setShowModalSign(false)}
          onWait={value => setWaiting(value)}
        />
      ) : null}
      {showModalFogot ? (
        <FogotPass onClose={() => setShowModalFogot(false)} />
      ) : null}
      <Pressable
        style={{
          position: 'relative',
          top: 10,
          left: 10,
          width: 30,
          height: 30,
        }}
        onPress={() => {
          (navigation as Navigation).navigate('Main');
        }}>
        <AntDesign name="left" size={30} />
      </Pressable>

      <Center style={S.center}>
        <Heading fontSize="5xl" style={S.title}>
          Sign In
        </Heading>
        <Stack space={4} w="100%" alignItems="center" mt="16" mb="4">
          <Input
            backgroundColor="white"
            borderRadius={20}
            style={S.input}
            w={{
              base: '75%',
              md: '25%',
            }}
            InputLeftElement={
              <Ionicons name="person" size={24} style={S.iconInput} />
            }
            placeholder="Email"
            onChangeText={value =>
              setLoginInfo(pre => ({ ...pre, email: value }))
            }
          />
          <Input
            backgroundColor="white"
            borderRadius={20}
            style={S.input}
            w={{
              base: '75%',
              md: '25%',
            }}
            type={show ? 'text' : 'password'}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <MaterialIcons
                  style={S.iconInput}
                  name={show ? 'visibility' : 'visibility-off'}
                />
              </Pressable>
            }
            placeholder="Password"
            onChangeText={value =>
              setLoginInfo(pre => ({ ...pre, pass: value }))
            }
          />
          <Button
            onPress={loginWithEmail}
            backgroundColor="#2D86FF"
            fontSize="4xl"
            style={S.button}>
            <Text style={S.textBtn}>Sign In</Text>
          </Button>
          <HStack space={5}>
            <Button
              variant="subtle"
              borderRadius={24}
              onPress={() => setShowModalSign(true)}>
              Or Sign Up
            </Button>
            <Button
              variant="subtle"
              borderRadius={24}
              onPress={() => setShowModalFogot(true)}>
              Fogot Password
            </Button>
          </HStack>
        </Stack>
        <Heading fontSize="2xl" style={S.title}>
          Login With
        </Heading>
        <HStack mb="2.5" mt="5" space={7} alignItems="center">
          <Box
            width={50}
            height={50}
            backgroundColor="#D6432F"
            borderRadius={48}
            style={S.logoIcon}>
            <Pressable>
              <AntDesign name="google" color="white" size={24} />
            </Pressable>
          </Box>
          <Box
            width={50}
            height={50}
            backgroundColor="#2D86FF"
            borderRadius={48}
            style={S.logoIcon}>
            <Pressable>
              <FontAwesome name="facebook" color="white" size={24} />
            </Pressable>
          </Box>
          <Box
            width={50}
            height={50}
            backgroundColor="#1D9BF0"
            borderRadius={48}
            style={S.logoIcon}>
            <Pressable>
              <AntDesign name="twitter" color="white" size={24} />
            </Pressable>
          </Box>
        </HStack>
      </Center>
    </ImageBackground>
  );
}

export default Login;
