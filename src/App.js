import { useState } from 'react';
import Home from './components/Home';
import { Container } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom'
import Protected from './components/Protected';
import Movies from './components/Movies';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import store from './components/store'
import { Provider } from 'react-redux'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "emailCopy": "Email Address",
          "passwordCopy": "Password",
          "email": "We'll never share your email.",
          "password": "between 8 - 15 characters(Alpha Number with at least one Capital Letter and 1 Special Character)",
          "submit": "Submit"
        }
      },
      ar: {
        translation : {
          "emailCopy": "عنوان البريد الإلكتروني",
          "passwordCopy": "كلمة المرور",
          "email": "لن نشارك بريدك الإلكتروني أبدًا",
          "password": "بين 8-15 حرفًا (رقم ألفا برأس مال واحد على الأقلحرف وحرف خاص واحد)",
          "submit": "يُقدِّم"
        }
      }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

function App() {
  const [isLoggedIn, isLoggedInSet] = useState(false)
  return (
    <Provider store={store}>
      <Container>
        <Routes>
          <Route path='/' element={<Home isLoggedInSet={isLoggedInSet}/>}/>
          <Route element={<Protected isLoggedIn={isLoggedIn} isLoggedInSet={isLoggedInSet}/>}>
            <Route path='/movies' element={<Movies />} />
          </Route>
        </Routes>
    </Container>
    </Provider>
  );
}

export default App;
