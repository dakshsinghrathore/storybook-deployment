// Import Rating component
import Rating from './Rating';

export default {
    title: 'DSR/Rating',
    component: Rating,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
      layout: 'fullscreen',
    },
};

export const basicRating = (args) => <Rating {...args} />;
basicRating.args = {
    value: 2,
};
