import './App.css';
import BucketList from './components/BucketList';
import Footer from './components/Footer';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume'
import { useState } from 'react';

const styles = {
  body: {
    height: '100%'
  }
}

function App() {

  const [currentTab, setCurrentTab] = useState('AboutMe');

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
        return <AboutMe />
    }
  }

  return (
    <div style={styles.body}>
      <div>
        <Header 
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </div>
      <div style={styles.body}>
        {renderTab()}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
