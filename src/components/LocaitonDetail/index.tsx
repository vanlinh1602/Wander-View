import { VStack } from 'native-base';
import React, { useMemo, useState } from 'react';
import {
  Alert,
  FlatList,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';

import { GetAddressString } from '../../lib/common';
import { Fontisto, MaterialCommunityIcons } from '../../lib/icons';
import { categories } from '../../lib/options';
import { actions } from '../../redux/reducers/user';
import {
  selectLoadingUser,
  selectUserID,
  selectUserSaves,
} from '../../redux/selectors/user';
import type { Location } from '../../types/loaction';
import PlanModal from '../PlanModal';
import Waiting from '../Waiting';
import S from './styles';

type Props = {
  route: any;
  navigation: any;
};

const LocaitonDetail = ({ route, navigation }: Props) => {
  const params: Location = (route as Route).params;
  const { imgUrl, title, rating, description, address, catalogs, id } = params;
  const [addPlan, setAddPlan] = useState<boolean>(false);
  const wating = useSelector(selectLoadingUser);
  const userSave = useSelector(selectUserSaves);
  const dispatch = useDispatch();
  const userId = useSelector(selectUserID);

  const isSave = useMemo(() => {
    return userSave?.includes(id);
  }, [userSave, id]);

  const catalogsData = useMemo(() => {
    return categories.filter(category => catalogs.includes(category.title));
  }, [catalogs]);

  const handleReview = () => {
    (navigation as Navigation).navigate('locationReview', { postId: id });
  };

  const handleSave = () => {
    if (!userId) {
      Alert.alert('Wander View', 'Please login to use this feature');
      return;
    }
    dispatch(actions.updateUserSave(id));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      {wating ? <Waiting /> : null}
      {addPlan ? (
        <PlanModal location={params} handleClose={() => setAddPlan(false)} />
      ) : null}
      <ImageBackground style={{ flex: 0.45 }} source={{ uri: imgUrl }}>
        <View style={S.header}>
          <Icon
            onPress={() => navigation.goBack()}
            name="arrow-back-ios"
            size={28}
            color={'#fff'}
          />
          <VStack space={5}>
            <Icon
              name="favorite"
              size={28}
              color={isSave ? '#eb34de' : 'grey'}
              onPress={handleSave}
            />
            <MaterialCommunityIcons
              name="sun-thermometer"
              size={28}
              color="orange"
              onPress={() =>
                (navigation as Navigation).navigate('weather', {
                  location: params,
                })
              }
            />
          </VStack>
        </View>
        <View style={S.imageDetails}>
          <Text
            style={{
              width: '70%',
              fontSize: 30,
              fontWeight: 'bold',
              color: '#FFF',
              marginBottom: 20,
            }}>
            {title}
          </Text>
        </View>
        <View style={S.imageLocation}>
          <Icon name="place" size={28} color={'#fff'} />
          <Text
            style={{
              width: '90%',
              fontSize: 20,
              color: '#FFF',
              marginBottom: 10,
              marginRight: 100,
            }}>
            {GetAddressString(address, true)}
            {'    '}
            <Icon style={S.icon} name="star" size={20} color={'#fff'} />
            <Text
              style={{
                width: '70%',
                fontSize: 20,
                color: '#fff',
                alignItems: 'center',
              }}>
              {rating}
            </Text>
          </Text>
        </View>
      </ImageBackground>
      <View style={S.detailsContainer}>
        <Text
          style={{
            color: '#6111c2',
            marginTop: 20,
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          Description
        </Text>
        <Text style={{ marginTop: 20, lineHeight: 22, fontSize: 18 }}>
          {description}
        </Text>
        <View>
          <FlatList
            data={catalogsData}
            renderItem={catalog => (
              <View style={S.container}>
                <Text style={S.title}>
                  <Fontisto
                    name={catalog.item.icon}
                    size={40}
                    color={'#df96de'}
                  />{' '}
                  {catalog.item.title}
                </Text>
              </View>
            )}
            keyExtractor={item => item.icon}
            numColumns={2}
          />
        </View>
      </View>

      <View style={S.footer}>
        <TouchableOpacity
          onPress={() => {
            if (!userId) {
              Alert.alert('Wander View', 'Please login to use this feature');
              return;
            }
            setAddPlan(true);
          }}
          style={S.bookNowBtn}>
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
            Add plan
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleReview}>
          <View style={S.bookNowBtn}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
              Review
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LocaitonDetail;
