import _ from 'lodash';
import { HStack, Input, ScrollView, View } from 'native-base';
import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';

import { LocationCard } from '../../components';
import { selectLocations } from '../../redux/selectors/loaction';
import type { Location as LocationType } from '../../types/loaction';
import ModalFilter from './ModalFilter';
import styles from './styles';

type Props = {
  navigation: Navigation;
  route: any;
};

export type Filter = {
  address?: string;
  category?: string;
};

const Location = ({ navigation, route }: Props) => {
  const defaultFilter = (route as Route).params;
  const locations = useSelector(selectLocations);
  const [openModalFilter, setOpenModalFilter] = useState<boolean>(false);
  const [filter, setFilter] = useState<Filter>({});
  const [filterName, setFilterName] = useState<string>();
  const [locationFilter, setLocationFilter] =
    useState<LocationType[]>(locations);

  const handleFilter = useCallback(
    (options: Filter) => {
      let dataFilter = _.cloneDeep(locations);
      if (options?.category) {
        dataFilter = dataFilter.filter(location =>
          location.catalogs.includes(options.category!),
        );
      }
      return dataFilter;
    },
    [locations],
  );

  useEffect(() => {
    if (defaultFilter) {
      setFilter(defaultFilter);
    }
  }, [defaultFilter]);

  useEffect(() => {
    if (_.size(filter)) {
      const rawData = handleFilter(filter);
      setFilterName('');
      setLocationFilter(rawData);
    } else {
      setLocationFilter(locations);
    }
  }, [filter, locations, handleFilter]);

  useEffect(() => {
    let rawFilter = handleFilter(filter);
    if (filterName) {
      rawFilter = rawFilter.filter(location =>
        location.title.toLowerCase().includes(filterName.toLowerCase()),
      );
    }
    setLocationFilter(rawFilter);
  }, [filterName, filter, handleFilter]);

  return (
    <SafeAreaView>
      {openModalFilter ? (
        <ModalFilter
          handleClose={() => setOpenModalFilter(false)}
          handleFilter={value => setFilter(value)}
        />
      ) : null}
      <HStack
        paddingY={2}
        marginX={5}
        alignItems="center"
        space={2}
        justifyContent="space-between">
        <Input
          value={filterName}
          onChangeText={value => setFilterName(value)}
          fontSize={16}
          paddingX={5}
          borderColor="#5A4CBB"
          focusOutlineColor="#5A4CBB"
          InputLeftElement={
            <AntDesign
              style={{ marginLeft: 10 }}
              name="search1"
              size={20}
              color="#5A4CBB"
            />
          }
          width="80"
          variant="rounded"
          placeholder="Search"
        />
        <AntDesign
          name="filter"
          size={30}
          color="#5A4CBB"
          onPress={() => setOpenModalFilter(true)}
        />
      </HStack>
      <ScrollView bgColor="white" contentContainerStyle={styles.paddingBottom}>
        <View style={styles.flexColumn}>
          {locationFilter.map((location, index) => (
            <LocationCard
              key={index}
              location={location}
              navigation={navigation}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Location;
