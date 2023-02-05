import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Flex
} from '@chakra-ui/react';

const Home = () => {
  return (
    <div>
      <Flex>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
      </Flex>
    </div>
  );
};

export default Home;
