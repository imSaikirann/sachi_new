import * as React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Reg from "./components/Reg";
import ContactUs from "./components/Contactus";
import AboutUsLanding from "./components/AboutUsLanding"
export default function App() {
  return (
    <ChakraProvider>
      <Box maxW="100vw" overflowX="hidden" bg="#161616">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUsLanding />} />
          <Route path="/register" element={<Reg />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/competition" element={<Home />} />
        </Routes>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}