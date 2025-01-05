import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Auth from "./components/auth";
import ProtectedRoute from "./components/ProtectedRoute";

function navigateUrl(url) {
  window.location.href = url;
}

const auth = async () => {
  const response = await fetch("http://localhost:5000/request", {
    method: "post",
  });
  const data = await response.json();
  console.log(data);
  navigateUrl(data.url);
};

// const handleOAuthCallback = async () => {
//   // Extract the code from the URL after the redirect
//   const queryParams = new URLSearchParams(window.location.search);
//   const code = queryParams.get("code");

//   if (code) {
//     try {
//       const response = await fetch(`http://localhost:5000/oauth?code=${code}`, {
//         method: "GET",
//       });
//       const data = await response.json();

//       if (data.user && data.id_token) {
//         console.log("User Data:", data.user);
//         console.log("ID Token:", data.id_token);
//         localStorage.setItem("id_token", data.id_token); // Store the ID token in localStorage
//         alert("Logged in successfully! ID token stored in localStorage.");
//         window.location.href = "/protected"; // Redirect to a protected route
//       } else {
//         console.error("Failed to log in:", data.message);
//       }
//     } catch (error) {
//       console.error("Error during OAuth callback:", error);
//     }
//   }
// };

function App() {
  // const isAuthenticated = !!localStorage.getItem("token");

  return (
    <>
      <button type="button" onClick={() => auth()}>
        Sign In with Google
      </button>
      <Router>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/protected"
            element={<ProtectedRoute></ProtectedRoute>}
          />
          {/* <Route path="*" element={<Navigate to="/auth" />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
