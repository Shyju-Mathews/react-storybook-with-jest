// import {Button}  from './Button';

// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// export default {
//   title: 'Example/Button',
//   component: Button,
//   parameters: {
//     // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
//     layout: 'centered',
//   },
//   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
//   tags: ['autodocs'],
//   // More on argTypes: https://storybook.js.org/docs/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// };

// // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const Primary = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };

// export const Secondary = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };

import React from "react";
import Button  from './Button';

import "../index.css";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button  {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  primary : true,
  label : "Button"
}
export const Secondary = Template.bind({});
Secondary.args = {
  label : "Button"
}














































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
