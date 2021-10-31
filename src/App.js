import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import { Fragment, useState } from 'react';
import Search from './components/Search';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import ColorComponent from './components/ColorComponent';


function App() {
  const [search,setSearch] = useState("");

  const handleSearch = event=>setSearch(event.target.value);
  let user ="ICetinkaya"
  return (
      
      <Fragment>
       
        <Header>
        </Header>
        <ColorComponent/>
        <Body />
        <Footer></Footer>
        
      </Fragment>

  );
    
  
}


export default App;
