import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";

function Home() {
  return (
      <>
    <div className="height-100vh flex">
      {/* <figure className="background-image"></figure> */}
      <div className="container flex-dir-col justify-content-space-around">
        <h1 className="font-size-4xl text-blue-400 font-weight-bold height-100 text-center">
          Listen your favourite songs{" "}
          <span className="text-red-500">free!</span>
        </h1>
        <Link
          to="/music"
          className="btn border-rounded-2x bg-green-500 max-width-300"
        >
          Let's Listen
        </Link>
      </div>
    </div>
    </>
  );
}

export default Home;
