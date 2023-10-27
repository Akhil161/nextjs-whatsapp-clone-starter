export const Host = "http://localhost:3005";

const AUTH_ROUTE = `${Host}/api/auth`
const MESSAGE_ROUTE = `${Host}/api/messages`

export const CHECK_USER_ROUTE = `${AUTH_ROUTE}/check-user`;
export const ONbOARD_USER_ROUTE = `${AUTH_ROUTE}/onBoard-user`;
export const GET_ALL_CONTACTS = `${AUTH_ROUTE}/get-contacts`


export const ADD_MESSAGE_ROUTE = `${MESSAGE_ROUTE}/add-message`
export const GET_MESSAGES = `${MESSAGE_ROUTE}/get-messages`
export const ADD_IMAGE_MESSAGE_ROUTE = `${MESSAGE_ROUTE}/add-image-message`
export const ADD_AUDIO_MESSAGE_ROUTE = `${MESSAGE_ROUTE}/add-audio-message`
export const GET_INITIAL_CONTACTS_ROUTE = `${MESSAGE_ROUTE}/get-inital-contacts`
