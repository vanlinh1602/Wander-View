import React, { useState } from 'react';
import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Link,
  Switch,
  Text,
  VStack,
  useColorMode,
} from 'native-base';
import { post } from '../../services';
// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
const Home = () => {
  const [message, setMessage] = useState();
  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      px={4}
      flex={1}>
      <VStack space={5} alignItems="center">
        <Heading size="lg">Welcome to NativeBase</Heading>
        <HStack space={2} alignItems="center">
          <Text>Edit</Text>
          <Box
            px={2}
            py={1}
            _dark={{ bg: 'blueGray.800' }}
            _light={{ bg: 'blueGray.200' }}>
            App.js
          </Box>
          <Text>and save to reload.</Text>
        </HStack>
        <Link href="https://docs.nativebase.io" isExternal>
          <Text color="primary.500" underline fontSize={'xl'}>
            Learn NativeBase
          </Text>
        </Link>
        <Text>{message}</Text>

        <Button
          onPress={async () => {
            const data = {
              name: 'Weather App',
              email: 'weatherapp@gmail.com',
            };
            const result = await post('/api/user', data);

            setMessage(result.message);
          }}>
          Call Backend
        </Button>
        <ToggleDarkMode />
      </VStack>
    </Center>
  );
};
export default Home;
