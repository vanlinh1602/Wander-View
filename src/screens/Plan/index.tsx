import moment from 'moment';
import { Text } from 'native-base';
import React, { useMemo } from 'react';
import { Alert, FlatList, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';

import { Waiting } from '../../components';
import { actions } from '../../redux/reducers/user';
import { selectLoadingUser, selectUserPlans } from '../../redux/selectors/user';
import styles from './styles';

function Plan() {
  const dispatch = useDispatch();
  const userPlans = useSelector(selectUserPlans);
  const loading = useSelector(selectLoadingUser);

  const planList = useMemo(() => {
    return Object.entries(userPlans ?? {}).map(([id, plan]) => ({
      id,
      day: moment(plan.start).format('DD'),
      month: moment(plan.start).format('MMM'),
      title: plan.name,
      description: plan.description,
      time: `${moment(plan.start).format('D/M/Y')} - ${moment(plan.end).format(
        'd/m/y',
      )}`,
    }));
  }, [userPlans]);

  return (
    <View style={styles.container}>
      {loading ? <Waiting /> : null}
      <Text style={styles.header}>Your Plans</Text>
      <View style={{ borderBottomColor: 'white', borderBottomWidth: 2 }} />
      <FlatList
        style={styles.eventList}
        data={planList}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => Alert.alert(item.title, item.time)}>
              <View style={styles.eventBox}>
                <View style={styles.eventDate}>
                  <Text style={styles.eventDay}>{item.day}</Text>
                  <Text style={styles.eventMonth}>{item.month}</Text>
                </View>
                <View style={styles.eventContent}>
                  <View style={styles.eventInfo}>
                    <Text style={styles.eventLocation}>{item.title}</Text>
                    <Text style={styles.taskName}>{item.description}</Text>
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
                                dispatch(actions.removePlan(item.id)),
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
