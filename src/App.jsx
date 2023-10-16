import { Outlet } from "@tanstack/react-router";
import "./App.css";

function App() {
  if (window.location.pathname === "/") {
    window.location.href = "/register";
  }
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
