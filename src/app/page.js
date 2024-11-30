"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/SignUp";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // L'animazione dura 2 secondi
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
  const handleRegister = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
    alert("Registration successful!");
    setIsSigningUp(false); // Torna al login
  };

  if (isSigningUp) {
    return <Signup onRegister={handleRegister} setIsSigningUp={setIsSigningUp} />;
  }
  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} onSignup={() => setIsSigningUp(true)} />;
  }

  return (
    <div className="h-full">
      <Navbar />
      <div className="w-full h-full flex items-center justify-center flex-col">
        <img src="/logo.png" alt="logo" />
        <h1 className="uppercase text-5xl semibold">gaia</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

const LoadingScreen = () => (
  <div className={`w-full h-screen flex items-center justify-center animate-backgroundTransition `}>
    <img src="/logo.png" alt="logo" className="animate-fade-in w-64 h-64" />
  </div>
);

<Login />;
