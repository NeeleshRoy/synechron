import React from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
  } from '@chakra-ui/react'

const Home = () => {
  return (
    <div>
        <FormControl>
  <FormLabel>Email address</FormLabel>
  <Input type='email' />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
    </div>
  )
}

export default Home