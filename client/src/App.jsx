import { useState } from "react";
import { login } from "./api/users";
import { useNavigate } from "react-router-dom";

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      if (username === '' || password === '') {
        setErrorMessage("Username and Password are required!");
        setShowMessage(true);
      } else {
        const response = await login(username, password);
        if (response) {
          navigate('/inventory');
        } else {
          setErrorMessage('Invalid username or password!');
          setShowMessage(true);
        }
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('An unexpected error occurred. Please try again.');
      setShowMessage(true);
    }
  }

  return (
    <div className="w-screen h-screen bg-lavender-100 p-5 flex justify-center items-center">
      <div className="border border-gray-200 bg-white shadow-lg m-5 p-5 rounded-lg min-w-[400px] min-h-[500px]">
        <div className="pb-4 text-3xl font-bold text-center text-purple-800">LOGIN</div>
        {showMessage && (
          <div className="m-2 p-2 bg-red-100 text-red-700 text-center rounded-md">
            {errorMessage}
          </div>
        )}
        <div className="flex flex-col gap-5 m-5">
          <div className="flex flex-col">
            <label className="text-xl font-medium text-purple-800">Username:</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-2 p-2 rounded border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xl font-medium text-purple-800">Password:</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 p-2 rounded border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              type="password"
            />
          </div>
          <div className="flex justify-end mt-5">
            <button
              onClick={handleLogin}
              className="bg-purple-500 text-white py-2 px-6 rounded hover:bg-purple-400 transition duration-300"
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
