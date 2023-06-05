import {
  Center,
  FormControl,
  Image,
  Input,
  Pressable,
  Text,
  View,
  VStack,
} from 'native-base';
import React, { useMemo, useState } from 'react';
import { Alert } from 'react-native';
import { SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Waiting } from '../../components';
import { cities } from '../../lib/common';
import { EvilIcons, Ionicons, MaterialIcons } from '../../lib/icons';
import { actions } from '../../redux/reducers/location';
import { selectLoadingLocations } from '../../redux/selectors/loaction';
import type { Location } from '../../types/loaction';
import SelectAddress from './SelectAddress';
import SelectCategory from './SelectCategory';
import styles from './styles';

type Props = {
  navigation: any;
};

const NewPostScreen = ({ navigation }: Props) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingLocations);
  const [openModal, setOpenModal] = useState<string>();
  const [newPost, setNewPost] = useState<Location>({
    id: '',
    title: '',
    imgUrl: '',
    description: '',
    address: { province: '' },
    catalogs: [],
  });

  const addressString = useMemo(() => {
    const address: string[] = [];
    if (!newPost.address.province) return '';
    const province = cities[newPost.address.province].name;
    address.push(province);

    if (!newPost.address.district) return province;
    const district =
      cities[newPost.address.province].districts[newPost.address.district].name;
    address.push(district);

    if (newPost.address.ward) {
      const ward =
        cities[newPost.address.province].districts[newPost.address.district]
          .wards?.[newPost.address.ward].name;
      address.push(ward ?? '');
    }
    return address.reverse().join(', ');
  }, [newPost.address]);

  const validate = () => {
    if (!newPost.imgUrl) {
      Alert.alert('Image Url', 'This fields is require');
      return false;
    }
    if (!newPost.title) {
      Alert.alert('Title', 'This fields is require');
      return false;
    }
    if (!newPost.description) {
      Alert.alert('Description', 'This fields is require');
      return false;
    }
    if (newPost.title.length > 50) {
      Alert.alert('Title', 'Characters should not exceed 50');
      return false;
    }
    if (newPost.description.length > 2200) {
      Alert.alert('Description', 'Characters should not exceed 2200');
      return false;
    }
    if (!newPost.catalogs) {
      Alert.alert('Catalory', 'Please select category');
      return false;
    }
    if (newPost.catalogs.length > 4) {
      Alert.alert('Catalory', 'Max category is 4');
      return false;
    }
    return true;
  };

  const handleAddLocation = () => {
    if (!validate()) return;
    dispatch(actions.addLocation(newPost));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {loading ? <Waiting /> : null}
      {openModal === 'category' ? (
        <SelectCategory
          categorySelect={newPost.catalogs}
          handleClose={() => setOpenModal(undefined)}
          handleSubmit={data => setNewPost(pre => ({ ...pre, catalogs: data }))}
        />
      ) : null}
      {openModal === 'address' ? (
        <SelectAddress
          address={newPost.address}
          handleClose={() => setOpenModal(undefined)}
          handleSubmit={data => setNewPost(pre => ({ ...pre, address: data }))}
        />
      ) : null}
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.headerContainer}>
            <MaterialIcons
              onPress={() => (navigation as Navigation).goBack()}
              name="arrow-back-ios"
              size={25}
              color="black"
            />
            <Text style={styles.headerText}>New Post</Text>
            <Pressable onPress={handleAddLocation}>
              <Ionicons name="add-circle-outline" size={35} />
            </Pressable>
          </View>
        </SafeAreaView>
        <Center>
          <VStack>
            <FormControl width="96" maxW="350px">
              <FormControl.Label>Title</FormControl.Label>
              <Input
                placeholder="Enter title"
                onChangeText={value =>
                  setNewPost(pre => ({
                    ...pre,
                    title: value,
                  }))
                }
              />
            </FormControl>
            <FormControl width="96" maxW="350px">
              <FormControl.Label>Description</FormControl.Label>
              <Input
                height={100}
                placeholder="Enter description"
                onChangeText={value =>
                  setNewPost(pre => ({
                    ...pre,
                    description: value,
                  }))
                }
              />
            </FormControl>
            <FormControl width="96" maxW="350px">
              <FormControl.Label>Address</FormControl.Label>
              <Pressable onPress={() => setOpenModal('address')}>
                <Input
                  isReadOnly
                  placeholder="Enter address"
                  value={addressString}
                />
              </Pressable>
            </FormControl>
            <FormControl width="96" maxW="350px">
              <FormControl.Label>Category</FormControl.Label>
              <Pressable onPress={() => setOpenModal('category')}>
                <Input
                  isReadOnly
                  placeholder="Enter category"
                  value={newPost.catalogs.join(', ')}
                />
              </Pressable>
            </FormControl>
            <FormControl width="96" maxW="350px">
              <FormControl.Label>Imgae Url</FormControl.Label>
              <Input
                placeholder="Enter image uri"
                onChangeText={value =>
                  setNewPost(pre => ({
                    ...pre,
                    imgUrl: value,
                  }))
                }
              />
            </FormControl>
          </VStack>
          <View mt={5}>
            {newPost.imgUrl ? (
              <Image source={{ uri: newPost.imgUrl }} size={150} alt="" />
            ) : (
              <EvilIcons name="image" size={150} />
            )}
          </View>
        </Center>
      </View>
    </SafeAreaView>
  );
};

export default NewPostScreen;
