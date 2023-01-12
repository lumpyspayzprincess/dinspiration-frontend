import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import FoodsList from "./components/FoodsList"
import Signup from "./components/Signup"
import Login from "./components/Login"
import MyOptions from "./components/MyOptions"



function App() {
  return (
    <Router>
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/foods" element={<FoodsList />}/>
        <Route path="/my-options" element={<MyOptions />}/>

      </Routes>
    </main>
  </Router>
    )
}

export default App
