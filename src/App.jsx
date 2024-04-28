import Sidebar from "./layout/Sidebar"
import Navbar from "./layout/Navbar"
import Tasks from "./components/Tasks"

function App() {
  return (
    <div className="bg-primary h-screen">
      <Sidebar />
      <Navbar />
      <Tasks />
    </div>
  )
}

export default App
