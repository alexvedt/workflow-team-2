import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const [inputErrors, setInputErrors] = useState({
    email: false,
    password: false,
  });

  const navigateToHome = () => {
    setTimeout(() => {
      navigate({ to: "/" });
    }, 2000);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    setError(null); // Resetting the error
    setInputErrors({ email: false, password: false }); // Reset input errors

    const { email, password } = event.target.elements;

    const payload = {
      email: email.value,
      password: password.value,
    };

    try {
      const res = await fetch(
        "https://api.noroff.dev/api/v1/social/auth/login",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      const data = await res.json();

      if (!res.ok) {
        if (data.message === "Username not found") {
          setError({ message: "Username doesn't exist." });
          setInputErrors({ email: true, password: false });
        } else if (data.message === "Invalid password") {
          setError({ message: "Wrong password." });
          setInputErrors({ email: false, password: true });
        } else {
          setError({ message: "An unexpected error occurred." });
        }
        return;
      }

      if (typeof data.accessToken === "undefined") {
        setError({ message: "Access token is not provided." });
        return;
      }

      localStorage.setItem("access_token", data.accessToken);
      setData(data);
      setIsSuccess(res.ok);
      navigateToHome();
    } catch (error) {
      console.warn("An error occurred", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 bg-#111827 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="w-auto h-10 mx-auto"
          src="../src/assets/NoHoverLogo.svg"
          alt="Your Company"
        />
        <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-white-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {isSuccess ? (
          <section>
            <p className="text-center text-green-900">
              👋 Hi {data?.name}. You will now redirect to the home page!
            </p>
          </section>
        ) : (
          <form className="space-y-6" onSubmit={handleOnSubmit}>
            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium leading-6 ${
                  inputErrors.email ? "text-red-500" : "text-white-900"
                }`}
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  defaultValue="first.last@stud.noroff.no"
                  className={`px-1 block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                    inputErrors.email ? "border-red-500" : ""
                  }`}
                />
              </div>
              {inputErrors.email && (
                <p className="text-red-500 mt-1">{error?.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className={`block text-sm font-medium leading-6 ${
                  inputErrors.password ? "text-red-500" : "text-white-900"
                }`}
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  defaultValue="UzI1NiIsInR5cCI"
                  className={`block w-full rounded-md border-0 px-1 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                    inputErrors.password ? "border-red-500" : ""
                  }`}
                />
              </div>
              {inputErrors.password && (
                <p className="text-red-500 mt-1">{error?.message}</p>
              )}
            </div>

            <div>
              <button
                disabled={isLoading}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isLoading ? "signing in" : "Sign in"}
              </button>
            </div>
          </form>
        )}

        <p className="mt-10 text-sm text-center text-gray-500">
          Not a member?{" "}
          <a
            href="/register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign up now
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;