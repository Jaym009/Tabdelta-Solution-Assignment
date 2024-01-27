import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    // Fetch user data from the API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate authentication
    const user = users.find(
      (user) => user.email === email && user.username === password
    );

    if (user) {
      // Successful login
      console.log("Successful login");
      setLoginError(false);
      window.location.href = "/datagrid";
    } else {
      // Incorrect email or password
      console.log("Incorrect email or password");
      setLoginError(true);
    }
  };

  return (
    <div className="relative w-full h-screen bg-zinc-900/60">
      <div className="flex justify-center items-center h-full">
        <form className="max-w-[500px] w-full mx-auto bg-white p-8">
          <h2 className="text-4xl font-bold text-center py-4">Login</h2>
          {loginError && (
            <p className="text-red-500 text-lg font-semibold mb-4 text-center">
              Incorrect email or password
            </p>
          )}

          <div className="flex justify-between py-8">
            <p className="border shadow-lg hover:shadow-xl px-6 py-5 relative flex items-center">
              <AiFillFacebook className="mr-3" /> Facebook
            </p>
            <p className="border shadow-lg hover:shadow-xl px-6 py-5 relative flex items-center">
              <FcGoogle className="mr-3" />Google
            </p>
          </div>
          <div className="flex flex-col mb-4">
            <label>Email Address</label>
            <br />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
              required
              className="border relative bg-gray-100 p-2"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label>Password</label>
            <br />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              className="border relative bg-gray-100 p-2"
            />
          </div>
          <Link to="/signup">
            <button
              type="submit"
              onClick={handleLogin}
              className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white"
            >
              Sign In
            </button>
          </Link>
          <p className="text-center mt-8">
            Not a Member? <Link to="/signup">Sign Up Now</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
