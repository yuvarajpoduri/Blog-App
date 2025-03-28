import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import CreateBlog from "./CreateBlog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound"
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateBlog />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
