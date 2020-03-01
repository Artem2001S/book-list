import { connect } from 'react-redux';
import BookControl from 'components/BookControl/BookControl';

const addValuesToInputs = (inputs, data) => {
  return inputs.map(input => ({
    ...input,
    value: data[input.name]
  }));
};

const mapStateToProps = (state, props) => {
  const book = state.books[props.index - 1];

  return {
    bookData: book,
    inputs: addValuesToInputs(state.bookControlForm, book)
  };
};

export default connect(mapStateToProps)(BookControl);
