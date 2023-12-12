// Import Rating component
import Slider from './Slider';

export default {
    title: 'DSR/Slider',
    component: Slider,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
      layout: 'fullscreen',
    },
};


export const basicSlider = (args) => <Slider {...args} />;

basicSlider.args = {

  
  value: 100,
};


