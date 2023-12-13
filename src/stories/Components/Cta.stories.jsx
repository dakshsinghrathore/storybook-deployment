// Import Rating component
import Cta from './Cta';

export default {
    title: 'DSR/Cta',
    component:  Cta,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
      layout: 'fullscreen',
    },
};

export const CtaPage = (args) => <Cta {...args} />;


