import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });

  const { email, password } = auth;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuth({ ...auth, [name]: value });
  };

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await axios.post("https://reqres.in/api/login", auth).then(({ data }) => {
        // console.log(data, "data");
        localStorage.setItem("token", data.token);
        navigate("/");
      });
    } catch (err) {
      throw err;
    }
  };

  return (
    <div className="pt-28 flex items-center justify-center h-screen">
      <div className="w-[30%] shadow h-[35vh] bg-white px-3">
        <h1 className="text-center font-semibold text-[1.5rem] p-0 m-0">
          Login
        </h1>

        <div className="flex flex-col gap-3">
          <div>
            <h1 className="p-0 m-0 after:content-['*'] after:text-red-500 font-semibold">
              Email
            </h1>
            <input
              placeholder="Email"
              name="email"
              type="text"
              value={email}
              onChange={handleChange}
              className="border-[1px] border-gray h-8 w-full rounded px-3"
            />
          </div>

          <div>
            <h1 className="p-0 m-0 after:content-['*'] after:text-red-500 font-semibold">
              Password
            </h1>
            <input
              placeholder="Password"
              name="password"
              value={password}
              type="password"
              onChange={handleChange}
              className="border-[1px] border-gray h-8 w-full rounded px-3"
            />
          </div>
        </div>
        <div className="flex justify-center items-center pt-5">
          <button
            onClick={handleLogin}
            className="font-semibold text-[1rem] bg-green-500 hover:bg-green-600 text-white hover:text-white py-2 px-4 rounded "
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
