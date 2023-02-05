import { useState } from 'react';
import Home from './components/Home';
import { Container } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom'
import Protected from './components/Protected';
import Movies from './components/Movies';

function App() {
  const [isLoggedIn, isLoggedInSet] = useState(false)
  return (
    <Container>
        <Routes>
          <Route path='/' element={<Home isLoggedInSet={isLoggedInSet}/>}/>
          <Route element={<Protected isLoggedIn={isLoggedIn} />}>
            <Route path='/movies' element={<Movies />} />
          </Route>
        </Routes>
    </Container>
  );
}

export default App;
