import React from "react";
import DonateForm from "../components/DonateForm";

export default function Donate() {
  return (
    <section>
      <div className="title">
        <h1>Donations</h1>
      </div>
      <div className="container">
        <DonateForm />
      </div>
    </section>
  );
}
