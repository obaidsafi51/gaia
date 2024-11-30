import Link from "next/link";

const Login = ({ onLogin }) => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center ">
        <form
          className="p-6 flex flex-col items-center "
          onSubmit={(e) => {
            e.preventDefault();
            onLogin();
          }}
        >
          <img src="/logo.png" alt="logo" className="h-24 w-24 mb-16" />
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input type="email" className="w-full  rounded px-3 py-2 bg-[#ffe0b2]/25" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input type="password" className="w-full  rounded px-3 py-2 bg-[#ffe0b2]/25" />
          </div>
          <button type="submit" className="w-full bg-[var(--primary-color)] text-[var(--background)] uppercase text-lg py-2 rounded hover:bg-blue-600 mt-8">
            Login
          </button>
          <div className="flex items-center mt-16">
            <p className=" me-4">Forgot password?</p>
            <Link href="" className="text-[var(--primary-color)] bold">
              Click here
            </Link>
          </div>
          <div className="flex items-center mt-4">
            <p className=" me-4">Don’t have an account?</p>
            <Link href="" className="text-[var(--primary-color)] bold">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
