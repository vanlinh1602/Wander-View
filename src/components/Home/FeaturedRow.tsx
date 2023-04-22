import { Text, View } from 'native-base';
import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';


const FeaturedRow = ({ title, description }:any) => {
  return (
    <View>
      <View marginTop={-2} flexDirection={'row'} alignItems={'center'} p={3} justifyContent={'space-between'}>
        <Text fontSize={30} fontWeight={'bold'}>{title}</Text>
        <AntIcon name="arrowright" color="purple" size={29} />
      </View>

        <Text fontSize={17} px={4} color={'blue.700'} marginTop={-4}>{description}</Text>

    </View>
  );
};

export default FeaturedRow;