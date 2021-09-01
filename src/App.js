import React from "react";
import ReactDom from 'react-dom';
import { ThemeProvider } from "styled-components";
import { BsBookHalf } from "react-icons/bs";


import { Header,Main, Footer } from "./components/Layout";
import { NavBar,NavItem,NavLink } from "./components/Navbar";


function App() {
        const theme = {
          primary:{
            main: "#29b6f6",
            light: "#73e8ff",
            dark: "#0086c3",
            textColor: "#000",
          },
          secondary : {
            main:"#fff",
          },

        };

  return (
    <ThemeProvider theme={theme}>
     <Header>
      <NavBar>
      <NavItem href="#">
            <NavLink>
            <BsBookHalf/>
            </NavLink>
        </NavItem>

        <NavItem href="#">
            <NavLink>
            Catalog
            </NavLink>
        </NavItem>
        
        <NavItem href="#">
          <NavLink>
            Dashboard
          </NavLink>
        </NavItem>
      </NavBar>
            </Header>
            <Main></Main>
            <Footer></Footer>
    </ThemeProvider>
    
    
  );
}

export default App;
