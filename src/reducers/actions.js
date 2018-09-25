let nextUserId = 1;

export const ADD_USER = 'ADD_USER';
export const MODIFY_USER = 'MODIFY_USER';
export const DELETE_USER = 'DELETE_USER';

export const ACTIVE_SEARCH = 'ACTIVE_SEARCH';
export const DEACTIVE_SEARCH = 'DEACTIVE_SEARCH';

export const addUser = user => ({
  type: 'ADD_USER',
  id: nextUserId++,
  name: user.name,
  nickname: user.nickname,
  sex: user.sex
})

export const modifyUser = user => ({
  type: 'MODIFY_USER',
  name: user.name,
  nickname: user.nickname,
  sex: user.sex,
  id: user.id
})

export const deleteUser = userId => ({
  type: 'DELETE_USER',
  id: userId
})

export const activeSearch = phrase => ({
  type: 'ACTIVE_SEARCH',
  phrase: phrase
})

export const deactiveSearch = () => ({
  type: 'DEACTIVE_SEARCH',
  phrase: ''
})
