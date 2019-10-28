import { configure, addDecorator, addParameters } from '@storybook/html';
import { initDsm } from '@invisionapp/dsm-storybook';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

initDsm({
    addDecorator,
    addParameters,
    callback: () => configure(loadStories, module)
});

/**
 * Required to run locally as well as sending to DSM 
 * if no local build required comment out. 
 *  
 */ 
configure(req, module);