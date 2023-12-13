import { Button } from '../Components/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'DSR/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
  export const Primary = {
    args: {
      primary: true,
      label: 'Primary',
    },
  };

  export const Secondary = {
    args: {
      label: 'Secondary',
    },
  };

  export const Large = {
    args: {
      size: 'large',
      label: 'Large',
    },
  };

  export const Small = {
    args: {
      size: 'small',
      label: 'Small',
    },
  };

  export const Warning = {
    args: {
      primary: true,
      label: 'Delete now',
      backgroundColor: 'red',
    }
  };