const Login = ({ onLogin }) => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-gray-100">
        <form
          className="p-6 bg-white shadow-md rounded"
          onSubmit={(e) => {
            e.preventDefault();
            onLogin();
          }}
        >
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input type="password" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Login
          </button>
        </form>
      </div>
    </>
  );
};
export default Login;
