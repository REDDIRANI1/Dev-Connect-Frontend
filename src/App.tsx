import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProfileEdit from "./pages/ProfileEdit";
import ProfileView from "./pages/ProfileView";
import ProjectCreate from "./pages/ProjectCreate";
import ProjectList from "./pages/ProjectList";
import ProjectDetail from "./pages/ProjectDetail"; 
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Router>
      <nav className="flex justify-between bg-gray-800 text-white p-4">
        {/* <h1 className="text-xl font-bold">DevConnect</h1> */}
        {/* <div className="space-x-4">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div> */}
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<ProfileEdit />} />
        <Route path="/profile/:username" element={<ProfileView />} />
        <Route path="/projects/new" element={<ProjectCreate />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/search" element={<SearchPage />} /> 
        {/* <Route path="/" element={<Navigate to="/projects" />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
