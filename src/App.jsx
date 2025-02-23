import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (!firstName || !lastName || !email || !password) {
      setError(true);
    } else {
      setError(false);
      toast.success("🎉 Congratulations! Your 7-day free trial has begun.", {
        position: "top-center",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <div className="p-6 m-auto mt-20 flex flex-col md:flex-row md:justify-between md:items-center md:max-w-5xl">
        <div className="md:w-1/2 md:pr-6">
          <h1 className="text-3xl text-white font-bold text-center md:text-left">
            Learn to code by <br /> watching others
          </h1>
          <h2 className="text-lg text-gray-50 mt-2 text-center md:text-left">
            See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
            but understanding how developers think is invaluable.
          </h2>
        </div>

        <div className="md:w-1/2">
          <div className="p-6 flex flex-col">
            <h3 className="font-medium bg-[hsl(248,32%,49%)] text-white text-center text-xl p-3 rounded-md">
              Try it free 7 days <span className="text-base text-gray-300">then <br />$20/mo. thereafter</span>
            </h3>
          </div>

          <div className="p-6 m-6 flex flex-col items-center bg-white shadow-lg rounded-lg">
            <input
              type="text"
              placeholder="First Name"
              className={`border p-2 rounded-md w-full my-2 placeholder-gray-600 font-semibold ${
                error && !firstName ? "border-red-500" : ""
              }`}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {error && !firstName && <p className="text-red-500 text-sm">First Name is required</p>}

            <input
              type="text"
              placeholder="Last Name"
              className={`border p-2 rounded-md w-full my-2 placeholder-gray-600 font-semibold ${
                error && !lastName ? "border-red-500" : ""
              }`}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {error && !lastName && <p className="text-red-500 text-sm">Last Name is required</p>}

            <input
              type="email"
              placeholder="Email Address"
              className={`border p-2 rounded-md w-full my-2 placeholder-gray-600 font-semibold ${
                error && !email ? "border-red-500" : ""
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && !email && <p className="text-red-500 text-sm">Email is required</p>}

            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={`border p-2 rounded-md w-full my-2 placeholder-gray-600 font-semibold ${
                  error && !password ? "border-red-500" : ""
                }`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="absolute right-3 top-4 cursor-pointer text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {error && !password && <p className="text-red-500 text-sm">Password is required</p>}

            <button
              className="bg-green-500 text-white p-3 rounded-md w-full mt-4 hover:bg-green-700"
              onClick={handleSubmit}
            >
              Claim your free trial
            </button>

            <p className="text-xs text-center text-gray-500 mt-2">
              By clicking the button, you are agreeing to <br /> our <span className="text-red-500">Terms and Services</span>
            </p>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default App;
