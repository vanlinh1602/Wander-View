import { get } from 'lodash';
import { Avatar, ScrollView, Text, View } from 'native-base';
import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import { Categories, LocationCard } from '../../components';
import { avatars } from '../../lib/assets';
import { selectLocations } from '../../redux/selectors/loaction';
import { selectUser } from '../../redux/selectors/user';
import FeaturedRow from './components/FeaturedRow';
import styles from './styles';

type Props = {
  navigation: any;
};

const Home = ({ navigation }: Props) => {
  const locations = useSelector(selectLocations);
  const user = useSelector(selectUser);

  const AvatarUser = useCallback(
    () => <Avatar source={get(avatars, user?.avatar ?? '', avatars.avatar1)} />,
    [user],
  );

  return (
    <SafeAreaView>
      <View style={styles.flex} fontFamily="Roboto-Thin">
        <View style={styles.welcomeView}>
          <Text style={styles.helloLine}>
            Hello{' '}
            <Text style={styles.orangeText}>{user?.name ?? 'Traveler!'}</Text>
          </Text>
          <Text style={styles.introLine}>
            Let's discover a new{' '}
            <Text style={styles.purpleText}>adventure</Text>
          </Text>
        </View>
        <View style={styles.avaView}>
          <AvatarUser />
        </View>
      </View>

      <ScrollView bgColor="white" contentContainerStyle={styles.paddingBottom}>
        <Categories />

        <FeaturedRow title="Featured" description=" Something you may like" />
        <ScrollView
          horizontal
          contentContainerStyle={styles.padding}
          showsHorizontalScrollIndicator={false}
          pt={4}>
          {locations.map((location, index) => (
            <LocationCard
              key={index}
              location={location}
              miniCard
              style={{ marginRight: 10 }}
              navigation={navigation}
            />
          ))}
        </ScrollView>

        <FeaturedRow title="Trend" description=" Locations that people love" />
        <ScrollView
          horizontal
          contentContainerStyle={styles.padding}
          showsHorizontalScrollIndicator={false}
          pt={4}>
          {locations.map((location, index) => (
            <LocationCard
              key={index}
              location={location}
              miniCard
              style={{ marginRight: 10 }}
              navigation={navigation}
            />
          ))}
        </ScrollView>

        <FeaturedRow title="Top visit" description=" Everyone best choice!" />
        <ScrollView
          horizontal
          contentContainerStyle={styles.padding}
          showsHorizontalScrollIndicator={false}
          pt={4}>
          {locations.map((location, index) => (
            <LocationCard
              key={index}
              location={location}
              miniCard
              style={{ marginRight: 10 }}
              navigation={navigation}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
