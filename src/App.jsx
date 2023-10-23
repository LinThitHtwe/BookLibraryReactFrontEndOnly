import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LeftSidebar from "./components/LeftSidebar";
import BookRead from "./pages/BookRead";
import Login from "./pages/Login";
import axios from "axios";
import ThemeProvider, { useTheme } from "./context/ThemeProvider";
axios.defaults.baseURL = "http://localhost:8080/";
// axios.defaults.withCredentials = true;

function App() {
  const [darkTheme, setDarkTheme] = useTheme();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <div className={`root ${darkTheme ? "" : "light"}`}>
          <LeftSidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book/:id" element={<BookRead />} />
            <Route path="/book/:id/:currentPage" element={<BookRead />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
