import { Text, View } from 'native-base';
import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const FeaturedRow = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <View>
      <View style={styles.viewFeature}>
        <Text style={styles.textFeature}>{title}</Text>
        <AntIcon name="arrowright" color="purple" size={30} />
      </View>
      <Text style={styles.descFeature}>{description}</Text>
    </View>
  );
};

export default FeaturedRow;
