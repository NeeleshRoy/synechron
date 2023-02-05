import Home from './components/Home';
import { Container } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom'
import Protected from './components/Protected';
import Movies from './components/Movies';

function App() {
  return (
    <Container>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route element={<Protected />}>
            <Route path='/movies' element={<Movies />} />
          </Route>
        </Routes>
    </Container>
  );
}

export default App;
