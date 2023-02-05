import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button
} from '@chakra-ui/react';

const Home = () => {
  return (
    <div>
          <FormControl mt={36}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>

          <FormControl mt={16}>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
            <FormHelperText>between 8 - 15 characters(Alpha Number with at least one Capital Letter and 1 Special Character)</FormHelperText>
          </FormControl>
          <Button colorScheme='blue' mt={8}>Button</Button>
    </div>
  );
};

export default Home;
