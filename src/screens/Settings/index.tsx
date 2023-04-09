import React from 'react';
import { Avatar, Button, Center, Text, View } from 'native-base';

import styles from './styles';
import { assets } from '../../lib/assets';
import { connect } from 'react-redux';
function Settings({ user, fetchUsers }: any) {
  return (
    <Center style={styles.container}>
      <Avatar source={assets.avatar} />
      <Text>Settins screen</Text>
      <View>
        <Text>{user.name}</Text>
        <Text>{user.email}</Text>
      </View>
      <Button onPress={fetchUsers}>Fetch User</Button>
    </Center>
  );
}

const mapStateToProps = ({ user }: any) => ({
  user: user.users,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchUsers: () =>
    dispatch({
      type: 'FETCH_USERS',
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
