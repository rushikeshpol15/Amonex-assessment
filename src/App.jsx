import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import JobDetails from "./pages/JobDetails";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/job-detail/:jobId" Component={JobDetails} />
          <Route path="/user-profile" Component={UserProfile} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
