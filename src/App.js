import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';

export default function App() {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/about' element={<AboutPage />}></Route>
          </Routes>
        </div>
        <AboutIconLink />
      </BrowserRouter>
    </FeedbackProvider>
  );
}
