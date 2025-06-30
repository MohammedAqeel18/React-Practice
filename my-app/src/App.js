import React from 'react';
import Header from './Header';
import WelcomeMessage from './WelcomeMessage';
import Footer from './Footer';
import Book from './Book'
import Counter from './Counter';
import Car from './Car';
import Message from './Message';
import Number from './Number';

function App() {
  return (
    <div>
      <Header />
      <WelcomeMessage name="aqeel" age={25} city="srilanka" message="hello dear"/>
      <Book Book Name= "The Mistry" Year={2025} Author ="Aqeel"  event="Buy this book on Amazon" />
      <Message Alert="Click here to check your status"  button="congradulations you achieved the target"/>
      <Counter />
      <Car name1="Premio" brand1="Toyota" color1="white" price1="18000000.00 LKR" 
        name2="Civic" brand2="Honda" color2="black" price2="20000000.00 LKR"
        name3="Corolla" brand3="Toyota" color3="silver" price3="15000000.00 LKR"
      />

      <Number/>
      <Footer />
    </div>
  );
}

export default App;
