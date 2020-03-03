export function updateInputsArray(inputs, inputName, newValue) {
  return [
    ...inputs.map(inputData =>
      inputData.name === inputName
        ? { ...inputData, value: newValue }
        : { ...inputData }
    )
  ];
}
