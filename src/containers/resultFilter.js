import { connect } from 'react-redux';
import UserGrid from './userGrid';

const getResultOfUser = (users, searchFilter) => {
  switch (searchFilter.active) {
    case false:
      return users
    case true:
      return users.filter(t => t.name.includes(searchFilter.phrase) || t.nickname.includes(searchFilter.phrase))
	default:
      return users
  }
}

const mapStateToProps = state => ({
  users: getResultOfUser(state.users, state.searchFilter)
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserGrid)
