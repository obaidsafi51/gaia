import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useState } from "react";
import { auth } from "../../../firebaseConfig";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(""); // Clear error when user modifies input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      alert("User registered successfully!");

      router.push("/");
      // Pass user info to the parent component if needed
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          setError("This email is already in use.");
          break;
        case "auth/invalid-email":
          setError("Invalid email address.");
          break;
        case "auth/weak-password":
          setError("Password is too weak. Please use at least 6 characters.");
          break;
        default:
          setError("An error occurred. Please try again." + error);
      }
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="p-6 flex flex-col items-center">
        <img src="/logo.png" alt="logo" className="h-24 w-24 mb-16" />
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} className="w-full rounded px-3 py-2 bg-[#ffe0b2]/25" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded px-3 py-2 bg-[#ffe0b2]/25"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full rounded px-3 py-2 bg-[#ffe0b2]/25"
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="w-full bg-[var(--primary-color)] text-[var(--background)] uppercase text-lg py-2 rounded hover:bg-blue-600 mt-8">
          Sign Up
        </button>
        <div className="flex items-center mt-4">
          <p className="me-4">Already have an account?</p>
          <Link href={"/auth/login"} className="text-[var(--primary-color)] bold hover:text-[var(--primary-color)]/75 ">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
