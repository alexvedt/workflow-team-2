import { describe, it, expect, beforeEach, vi } from "vitest";
import LoginForm from "../src/components/login";
import handleLogout from "../src/components/logout";

const localStorageMock = (function () {
  let store = {};
  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

vi.stubGlobal(
  "fetch",
  vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve({
          accessToken: "fake_token",
          email: "test@example.com",
        }),
    })
  )
);

beforeEach(() => {
  fetch.mockClear();
  localStorage.clear();
});

describe("userAuth", () => {
  it("loginUser stores token on successful login", async () => {
    const data = await LoginForm({
      email: "test@example.com",
      password: "password",
    });

    expect(data.accessToken).toBe("fake_token");
    expect(localStorage.getItem("access_token")).toBe("fake_token");
    expect(localStorage.getItem("user_name")).toBe("test name");
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("logoutUser clears the token from localStorage", () => {
    localStorage.setItem("access_token", "fake_token");
    localStorage.setItem("user_name", "test_name");

    handleLogout();

    expect(localStorage.getItem("access_token")).toBeNull();
    expect(localStorage.getItem("user_name")).toBeNull();
  });
});
