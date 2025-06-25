import React from 'react';
import Header from './Header';
import WelcomeMessage from './WelcomeMessage';
import Footer from './Footer';
import Book from './Book'
import Counter from './Counter';
function App() {
  return (
    <div>
      <Header />
      <WelcomeMessage name="aqeel" age={25} city="srilanka" message="hello dear"/>
      <Book Book Name= "The Mistry" Year={2025} Author ="Aqeel"  event="Buy this book on Amazon" />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
