// Import Rating component
import Form from './Form';

export default {
    title: 'DSR/Form',
    component: Form,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
      layout: 'fullscreen',
    },
};

export const BasicForm = {
    args: {
      primary: true,
      label: 'Basic Form',
      size: 'medium',
      backgroundColor: 'white',
    },
  };
  
  export const basicForm = (args) => <Form {...args} />;
  
