import { useState } from "react";

const Signup = ({ onRegister, setIsSigningUp }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Simula la registrazione
    const newUser = { email: formData.email, password: formData.password };
    onRegister(newUser);
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
          <button
            type="button"
            onClick={() => setIsSigningUp(false)} // Torna al login
            className="text-[var(--primary-color)] bold"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
