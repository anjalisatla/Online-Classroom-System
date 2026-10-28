import { Routes, Route, useLocation } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Register from "./components/Register"
import Login from "./components/Login"

function App() {
  const location = useLocation()
  const hideHeaderRoutes = ["/admin", "/user"]

  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App