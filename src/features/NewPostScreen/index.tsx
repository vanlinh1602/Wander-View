import { Text, View } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native';

import { MaterialIcons } from '../../lib/icons';
import FormikPostUploader from './components/FormikPostUploader';
import styles from './styles';

type Props = {
  navigation: any;
};

const NewPostScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
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
            <Text />
          </View>
        </SafeAreaView>
        <FormikPostUploader />
      </View>
    </SafeAreaView>
  );
};

export default NewPostScreen;
