import { useRef } from 'react';
import './App.css';
import Banner from './components/Banner';
import CharactersPreview from './components/CharactersPreview';
import Footer from './components/Footer';
import Hero from './components/Hero.jsx';
import PreviwChatScreen from './components/PreviwChatScreen';


function App() {

  const continueRef = useRef(null);

  return (
    <div className='bg-black'>
      {/* section hero */}
      <Hero continueRef={continueRef} />
      {/* section previw chat */}
      <PreviwChatScreen continueRef={continueRef} />
      {/* section characters */}
      <CharactersPreview />
      {/* section banner */}
      <Banner />
      {/* section footer */}
      <Footer />

    </div>
  )
}

export default App;
