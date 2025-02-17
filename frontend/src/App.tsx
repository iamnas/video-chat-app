import { Route, Routes } from "react-router"
import Lobby from "./page/Lobby"
import Room from "./page/Room"

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
    </div>
  )
}

export default App
