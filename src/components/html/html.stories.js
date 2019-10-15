export default { 
    title: 'HTML',
    parameters: {
      'in-dsm': { id: '5d975768e5d9ac3963dadda6'}
    }
  };

  export const defaultComponent = () => {
    let button = document.createElement('button');
    button.value = 'Submit';
    button.name = 'submit_form';
    button.type = 'submit';
    return button;
  };

  export const withText = () => '<button class="btn" value="reset" name="reset_form" type="reset">Text</button>';