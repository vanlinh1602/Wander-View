import { ScrollView, Text, View } from 'native-base';
import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import LocationCard from './LocationCard';

const FeaturedRow = ({ _id, title, description }:any) => {
  return (
    <View>
      <View marginTop={-2} flexDirection={'row'} alignItems={'center'} p={3} justifyContent={'space-between'}>
        <Text fontSize={30} fontWeight={'bold'}>{title}</Text>
        <AntIcon name="arrowright" color="purple" size={29} />
      </View>


        <Text fontSize={17} px={4} color={'blue.700'} marginTop={-4}>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal:15,
        }}
        showsHorizontalScrollIndicator={false}
        pt={4}
      >

        {/* Location Card*/}
        <LocationCard
          id ={1}
          imgUrl="https://globalgrasshopper.com/wp-content/uploads/2011/11/Top-10-of-the-most-beautiful-places-to-visit-in-Vietnam.jpg"
          title=" Heaven"
          rating="4.5"
          genre="Mountain"
          address = " 12 Suoi Tien"
          short_description= " This is description"
          activities={[]}
          long={14}
          lat={54}
        />

        <LocationCard
          id ={2}
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXQUcZ4vbrvWpgSJEZ3DEVDnx_ZqQTojyeo6ksrLdapFAIOZetsRls3isNUFgjFnfoh3M&usqp=CAU"
          title=" Waterfall"
          rating="4.0"
          genre="Mountain"
          address = " 43 Long Coast"
          short_description= " This is description"
          activities={[]}
          long={4}
          lat={58}
        />

        <LocationCard
          id ={3}
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9s_zZrFrYU4J9pEMWyjKdupraMMxXyPsFZg&usqp=CAU"
          title="Jurasic Park"
          rating="4.0"
          genre="Camping"
          address = " 5 Mars"
          short_description= " This is description"
          activities={[]}
          long={41}
          lat={7}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;