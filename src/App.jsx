import React from "react";
import Header from "./components/Header";
import WorkExperience from "./components/WorkExperience";
import ShowCase from "./components/ShowCase";
import Links from "./components/Links";
import Profile from "./components/Profile";
import SideProject from "./components/SideProject";
import { FiExternalLink } from "react-icons/fi";

const App = () => {
  return (
    <section>
      {/* Header */}
      <header className="top-0 sticky bg-black   ">
        <Header />
      </header>

      {/* Content */}
      <div
        className="bg-black text-white min-h-screen flex justify-around 
      items-center "
      >
        <div className="max-w-sm w-full px-4 mt-8">
          <Profile />
          <WorkExperience />
          <SideProject />
          <ShowCase />
          <Links />
        </div>
      </div>
    </section>
  );
};

export default App;
