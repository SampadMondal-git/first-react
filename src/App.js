import './App.css';
import Navbar from './navbar.js';
import Body from './body.js';
import Footer from './footer.js';
function App() {
  let myName = "Samy";
  return (
    <>
    <Navbar title="My First React App" />
      <h1>Hey there, I'm {myName}</h1>
      <p>This is my first react app</p>
      <Body />
      <Footer />
    </>
  );
}

export default App;