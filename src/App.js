import './App.css';
import BucketList from './components/BucketList';
import Footer from './components/Footer';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume'

const styles = {
  body: {
    height: '100%'
  }
}

function App() {
  return (
    <div style={styles.body}>
      <div>
        <Header />
      </div>
      <div style={styles.body}>
        <Resume />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
