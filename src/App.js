import * as React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Reg from "./components/Reg";
import ContactUs from "./components/Contactus";
import AboutUsLanding from "./components/About/AboutUsLanding"
import CompLandingPage from "./components/Competition/CompLandingPage"
import Spon from "./components/Sponsers/SHead";
export default function App() {
  return (
    <ChakraProvider>
      <Box maxW="100vw" overflowX="hidden" bg="#161616">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUsLanding />} />
          <Route path="/register" element={<Reg />} />
          <Route path="/spon" element={<Spon/>} />

          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/competition" element={<CompLandingPage/>} />
        </Routes>
        
        <Footer />
      </Box>
    </ChakraProvider>
  );
}