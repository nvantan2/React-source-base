const CookieKey = {
  accessToken: 'accessToken',
  currentRoles: 'CurrentRoles',
  previousUrl: 'previousUrl',
  networkError: 'networkError',
};

const USER_TYPE = {
  EDITOR: 'EDITOR',
  ADMIN: 'ADMIN',
  VIEWER: 'VIEWER',
};

const PER_PAGE = 30;

const LIST_PER_PAGE = [
  { value: 5, label: '5' },
  { value: 10, label: '10' },
  { value: 15, label: '15' },
];

export { CookieKey, USER_TYPE, PER_PAGE, LIST_PER_PAGE };
