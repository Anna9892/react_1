import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Factorial from './components/HomeWork/Factorial';
import Power from './components/HomeWork/Power';
import Fibonacci from './components/HomeWork/Fibonacci';

function App() {
    let menu =
    {
        "Главная": "/index",
        "Магазин": "/shop",
        "Новости": "/news",
        "О компании": "/about",
        "Контакты": "/contacts"

    }
    return (
        <div className="App">
            <Header />
            <Nav menu={menu} />
            <Main />
            <Factorial number={5} />
            <Power />
            <Fibonacci/>
            <Footer />
        </div>
    );
}

export default App;
