//api requests statuses
export enum status {
  PENDING = 'PENDING',
  RESOLVED = 'RESOLVED',
  REJECTED = 'REJECTED',
}

export enum panelModalScreenNames {
  SIGN_UP = 'signUp',
  SIGN_IN = 'signIn',
  RESET_PASSWORD = 'resetPassword',
}

export enum listModalScreenNames {
  ADD_LIST = 'addList',
  EXPANDED_LIST = 'expanded_list',
  ADD_BOOK = 'addBook',
}

export enum userListsCollections {
  USERS_LISTS = 'users_lists',
  USERS_BOOKS = 'users_books',
}
