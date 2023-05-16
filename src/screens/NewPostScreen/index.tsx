import React from 'react';
import { SafeAreaView } from 'react-native';

import AddNewPost from './components/AddNewPost';
import styles from './styles';

const NewPostScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <AddNewPost />
    </SafeAreaView>
  );
};

export default NewPostScreen;
