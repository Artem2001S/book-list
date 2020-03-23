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

const mergeProps = (stateProps, dispatchProps) => {
  return {
    ...stateProps,
    ...dispatchProps,
    handleSearchInputChange: (history, e) => {
      dispatchProps.onSearchInputChange(e.target.value);

      if (e.target.value.trim()) {
        history.push(`?search=${e.target.value}`);
      } else {
        history.push('/');
      }
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(SearchForm);
