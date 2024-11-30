"use client";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

const Login = ({ close }) => {
  const router = useRouter();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      alert("Sign in Successfully", userCredential.user);

      // Ensure localStorage is accessed on the client side only
      if (typeof window !== "undefined") {
        localStorage.setItem("Token", userCredential.user.accessToken);
      }

      close();
      router.push("/");
      return userCredential.user;
    } catch (error) {
      alert("Error signing in:", error.message);
      throw error;
    }
  };

  const modelRef = useRef();

  const closeModel = (e) => {
    if (modelRef.current === e.target) {
      close();
    }
  };

  return (
    <div className="outer h-[100%] w-full inset-0 fixed flex items-center justify-center bg-[var(--background)]" ref={modelRef} onClick={closeModel}>
      <div className="">
        <form onSubmit={signIn} className="flex flex-col items-center ">
          <img src="logo.png" alt="logo" className="h-24 w-24 mb-16" />
          <div className="mb-5">
            <input
              type="email"
              id="email"
              className="w-full  rounded px-3 py-2 bg-[#ffe0b2]/25"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              id="password"
              className="w-full  rounded px-3 py-2 bg-[#ffe0b2]/25"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[var(--primary-color)] text-[var(--background)] uppercase text-lg py-2 rounded hover:saturate-150 hover:shadow-lg mt-8 mb-5"
          >
            LOGIN
          </button>
          <div className="flex items-start mb-5">
            <label className="ms-2 text-sm font-medium text-[#293133]/75">
              Forgot password?{" "}
              <Link href={"/register"} className="text-[var(--primary-color)] bold hover:text-[var(--primary-color)]/75 ">
                Click here
              </Link>
            </label>
          </div>
          <div className="flex items-start mb-5">
            <label className="ms-2 text-sm font-medium text-[#293133]/75">
              If you are a new user, please{" "}
              <Link href={"/register"} className="text-[var(--primary-color)] bold hover:text-[var(--primary-color)]/75">
                Sign Up
              </Link>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
