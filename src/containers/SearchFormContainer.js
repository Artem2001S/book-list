import { connect } from 'react-redux';
import SearchForm from 'components/SearchForm/SearchForm';
import { changeSearchFormValue } from 'redux/actions/actions';

const mapStateToProps = state => ({
  input: state.searchForm
});

const mapDispatchToProps = dispatch => ({
  onSearchInputChange: value => dispatch(changeSearchFormValue(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
