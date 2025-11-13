import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Home, Profile, SignIn, SignUp } from "./pages";
import { Header, ProtectedRoutes } from "./components";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      {/* Your routes and components go here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="about" element={<About />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
