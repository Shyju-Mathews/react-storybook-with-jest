import React from "react";
import Counter from "../components/Counter";
import "../index.css";

export default {
  title: "Example/Counter",
  component: Counter,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = () => <Counter  />;

export const counterApp = Template.bind({});
counterApp.args = {};