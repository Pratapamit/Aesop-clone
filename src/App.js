import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import TopSection from './Components/TopSection';
import BottomSection from './Components/BottomSection';
import Medicine from './Components/Medicine';
import BottomSection2 from './Components/BottomSection';
import Footer from './Components/Footer';
import MeddleSection from './Components/MeddleSection';
import MeddleSection2 from './Components/MeddleSection2';
import MeddleSection3 from './Components/MeddleSection3';

function App() {
  return (
    <>
      <Header />
      <TopSection /><br />
      <Medicine />
      <MeddleSection/>
      <Medicine />
      <MeddleSection2/>
      <MeddleSection3/>
      <BottomSection />
      <Footer />
    </>
  );
}

export default App;
