import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume'
import { useState } from 'react';

function App() {

  const [currentTab, setCurrentTab] = useState('about');

  const renderTab = () => {
    switch (currentTab) {
      case 'about':
        return <AboutMe />;
      case 'contact':
        return <ContactForm />;
      case 'portfolio':
        return <Portfolio />;
      case 'resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  }

  return (
    <div>
      <div>
        <Header 
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </div>
      <div>
        {renderTab()}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
