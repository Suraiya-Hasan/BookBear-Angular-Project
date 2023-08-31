const BASE_URL = 'http://localhost:5000';

export const BOOKS_URL = BASE_URL + "/api/books";
export const BOOKS_TAGS_URL = BOOKS_URL + "/tags";
export const BOOKS_BY_SEARCH_URL = BOOKS_URL + "/search/";
export const BOOKS_BY_TAG_URL = BOOKS_URL + "/tag/";
export const BOOKS_BY_ID_URL = BOOKS_URL + "/";


export const USER_LOGIN_URL = BASE_URL + "/api/users/login";
export const USER_REGISTER_URL = BASE_URL + "/api/users/register";

export const ORDER_URL = BASE_URL + "/api/orders";
export const ORDER_CREATE_URL = ORDER_URL + "/create";
export const ORDER_NEW_FOR_CURRENT_USER_URL = ORDER_URL + "/newOrderForCurrentUser";
export const ORDER_PAY_URL = ORDER_URL + "/pay";