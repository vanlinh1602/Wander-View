import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Input,
  Pressable,
  Stack,
  Text,
} from 'native-base';
import { ImageBackground } from 'react-native';
import { assets } from '../../lib/assets';
import S from './styles';
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from '../../lib/icons';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/reducers/user';

type Props = {
  navigation?: any;
};

function Login({ navigation }: Props) {
  useEffect(() => {
    navigation?.setOptions({ tabBarStyle: { display: 'none' } });
  }, [navigation]);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  return (
    <ImageBackground style={S.background} source={assets.backgroundLogin}>
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
          />
          <Button
            onPress={() => {
              dispatch(actions.fetchUser);
              navigation?.setOptions({ tabBarStyle: { display: 'flex' } });
            }}
            backgroundColor="#2D86FF"
            fontSize="4xl"
            style={S.button}>
            <Text style={S.textBtn}>Sign In</Text>
          </Button>
          <Button colorScheme="secondary" variant="ghost">
            <Text fontSize={16} color="secondary.700">
              Or Sign Up
            </Text>
          </Button>
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
