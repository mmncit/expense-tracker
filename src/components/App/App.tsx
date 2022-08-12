import { Link } from "react-router-dom";
import * as React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { About } from "../About";
import { fetchData } from "../../utils/network";

function MainPage() {
  const [profile, setProfile] = React.useState({});
  React.useEffect(() => {
    (async () => {
      const profileInfo = await fetchData();
      setProfile(profileInfo);
    })();
  }, []);
  console.log({ profile });

  return (
    <div>
      <Link to="/about">About</Link>
      <h2>Github Pages</h2>
      <h3>Deploying React to Github Pages</h3>
    </div>
  );
}

export function App() {
  return (
    <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>
    </React.StrictMode>
  );
}
