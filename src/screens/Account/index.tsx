import auth from '@react-native-firebase/auth';
import _ from 'lodash';
import {
  Avatar,
  Button,
  Center,
  Container,
  Divider,
  HStack,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SelectAvatar, Waiting } from '../../components';
import { avatars } from '../../lib/assets';
import { Feather, MaterialIcons } from '../../lib/icons';
import { defautTabStyles } from '../../navigation/styles';
import { actions } from '../../redux/reducers/user';
import { selectLoadingUser, selectUser } from '../../redux/selectors/user';
import Infomation from './catalogs/Infomation';
import Notification from './catalogs/Notification';
import Saved from './catalogs/Saved';
import S from './styles';
type Props = {
  navigation?: any;
};

function Account({ navigation }: Props) {
  const user = useSelector(selectUser);
  const loadingUser = useSelector(selectLoadingUser);
  const dispatch = useDispatch();
  const [active, setActive] = useState<string>('infomation');
  const [selectAvatar, setSelectAvatar] = useState<boolean>();
  useEffect(() => {
    navigation?.setOptions({
      tabBarStyle: { ...defautTabStyles.tabBarStyle },
    });
  }, [navigation]);

  const avatar = useMemo(() => {
    return _.get(avatars, [user?.avatar!]) ?? avatars.avatar1;
  }, [user]);

  const renderCatalog = () => {
    switch (active) {
      case 'infomation':
        return <Infomation userInfo={user!} />;
      case 'notifi':
        return <Notification />;
      case 'saved':
        return <Saved navigation={navigation} />;
      default:
        return null;
    }
  };
  return (
    <Center style={S.container} bg="#FCFBFE">
      {loadingUser ? <Waiting /> : null}
      {selectAvatar ? (
        <SelectAvatar
          userUid={user?.uid!}
          avatarUser={user?.avatar}
          onCancel={() => setSelectAvatar(false)}
        />
      ) : null}
      <Pressable
        style={S.logout}
        onPress={async () => {
          await auth()
            .signOut()
            .then(() => {
              dispatch(actions.signOut());
            });
        }}>
        {({ isPressed }) => (
          <Feather
            size={30}
            name="log-out"
            color={isPressed ? '#1D9BF0' : '#5646b7'}
          />
        )}
      </Pressable>
      <Avatar key={avatar} size="2xl" source={avatar} mt="2">
        <Avatar.Badge
          style={S.photo}
          children={
            <MaterialIcons
              onPress={() => setSelectAvatar(true)}
              name="edit"
              size={16}
            />
          }
        />
      </Avatar>
      <VStack alignItems="center" mt="5" mb="3">
        <Text color="black" fontSize="md">
          Welcome to
        </Text>
        <Text color="#F9A084" fontSize="3xl">
          {user?.name}
        </Text>
      </VStack>

      <HStack space={3} justifyContent="center" alignItems="center">
        <Button
          size="lg"
          variant="link"
          colorScheme={active === 'infomation' ? 'purple' : 'gray'}
          onPress={() => setActive('infomation')}>
          Infomation
        </Button>
        <Divider height="1/2" thickness="2" orientation="vertical" />
        <Button
          size="lg"
          variant="link"
          colorScheme={active === 'notifi' ? 'purple' : 'gray'}
          onPress={() => setActive('notifi')}>
          Notification
        </Button>
        <Divider height="1/2" thickness="2" orientation="vertical" />
        <Button
          size="lg"
          variant="link"
          colorScheme={active === 'saved' ? 'purple' : 'gray'}
          onPress={() => setActive('saved')}>
          Saved
        </Button>
      </HStack>

      <Divider bg="#5646b7" thickness="2" mx="2" width="96" />
      <Container width="full" height="full" mt="2">
        {renderCatalog()}
      </Container>
    </Center>
  );
}

export default Account;
