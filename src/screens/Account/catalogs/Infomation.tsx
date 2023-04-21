import React, { useState } from 'react';
import {
  Button,
  FormControl,
  HStack,
  Input,
  Pressable,
  View,
} from 'native-base';
import { Feather } from '../../../lib/icons';
import type { UserInfo } from '../../../redux/types/users';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import S from './styles';
import { useDispatch } from 'react-redux';
import { actions } from '../../../redux/reducers/user';

type Props = {
  userInfo: UserInfo;
};

const Infomation = ({ userInfo }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [selectDate, setSelectDate] = useState<boolean>(false);
  const [user, setUser] = useState<UserInfo>(userInfo);
  const dispatch = useDispatch();

  return (
    <View width="full">
      <DatePicker
        modal
        mode="date"
        open={selectDate}
        date={moment(user.bithday).toDate()}
        onCancel={() => setSelectDate(false)}
        onConfirm={value => {
          setUser(pre => ({ ...pre, bithday: value.getTime() }));
          setSelectDate(false);
        }}
      />
      <FormControl isReadOnly={!edit}>
        <FormControl.Label>Họ và tên</FormControl.Label>
        <Input
          value={user.name}
          onChangeText={value => setUser(pre => ({ ...pre, name: value }))}
        />
      </FormControl>
      <FormControl isReadOnly={!edit}>
        <FormControl.Label>Email</FormControl.Label>
        <Input
          value={user.email}
          onChangeText={value => setUser(pre => ({ ...pre, email: value }))}
        />
      </FormControl>
      <FormControl isReadOnly={!edit}>
        <FormControl.Label>Số điện thoại</FormControl.Label>
        <Input
          value={user.phone}
          onChangeText={value => setUser(pre => ({ ...pre, phone: value }))}
        />
      </FormControl>
      <FormControl isReadOnly={!edit}>
        <FormControl.Label>Ngày sinh</FormControl.Label>
        <Pressable onPress={() => setSelectDate(edit)}>
          <Input
            isReadOnly
            value={user.bithday ? moment(user.bithday).format('D/M/Y') : ''}
          />
        </Pressable>
      </FormControl>
      <HStack justifyContent="center" mt="2" space="2">
        <Button
          backgroundColor={edit ? 'red.500' : '#5A4CBC'}
          style={S.btnEdit}
          onPress={() => {
            setUser(userInfo);
            setEdit(pre => !pre);
          }}>
          <Feather name={edit ? 'x' : 'edit'} size={20} color="white" />
        </Button>
        {edit ? (
          <Button
            backgroundColor="green.500"
            style={S.btnEdit}
            onPress={() => {
              dispatch(actions.updateUser(user));
              setEdit(false);
            }}>
            <Feather name="check" size={20} color="white" />
          </Button>
        ) : null}
      </HStack>
    </View>
  );
};

export default Infomation;
