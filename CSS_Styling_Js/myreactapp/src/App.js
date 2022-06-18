// ** Global import of css must include the .css at the end 
// ** This will allow us to just write down the class name and no {} object syntax needed here!

import './assets/css/global.css';
import Logo from './components/Logo';

export default function App() {
    return (
        <div className="App">
            <h1>Kamrul Hasan</h1>
            <Logo />
        </div>
    );
}
