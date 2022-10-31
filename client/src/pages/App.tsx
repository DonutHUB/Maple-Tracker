import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <section className="section">
        <div className="columns is-centered">
          <div className="column is-half">
            <Dashboard></Dashboard>
          </div>
        </div>
      </section>
    </div>
  );
}
