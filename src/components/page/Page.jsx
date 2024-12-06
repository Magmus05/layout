import React from "react";
import "./Page.css";
import { Sidebar } from "../sidebar/Sidebar";
import { Form } from "../form/Form";

export const Page = () => {
  return (
    <main className="page">
      <Sidebar />
      <Form />
    </main>
  );
};
