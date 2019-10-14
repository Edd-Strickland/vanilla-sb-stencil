export default { 
  title: 'Component',
  parameters: {
    'in-dsm': { id: '5d975768e5d9ac3963dadda6'}
  }

};

export const defaultComponent = () => {
  let myComponent = document.createElement('my-component');
  myComponent.first = "We Don't ";
  myComponent.middle = 'Support ';
  myComponent.last = 'Stencil ';

  return myComponent;
};