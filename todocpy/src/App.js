
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
// import Login from "./components/Login";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import './index.css'
import Alert from "./components/Alert";
import { useState } from "react";
import TodoState from "./context/todo/TodoState";


function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <div>
      <TodoState>

        <Router>

          <Navbar />
          <Alert alert={alert} />
          <Home />
          <Routes>
            <Route path="/" element={<TodoList showAlert={showAlert} />} />
            <Route path="/login" element={<Login showAlert={showAlert} />} />
            <Route path="/signup" element={<Signup showAlert={showAlert} />} />
            
          </Routes>
          <Footer />
        </Router>
      </TodoState>



    </div>
  );
}

export default App;   