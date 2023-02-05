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
  const [isEmailValidated, isEmailValidatedSet] = useState(false)
  const [isPasswordValidated, isPasswordValidatedSet] = useState(false)

  const handleEmail = (e) => {
    emailSet(e.target.value);
    const validatedEmail = String(e.target.value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (validatedEmail) {
        isEmailValidatedSet(true)
    } else {
        isEmailValidatedSet(false)
    }
  };


  const handlePassword = (e) => {
    passwordSet(e.target.value);
    const validatedPass = String(e.target.value)
      .match(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/
      );
    if (validatedPass) {
        isPasswordValidatedSet(true);
    } else {
        isPasswordValidatedSet(false);
    }
  };

  return (
    <div>
      <FormControl mt={36}>
        <FormLabel>Email address</FormLabel>
        <Input type="email" value={email} onChange={(e) => handleEmail(e)} />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl mt={16}>
        <FormLabel>Password</FormLabel>
        <Input type="password" alue={password} onChange={(e) => handlePassword(e)} />
        <FormHelperText>
          between 8 - 15 characters(Alpha Number with at least one Capital
          Letter and 1 Special Character)
        </FormHelperText>
      </FormControl>
      <Button colorScheme="blue" mt={8} isDisabled={!(isEmailValidated && isPasswordValidated)}>
        Submit
      </Button>
    </div>
  );
};

export default Home;
