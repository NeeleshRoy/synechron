import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Flex,
  Center
} from '@chakra-ui/react';

const Home = () => {
  return (
    <div>
        <Flex>
            <Center>
            <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
            </Center>
        </Flex>
    </div>
  );
};

export default Home;
