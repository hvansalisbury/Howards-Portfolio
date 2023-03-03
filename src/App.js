import './App.css';
import BucketList from './components/BucketList';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="bucket-app">
        <BucketList />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
