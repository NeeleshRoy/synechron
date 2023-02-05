import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from '@chakra-ui/react';

const Home = () => {
  return (
    <div>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
            <FormHelperText>between 8 - 15 characters(Alpha Number with at least one Capital Letter and 1 Special Character)</FormHelperText>
          </FormControl>
    </div>
  );
};

export default Home;