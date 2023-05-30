import React, { useMemo, useState } from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Fontisto } from '../../lib/icons';
import { categories } from '../../lib/options';
import type { Location } from '../../types/loaction';
import PlanModal from '../PlanModal';
import S from './styles';

type Props = {
  route: any;
  navigation: any;
};

const LocaitonDetail = ({ route, navigation }: Props) => {
  const params: Location = (route as Route).params;
  const { imgUrl, title, rating, description, address, catalogs } = params;
  const [addPlan, setAddPlan] = useState<boolean>(false);
  const handlepress = () => {
    (navigation as Navigation).navigate('locationReview');
  };

  const catalogsData = useMemo(() => {
    return categories.filter(category => catalogs.includes(category.title));
  }, [catalogs]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      {addPlan ? <PlanModal handleClose={() => setAddPlan(false)} /> : null}
      <ImageBackground style={{ flex: 0.45 }} source={{ uri: imgUrl }}>
        <View style={S.header}>
          <Icon
            onPress={() => navigation.goBack()}
            name="arrow-back-ios"
            size={28}
            color={'#fff'}
          />
          <Icon name="favorite" size={28} color={'#eb34de'} />
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
            {address}
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
        <TouchableOpacity onPress={() => setAddPlan(true)} style={S.bookNowBtn}>
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
            Add plan
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlepress}>
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
