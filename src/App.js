import Result from './components/Result';
import Buttons from './components/Buttons';
import Footer from './components/Footer';

export default function Game() {
    return (
        <div className="main-container">
            <Result/>
            <Buttons/>
            <div className='letters'>Press R on your keyboard to play Rock. 'P' & 'S' also work</div>
            <Footer/>
        </div>
    );
  }
  