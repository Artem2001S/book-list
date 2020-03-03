import { connect } from 'react-redux';
import SearchForm from 'components/SearchForm/SearchForm';
import { changeSearchFormValue } from 'redux/actions/actions';
import { handleFormSubmit } from 'utils/handleFormSubmit';

const mapStateToProps = state => ({
  input: state.searchForm
});

const mapDispatchToProps = dispatch => ({
  onSearchInputChange: value => dispatch(changeSearchFormValue(value)),
  handleFormSubmit
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
