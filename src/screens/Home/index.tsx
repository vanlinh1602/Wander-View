/* eslint-disable react/react-in-jsx-scope */
import {
  Box,
  Divider,
  Flex,
  Image,
  Input,
  ScrollView,
  Text,
  VStack,
  View,
} from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Categories from '../../components/Home/Categories';
import FeaturedRow from '../../components/Home/FeaturedRow';
import styles from './styles';
import type { CategoryCard, LocationCards } from '../../components/Home/type';
import LocationCard from '../../components/Home/LocationCard';

const categories: CategoryCard[] = [
  {
    imgUrl: 'https://cdn-icons-png.flaticon.com/512/10397/10397062.png',
    title: 'Camping',
  },
  {
    imgUrl: 'https://cdn-icons-png.flaticon.com/512/4336/4336883.png',
    title: 'Beach',
  },
  {
    imgUrl: 'https://cdn-icons-png.flaticon.com/512/10180/10180302.png',
    title: 'Kayak',
  },
  {
    imgUrl: 'https://cdn-icons-png.flaticon.com/512/2847/2847264.png',
    title: 'Mount',
  },
  {
    imgUrl: 'https://cdn-icons-png.flaticon.com/512/2321/2321588.png',
    title: 'Forest',
  },
];

const locations: LocationCards[] = [
  {
    imgUrl:'https://globalgrasshopper.com/wp-content/uploads/2011/11/Top-10-of-the-most-beautiful-places-to-visit-in-Vietnam.jpg',
    title: 'Heaven',
    rating:'4.5',
    genre:'Mountain',
    address : ' 12 Suoi Tien',
  },
  {
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXQUcZ4vbrvWpgSJEZ3DEVDnx_ZqQTojyeo6ksrLdapFAIOZetsRls3isNUFgjFnfoh3M&usqp=CAU',
    title:' Waterfall',
    rating:'4.0',
    genre:'Mountain',
    address : '43 Long Coast',
  },
  {
    imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9s_zZrFrYU4J9pEMWyjKdupraMMxXyPsFZg&usqp=CAU',
    title:'Jurasic Park',
    rating:'4.0',
    genre:'Camping',
    address : ' 5 Mars',
  },
];

const Home = () => {
  return (
    <SafeAreaView>
      {/* Header*/}
      <Flex direction="row" safeAreaTop backgroundColor={'white'}>
        <View margin={2} flex={1}>
          <Text style={styles.helloLine}>
            {' '}
            Hello <Text color={'orange.600'}>Traveler!</Text>
          </Text>
          <Text style={styles.introLine}>
            {' '}
            Let's discover a new <Text color={'purple.600'}>
              adventure
            </Text>{' '}
          </Text>
        </View>

        <View margin={2} alignItems={'center'}>
          <Image
            h={16}
            w={16}
            borderRadius={100}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiKUBafiNEc-HcMtgslV-6hCBtBrsBxYM5Bc75D_RB2FA45GvKzJi2py20b6BlwK3LadY&usqp=CAU',
            }}
            alt="Alternate Text"
          />
        </View>
      </Flex>

      {/* Searching*/}
      <View bgColor={'white'}>
        <VStack
          my="3"
          space={5}
          w="100%"
          maxW="500px"
          divider={
            <Box px="2">
              <Divider />
            </Box>
          }>
          <VStack w="85%" space={5} alignSelf="center">
            <Input
              placeholder="Search"
              variant={'filled'}
              width="97%"
              shadow={4}
              borderRadius="20"
              py="2"
              px="5"
              InputLeftElement={
                <EvilIcons name="search" color="black" size={40} />
              }
            />
          </VStack>
        </VStack>
      </View>

      {/* Body*/}
      <ScrollView
        bgColor={'gray.100'}
        contentContainerStyle={styles.paddingBottom}>
        {/* Category*/}
        <Categories categories={categories} />

        {/* Feature Row*/}
        <FeaturedRow
          id="1"
          title="Featured"
          description=" Something you may like"
        />
        <ScrollView
        horizontal
        contentContainerStyle={styles.padding}
        showsHorizontalScrollIndicator={false}
        pt={4}
        >
        <LocationCard locations={locations}/>
        </ScrollView>

        {/* Trending Row*/}
        <FeaturedRow
          id="2"
          title="Trend"
          description=" Locations that people love"
        />
        <ScrollView
        horizontal
        contentContainerStyle={styles.padding}
        showsHorizontalScrollIndicator={false}
        pt={4}
      >
        <LocationCard locations={locations}/>
        </ScrollView>


        {/* Top Visit Row*/}
        <FeaturedRow
          id="3"
          title="Top visit"
          description=" Everyone best choice!"
        />
        <ScrollView
        horizontal
        contentContainerStyle={styles.padding}
        showsHorizontalScrollIndicator={false}
        pt={4}
        >
        <LocationCard locations={locations}/>
        </ScrollView>


        {/* Le duoi cua Home*/}
        <View>
          <Text fontSize={42}>hello</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
