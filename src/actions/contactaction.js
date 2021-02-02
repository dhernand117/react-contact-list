
import {CREATE_CONTACT, GET_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, SELECT_CONTACT, CLEAR_CONTACT, DELETE_ALL} from "../constants/types"
//*payload action to create our contact from the input info inside our form
export const addContact = (contact) => ({
    type:CREATE_CONTACT,
    payload: contact
})
//*We will be passing the id of each item every time useDispatch gets called in our editcontact.js
export const getContact = (id) => ({
    type: GET_CONTACT,
    payload:id
})
//*This action will modify the contact information
export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});
//*This action will delete the contact(s)
export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});
//*This action will check all contacts at once 
export const selectAllContact = (id) => ({
    type: SELECT_CONTACT ,
    payload: id
})
//*This action will unselect the contacts 
export const clearAllContact = () => ({
    type: CLEAR_CONTACT,
})
//*This action will delete all selected contacts
export const deleteAllContacts = () => ({
    type: DELETE_ALL,
})
