import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Switch,
} from '@chakra-ui/react';
import CookieManager from 'js-cookie';

import i18n, { changeLanguage } from 'i18next';

const Home = ({ isLoggedInSet }) => {
  const [email, emailSet] = useState('');
  const [password, passwordSet] = useState('');
  const [isEmailValidated, isEmailValidatedSet] = useState(false);
  const [isPasswordValidated, isPasswordValidatedSet] = useState(false);
  const navigate = useNavigate();
  let { t } = useTranslation();

  if (CookieManager.get('isLoggedIn')) {
    isLoggedInSet(true);
    navigate('/movies');
  }

  const handleEmail = (e) => {
    emailSet(e.target.value);
    const validatedEmail = String(e.target.value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (validatedEmail) {
      isEmailValidatedSet(true);
    } else {
      isEmailValidatedSet(false);
    }
  };

  const handlePassword = (e) => {
    passwordSet(e.target.value);
    const validatedPass = String(e.target.value).match(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/
    );
    if (validatedPass) {
      isPasswordValidatedSet(true);
    } else {
      isPasswordValidatedSet(false);
    }
  };

  const changeAppLanguage = () => {
    if (i18n.language === 'en') {
      changeLanguage('ar').then((translation) => {
        t = translation;
      });
    } else {
      changeLanguage('en').then((translation) => {
        t = translation;
      });
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    CookieManager.set('isLoggedIn', true);
    isLoggedInSet(true);
    navigate('/movies');
  };

  return (
    <section>
      <FormControl display="flex" alignItems="center" mt={36}>
        <FormLabel htmlFor="lang-switch">Change Language to Arabic?</FormLabel>
        <Switch id="lang-switch" onChange={changeAppLanguage} />
      </FormControl>
      <FormControl mt={16}>
        <FormLabel>{t('emailCopy')}</FormLabel>
        <Input type="email" value={email} onChange={(e) => handleEmail(e)} />
        <FormHelperText>{t('email')}</FormHelperText>
      </FormControl>

      <FormControl mt={16}>
        <FormLabel>{t('passwordCopy')}</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => handlePassword(e)}
        />
        <FormHelperText>{t('password')}</FormHelperText>
      </FormControl>
      <Button
        type="submit"
        colorScheme="blue"
        mt={8}
        isDisabled={!(isEmailValidated && isPasswordValidated)}
        onClick={(e) => handleSubmit(e)}
      >
        {t('submit')}
      </Button>
    </section>
  );
};

export default Home;
