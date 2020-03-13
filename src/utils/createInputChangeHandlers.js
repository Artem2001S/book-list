export function createInputChangeHandlers(inputs, onChangeFunction) {
  const inputChangeHandlers = {};

  // bind functions for handle input change event
  inputs.forEach(input => {
    inputChangeHandlers[input.name] = onChangeFunction.bind(this, input.name);
  });

  return inputChangeHandlers;
}
