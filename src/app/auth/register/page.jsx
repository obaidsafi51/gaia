"use client";
import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

import { auth } from "../../../../firebaseConfig";
import UserMessage from "../../components/UserMessage";
import { useRouter } from "next/navigation";
import Login from "../../components/Login";
import Signup from "@/app/components/Signup";
const Register = () => {
  const [login, setLogin] = useState(false);
  const [Data, setdata] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");
  const router = useRouter();
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    // Make sure localStorage is only accessed client-side
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("Token");
      if (token) {
        router.push("/");
      }
    }
  }, [router]);
  const signUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, Data.email, Data.password);

      setMessage("Sign up Successfully");
      setColor("green");
      setShowMessage(true);
      localStorage.setItem("Token", userCredential.user.accessToken);
      return userCredential.user;
    } catch (error) {
      console.error("Error signing up:", error.message);
      setMessage("Error signing up:", error.message);
      setColor("red");
      setShowMessage(true);
      throw error;
    }
  };

  const SignUpWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google Sign-in successful", result.user);
      setMessage("Sign up Successfully");
      setColor("green");
      setShowMessage(true);
      localStorage.setItem("Token", result.user.accessToken);
    } catch (error) {
      setMessage("Error signing up:", error.message);
      setColor("red");
      setShowMessage(true);
    }
  };
  const hideUserMessage = () => {
    setShowMessage(false);
  };

  useEffect(() => {
    if (message === "Sign up Successfully") {
      router.push("/");
    }
  }, [message, router]);

  return <Signup />;
};

export default Register;
