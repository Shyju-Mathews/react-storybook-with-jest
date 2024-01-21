import React from "react";
import App from "../App";
import "../index.css";

export default {
  title: "Example/App",
  component: App,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const TemplateOne = () => <App size={"big"}/>;
const TemplateTwo = () => <App size={"small"}/>;

export const Primary = TemplateOne.bind({});
export const Secondary = TemplateTwo.bind({});














































// Primary.args = {
//   primary: true,
//   label: "App",
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: "App",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "App",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Button",
// };