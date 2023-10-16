import { Outlet } from "@tanstack/react-router";
import "./App.css";
import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("access_token"); // Adjust based on how you're managing login state

    if (!isLoggedIn) {
      navigate("/register");
    }
  }, []);
  return (
    <>
      <main>
        <Outlet />
      </main>

      <footer>
        <small>Created with ❤️ by You</small>
      </footer>
    </>
  );
}

export default App;
