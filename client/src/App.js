import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookStore from "./Components/BookStore";
import LoginSignup from "./Components/LoginSignup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup/>} />
        <Route path="/book_details" element={<BookStore/>} />
      </Routes>
    </Router>
  );
};

export default App;
