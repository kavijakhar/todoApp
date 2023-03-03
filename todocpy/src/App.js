
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
// import Login from "./components/Login";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import './index.css'


function App() {

  return (
    <div>
      <Router>

        <Navbar />
        <Home />

        <Routes>

          <Route path="/" element={<TodoList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>



    </div>
  );
}

export default App;   