export function updateInputsArray(inputs, inputName, newValue) {
  return [
    ...inputs.map(inputData =>
      inputData.name === inputName
        ? { ...inputData, value: newValue }
        : { ...inputData }
    )
  ];
}

export function updateInputsArrayCompletely(inputs, data) {
  return inputs.map(input => {
    return { ...input, value: data[input.name] };
  });
}
