import {
  Avatar,
  Box,
  Center,
  FlatList,
  Heading,
  HStack,
  Spacer,
  Text,
  VStack,
} from 'native-base';
import React from 'react';

import { owners } from '../../../lib/assets';

const AboutUs = () => {
  const data = [
    {
      id: '1',
      fullName: 'Nguyễn Văn Linh',
      timeStamp: '12:47 PM',
      email: '20520613@gm.uit.edu.vn',
      avatar: owners.owner1,
    },
    {
      id: '2',
      fullName: 'Hồng Gia Hy',
      timeStamp: '11:11 PM',
      email: '20520561@gm.uit.edu.vn',
      avatar: owners.owner2,
    },
    {
      id: '3',
      fullName: 'Trần Huyền Anh Thy',
      timeStamp: '6:22 PM',
      email: '20520798@gm.uit.edu.vn',
      avatar: owners.owner3,
    },
    {
      id: '4',
      fullName: 'Phạm Thị Nhật Khánh',
      timeStamp: '8:56 PM',
      email: '20521455@gm.uit.edu.vn',
      avatar: owners.owner4,
    },
  ];
  return (
    <Center>
      <Heading fontSize="xl" p="4" pb="3">
        About Us
      </Heading>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: 'muted.50',
            }}
            borderColor="muted.800"
            pl={['0', '4']}
            pr={['0', '5']}
            py="2">
            <HStack space={[2, 3]} justifyContent="space-between">
              <Avatar size="48px" source={item.avatar} />
              <VStack>
                <Text
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="coolGray.800"
                  bold>
                  {item.fullName}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: 'warmGray.200',
                  }}>
                  {item.email}
                </Text>
              </VStack>
              <Spacer />
              <Text
                fontSize="xs"
                _dark={{
                  color: 'warmGray.50',
                }}
                color="coolGray.800"
                alignSelf="flex-start">
                {item.timeStamp}
              </Text>
            </HStack>
          </Box>
        )}
        keyExtractor={item => item.id}
      />
    </Center>
  );
};

export default AboutUs;
