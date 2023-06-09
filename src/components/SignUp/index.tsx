import auth from '@react-native-firebase/auth';
import { Button, FormControl, Input, Modal, Pressable } from 'native-base';
import React, { useState } from 'react';
import { Alert } from 'react-native';

import { MaterialIcons } from '../../lib/icons';
import type { LoginInfo } from '../../types/login';
import S from './styles';

type Props = {
  onClose: () => void;
  onWait: (value: boolean) => void;
};

const SignUp = ({ onClose, onWait }: Props) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [show, setShow] = useState(false);
  const [loginInfo, setLoginInfo] = useState<LoginInfo & { rePass?: string }>(
    {},
  );

  const validate = (): boolean => {
    if (!loginInfo.email) {
      Alert.alert('Sign Up', 'Please input email');
      return false;
    }
    if (!loginInfo.pass) {
      Alert.alert('Sign Up', 'Please input pass');
      return false;
    }
    if (loginInfo.pass !== loginInfo.rePass) {
      Alert.alert('Sign Up', 'Please check validate pass');
      return false;
    }
    return true;
  };

  const handleSignUp = async () => {
    if (!validate()) return;
    onWait(true);
    onClose();
    auth()
      .createUserWithEmailAndPassword(loginInfo.email!, loginInfo.pass!)
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        onWait(false);
        console.error(error);
      });
  };
  return (
    <Modal
      isOpen
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      onClose={onClose}>
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>Sign Up</Modal.Header>
        <Modal.Body>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>

            <Input
              ref={initialRef}
              onChangeText={value =>
                setLoginInfo(pre => ({ ...pre, email: value }))
              }
            />
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type={show ? 'text' : 'password'}
              InputRightElement={
                <Pressable onPress={() => setShow(!show)}>
                  <MaterialIcons
                    style={S.iconInput}
                    name={show ? 'visibility' : 'visibility-off'}
                  />
                </Pressable>
              }
              onChangeText={value =>
                setLoginInfo(pre => ({ ...pre, pass: value }))
              }
            />
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input
              type={show ? 'text' : 'password'}
              onChangeText={value =>
                setLoginInfo(pre => ({ ...pre, rePass: value }))
              }
            />
          </FormControl>
        </Modal.Body>
        <Modal.Footer textAlign="center">
          <Button onPress={() => handleSignUp()}>Sign Up</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
export default SignUp;
