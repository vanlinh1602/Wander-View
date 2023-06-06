import moment from 'moment';
import { Pressable, Text, VStack } from 'native-base';
import { useSelector } from 'react-redux';

import { selectUserNotification } from '../../../redux/selectors/user';

const Notification = () => {
  const userNotification = useSelector(selectUserNotification);
  console.log(userNotification);

  return (
    <VStack space={2}>
      {Object.values(userNotification ?? {})
        .sort((a, b) => b.time! - a.time!)
        .map(notify => {
          return (
            <Pressable
              key={notify.id}
              width="80"
              style={{
                borderWidth: 1,
                padding: 10,
                borderRadius: 24,
                borderColor: '#5A4CBB',
              }}>
              <Text style={{ fontWeight: 'bold' }}>
                {notify.title} - {moment(notify.time).format('D/M/Y')}
              </Text>
              <Text>Event: {notify.body}</Text>
            </Pressable>
          );
        })}
    </VStack>
  );
};

export default Notification;
