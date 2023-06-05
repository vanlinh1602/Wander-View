import auth from '@react-native-firebase/auth';
import { Button, FormControl, Input, Modal } from 'native-base';
import React, { useState } from 'react';
import { Alert } from 'react-native';

import type { LoginInfo } from '../../types/login';

type Props = {
  onClose: () => void;
};

const FogotPass = ({ onClose }: Props) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [loginInfo, setLoginInfo] = useState<LoginInfo & { rePass?: string }>(
    {},
  );

  const validate = (): boolean => {
    if (!loginInfo.email) {
      Alert.alert('Sign Up', 'Please input email');
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    auth()
      .sendPasswordResetEmail(loginInfo.email!)
      .then(() => {
        Alert.alert('Wander View', 'Please check mail to reset password', [
          {
            text: 'Yes',
            onPress: () => onClose(),
          },
        ]);
      })
      .catch(error => {
        Alert.alert('Wander View', error.message);
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
        <Modal.Header>Forgot Pass</Modal.Header>
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
        </Modal.Body>
        <Modal.Footer textAlign="center">
          <Button onPress={() => handleSubmit()}>Confirm</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
export default FogotPass;
