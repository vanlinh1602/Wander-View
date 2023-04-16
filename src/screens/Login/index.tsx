import React from 'react';
import { Button, Center, Heading, Stack, Text } from 'native-base';
import { ImageBackground } from 'react-native';
import { assets } from '../../lib/assets';
import S from './styles';
import { AntDesign, FontAwesome } from '../../lib/icons';

function Login() {
  return (
    <ImageBackground style={S.background} source={assets.backgroundLogin}>
      <Center style={S.center}>
        <Heading fontSize="5xl" style={S.title}>
          Scenic Spots
        </Heading>
        <Stack mb="2.5" mt="32" space={7} alignItems="center">
          <Button
            backgroundColor="#D6432F"
            fontSize="4xl"
            startIcon={
              <AntDesign
                name="google"
                color={S.textBtn.color}
                size={S.textBtn.fontSize}
              />
            }
            style={S.button}>
            <Text style={S.textBtn}>Sign with google</Text>
          </Button>
          <Button
            backgroundColor="#2D86FF"
            fontSize="4xl"
            startIcon={
              <FontAwesome
                name="facebook"
                color={S.textBtn.color}
                size={S.textBtn.fontSize}
              />
            }
            style={S.button}>
            <Text style={S.textBtn}>Sign with facebook</Text>
          </Button>
          <Button
            backgroundColor="#1D9BF0"
            fontSize="4xl"
            startIcon={
              <AntDesign
                name="twitter"
                color={S.textBtn.color}
                size={S.textBtn.fontSize}
              />
            }
            style={S.button}>
            <Text style={S.textBtn}>Sign with twitter</Text>
          </Button>
        </Stack>
      </Center>
    </ImageBackground>
  );
}

export default Login;
