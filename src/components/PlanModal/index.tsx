import moment from 'moment';
import { Input } from 'native-base';
import React, { useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { useDispatch } from 'react-redux';

import { actions } from '../../redux/reducers/user';
import type { Plan } from '../../redux/types/users';
import type { Location } from '../../types/loaction';
import styles from './styles';

type Props = {
  handleClose: () => void;
  location: Location;
};

const PlanModal = ({ handleClose, location }: Props) => {
  const [openDatePicker, setOpenDatePicker] = useState<string>();
  const [plan, setPlan] = useState<Plan>({
    name: '',
    start: 0,
    end: 0,
    locationId: location.id,
  });
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(actions.savePlan(plan));
    handleClose();
  };

  return (
    <>
      {openDatePicker ? (
        <DatePicker
          modal
          mode="date"
          open={!!openDatePicker}
          date={new Date()}
          onConfirm={date => {
            if (openDatePicker === 'start') {
              setPlan(pre => ({
                ...pre,
                start: date.getTime(),
              }));
            }
            if (openDatePicker === 'end') {
              setPlan(pre => ({
                ...pre,
                end: date.getTime(),
              }));
            }
            setOpenDatePicker(undefined);
          }}
          onCancel={() => {
            setOpenDatePicker(undefined);
          }}
        />
      ) : null}
      <Modal
        animationType="slide"
        transparent={true}
        onRequestClose={handleClose}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.textHeader}>Let's make a note!</Text>
            <Input
              style={styles.textStyles}
              borderRadius={10}
              placeholder="Name Your Plan Here"
              placeholderTextColor={'white'}
              borderWidth={2}
              marginBottom={5}
              onChangeText={value => setPlan(pre => ({ ...pre, name: value }))}
            />
            {}
            <Text style={styles.textSection}>Date Start</Text>
            <Pressable onPress={() => setOpenDatePicker('start')}>
              <Input
                isReadOnly
                style={styles.textStyles}
                borderRadius={10}
                placeholderTextColor={'white'}
                borderWidth={2}
                marginBottom={5}
                value={plan.start ? moment(plan.start).format('D/M/Y') : ''}
              />
            </Pressable>

            <Text style={styles.textSection}>Date End</Text>
            <Pressable onPress={() => setOpenDatePicker('end')}>
              <Input
                isReadOnly
                style={styles.textStyles}
                borderRadius={10}
                placeholderTextColor={'white'}
                borderWidth={2}
                marginBottom={5}
                value={plan.end ? moment(plan.end).format('D/M/Y') : ''}
              />
            </Pressable>
            <Text style={styles.textSection}>Description:</Text>
            <Input
              style={styles.textStyles}
              borderRadius={10}
              placeholderTextColor={'white'}
              borderWidth={2}
              marginBottom={5}
              height={210}
              onChangeText={value =>
                setPlan(pre => ({ ...pre, description: value }))
              }
            />
            <Pressable style={styles.buttonClose} onPress={handleSubmit}>
              <Text style={styles.textButton}>Get Go!!!</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default PlanModal;
