export function validateInputs(inputs) {
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];

    if (!input.value.trim()) {
      return `Enter blank field: ${input.label}`;
    }
  }

  return '';
}
