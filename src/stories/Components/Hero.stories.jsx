// Import Rating component
import Hero from './Hero';

export default {
    title: 'DSR/Hero',
    component: Hero,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
      layout: 'fullscreen',
    },
};


  
  export const HeroPage = (args) => <Hero {...args} />;
  
