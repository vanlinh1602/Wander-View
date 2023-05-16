import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';

import FormikPostUploader from './FormikPostUploader';
import styles from './styles';
const AddNewPost = () => {
  return (
    <View style={styles.container}>
      <Header />
      <FormikPostUploader />
    </View>
  );
};

const Header = () => (
  <SafeAreaView>
    <View style={styles.headerContainer}>
      <Image
        source={{
          uri: 'https://img.icons8.com/?size=512&id=40217&format=png',
        }}
        style={styles.iconBack}
      />
      <Text style={styles.headerText}>New Post</Text>
      <Text> </Text>
    </View>
  </SafeAreaView>
);

export default AddNewPost;
