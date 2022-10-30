import React from "react";
import Navbar from "../components/Navbar";
import Tasks from "../components/Tasks";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <section className="section">
        <div className="columns is-centered">
          <div className="column is-half">
            <Tasks />
          </div>
        </div>
      </section>
    </div>
  );
}
