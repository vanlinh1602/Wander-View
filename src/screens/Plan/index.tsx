import { Text } from 'native-base';
import React, { useState } from 'react';
import { Alert, FlatList, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';

const data = [
  {
    id: 1,
    day: '01',
    month: 'Sep',
    location: 'Nha Be - Ho Chi Minh',
    task: 'Camping with friends.',
    time: '7h - 10h',
  },
  {
    id: 2,
    day: '02',
    month: 'Jan',
    location: 'Da Lat - Lam Dong',
    task: 'Travel with family.',
    time: '4h - 06/01/23(16h)',
  },
  {
    id: 3,
    day: '03',
    month: 'Aug',
    location: 'Thu Duc - Ho Chi Minh',
    task: 'Go get the goods.',
    time: '8h - 9h',
  },
  {
    id: 4,
    day: '04',
    month: 'Dec',
    location: 'Nha Trang - Khanh Hoa',
    task: 'Capture the scene.',
    time: '4h - 06/12/23(16h)',
  },
  {
    id: 5,
    day: '10',
    month: 'Jul',
    location: 'Da Nang - Quang Nam',
    task: 'Travel with friends.',
    time: '3h - 17/07/23(22h)',
  },
  {
    id: 6,
    day: '30',
    month: 'Oct',
    location: 'Hoi An - Quang Nam',
    task: 'Place to chill.',
    time: '6h - 01/11/23(22h)',
  },
  {
    id: 7,
    day: '07',
    month: 'Sep',
    location: 'Phan Thiet - Binh Thuan',
    task: 'Enjoy the summer.',
    time: '6h - 09/09/23(16h)',
  },
  {
    id: 8,
    day: '03',
    month: 'Jan',
    location: 'Sa Pa - Lao Cai',
    task: 'Visit relatives.',
    time: '3h - 10/01/23(23h)',
  },
  {
    id: 9,
    day: '09',
    month: 'May',
    location: 'Quận Cam - California',
    task: 'Business travel.',
    time: '2h - 09/06/23(22h)',
  },
];

function Plan() {
  const [eventList, setEventList] = useState(data);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Plans</Text>
      <View style={{ borderBottomColor: 'white', borderBottomWidth: 2 }} />
      <FlatList
        enableEmptySections={true}
        style={styles.eventList}
        data={eventList}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => Alert.alert(item.task, item.time)}>
              <View style={styles.eventBox}>
                <View style={styles.eventDate}>
                  <Text style={styles.eventDay}>{item.day}</Text>
                  <Text style={styles.eventMonth}>{item.month}</Text>
                </View>
                <View style={styles.eventContent}>
                  <View style={styles.eventInfo}>
                    <Text style={styles.eventLocation}>{item.location}</Text>
                    <Text style={styles.taskName}>{item.task}</Text>
                    <Text style={styles.description}>{item.time}</Text>
                  </View>
                  <View style={styles.eventDelete}>
                    <TouchableOpacity
                      onPress={() => {
                        Alert.alert(
                          'Delete',
                          'Are you sure you want to remove it?',
                          [
                            {
                              text: 'No',
                              style: 'cancel',
                            },
                            {
                              text: 'Yes',
                              onPress: () =>
                                setEventList(prevItem =>
                                  prevItem.filter(
                                    (_item, _Index) => _Index !== index,
                                  ),
                                ),
                            },
                          ],
                        );
                      }}>
                      <AntDesign name="minuscircle" color="#D21312" size={28} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

export default Plan;
