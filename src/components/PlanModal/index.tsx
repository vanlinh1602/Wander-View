import { Input } from 'native-base';
import React, { useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';

// import DatePicker from 'react-native-date-picker';
import styles from './styles';

const PlanModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  // const [date, setDate] = useState(new Date());
  // const [open, setOpen] = useState(false);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
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
          />
          {/* Modal with Datepicker
            <Text style={styles.textSection} onPress={() => setOpen(true)}>
              Date Start
            </Text>
            <DatePicker
              modal
              open={open}
              date={date}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            /> */}
          <Text style={styles.textSection}>Date Start</Text>
          <Input
            style={styles.textStyles}
            borderRadius={10}
            placeholderTextColor={'white'}
            borderWidth={2}
            marginBottom={5}
          />
          <Text style={styles.textSection}>Date End</Text>
          <Input
            style={styles.textStyles}
            borderRadius={10}
            placeholderTextColor={'white'}
            borderWidth={2}
            marginBottom={5}
          />
          <Text style={styles.textSection}>Description:</Text>
          <Input
            style={styles.textStyles}
            borderRadius={10}
            placeholderTextColor={'white'}
            borderWidth={2}
            marginBottom={5}
            height={210}
          />
          <Pressable
            style={styles.buttonClose}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textButton}>Get Go!!!</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default PlanModal;
