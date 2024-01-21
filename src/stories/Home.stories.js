import React from "react";
import Home from "../components/Home";
import "../index.css";

export default {
  title: "Home",
  component: Home
};

const Template = (args) => <Home  {...args} />;

export const Primary = Template.bind({});
Primary.args = {};