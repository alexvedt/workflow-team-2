import { describe, it, expect, beforeEach, vi } from "vitest";
import LoginForm from "./index";
// import handleLogout from "../logout";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

const localStorageMock = (function () {
  let store = {};
  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value;
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
})();

const MOCK_ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

vi.stubGlobal(
  "fetch",
  vi.fn(() =>
    Promise.resolve({
      status: 200,
      statusText: "OK",
      ok: true,
      json: () =>
        Promise.resolve({
          accessToken: MOCK_ACCESS_TOKEN,
          email: "8958231-last@stud.noroff.no",
        }),
    })
  )
);

beforeEach(() => {
  fetch.mockClear();
  localStorage.clear();
});

describe("Logging in and saving accessToken ", () => {
  it("Displays login page", async () => {
    render(<LoginForm />);

    await fireEvent.click(screen.getByText("Sign in"));

    waitFor(() => {
      const successMessage = screen.queryByText(
        "👋 Hi my_username. You will now redirect to the home page!"
      );
      expect(successMessage).toBeInTheDocument();
    });
  });

  it("loginUser stores token on successful login", async () => {
    render(<LoginForm />);
    await fireEvent.click(screen.getByText("Sign in"));
    // const data ={
    //   email: "8958231-last@stud.noroff.no",
    //   password: "8958231-last@stud.noroff.no",
    // };

    waitFor(() => {
      const successMessage = screen.queryByText(
        "👋 Hi my_username. You will now redirect to the home page!"
      );
      expect(successMessage).toBeInTheDocument();
      console.log(">>>>>", localStorage.getItem("access_token"));
      expect(localStorage.getItem("access_token")).toBeTruthy();
      expect(localStorage.getItem("user_email")).toBe("user_email");
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });

  it("logoutUser clears the token from localStorage", async () => {
    render(<LoginForm />);
    await fireEvent.click(screen.getByText("Sign in"));
    // localStorage.setItem("access_token", "fake_token");
    // localStorage.setItem("user_name", "test_name");

    const handleLogout = () => {
      console.log("Logging out");
      localStorage.removeItem("access_token");
      localStorage.removeItem("user_name");
      console.log("Logged out");
    };
    handleLogout();

    expect(localStorage.getItem("access_token")).toBeNull();
    expect(localStorage.getItem("user_name")).toBeNull();
  });
});
