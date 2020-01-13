import { addParameters, configure } from '@storybook/react';

configure(require.context('../stories', true, /\.jsx$/), module);

addParameters({
  options: {
    showPanel: false,
    isToolshown: false,
  },
})
