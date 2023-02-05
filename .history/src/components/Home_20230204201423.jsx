import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
} from '@chakra-ui/react';

const Home = () => {
  const [email, emailSet] = useState('');
  const [password, passwordSet] = useState('');

  const handleEmail = (e) => {
    const validatedEmail = String(e.target.value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (validatedEmail) {
      emailSet(emailSet);
    }
  };


  const handleEmail = (e) => {
    const validatedEmail = String(e.target.value)
      .toLowerCase()
      .match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/
      );
    if (validatedEmail) {
      emailSet(emailSet);
    }
  };

  return (
    <div>
      <FormControl mt={36}>
        <FormLabel>Email address</FormLabel>
        <Input type="email" value={email} onChange={handleEmail} />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl mt={16}>
        <FormLabel>Password</FormLabel>
        <Input type="password" alue={password} onChange={handlePassword} />
        <FormHelperText>
          between 8 - 15 characters(Alpha Number with at least one Capital
          Letter and 1 Special Character)
        </FormHelperText>
      </FormControl>
      <Button colorScheme="blue" mt={8} disabled>
        Submit
      </Button>
    </div>
  );
};

export default Home;
