"use client";

import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";

import { useState, useEffect } from "react";

import Footer from "./components/Footer";
import Login from "./components/Login";

const Home = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("Token");
      if (!token) {
        router.push("/auth/login");
      } else {
        setIsLoading(false);
      }
    }
  }, [router]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
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
