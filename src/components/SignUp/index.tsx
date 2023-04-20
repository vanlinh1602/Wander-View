import React, { useState } from 'react';
import { Button, FormControl, Input, Modal, Pressable } from 'native-base';
import { MaterialIcons } from '../../lib/icons';
import S from './styles';
import type { Login } from '../../types/login';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

type Props = {
  onClose: () => void;
  signSuccess: (user: FirebaseAuthTypes.User) => void;
};

const SignUp = ({ onClose, signSuccess }: Props) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState<Login>({});

  const handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(login.email ?? '', login.pass ?? '')
      .then(result => {
        signSuccess(result.user);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

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
                setLogin(pre => ({ ...pre, email: value }))
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
              onChangeText={value => setLogin(pre => ({ ...pre, pass: value }))}
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
