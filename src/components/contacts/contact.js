import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAllContact, deleteAllContacts, selectAllContact } from "../../actions/contactaction";
import { Contacts } from "./contacts"

//*Using Bootstrap to pull a predetermined style for our form https://getbootstrap.com/docs/5.0/forms/overview/
export const Contact = () => {
  //*We use the method useSelector from redux to pass our state from our store.js into a variable named contacts
  //*also because our contacts are being compiled inside a rootReducer we need to go 1 level deeper to reach our object info to map
  const contacts = useSelector((state) => state.contact.contacts);
  //*this selector will check the state of our empty array selectedContacts
  const Selected_contacts = useSelector(
    (state) => state.contact.selectedContacts
  );
  //*log contacts to make sure the info is being pulled from store.js
  console.log(contacts);
  //*useState hook to select multiple objects from the contact list
  const [SelectAll, setSelectAll] = useState(false);
  //*adding the dispatch method to call the action from our store
  const dispatch = useDispatch();
  //*useEffect hook to use our dispatch and map all contacts by id and store the changes in our SelectAll dependency
  useEffect(() => {
    if (SelectAll) {
      dispatch(selectAllContact(contacts.map((contact) => contact.id)));
    } else if (!SelectAll) {
      dispatch(clearAllContact());
    }
    //*Adding our SelectAll dependency
  }, [SelectAll]);
  return (
    <div>
      {Selected_contacts.length > 0 ? (
        <button className="btn btn-outline-danger mb-3" onClick={()=>{
            dispatch(deleteAllContacts())
        }} >Delete All</button>
      ) : null}
      <table className="table shadow table-dark table-striped">
        <thead>
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input
                  id="selectAll"
                  type="radio"
                  className="custom-control-input"
                  value={SelectAll}
                  onClick={() => {
                    setSelectAll(!SelectAll);
                  }}
                />
                <label htmlFor="selectAll" className="custom-control-label" />
              </div>
              {/* Here we will determine the headers of the info we want to pull from our state in the store.js file */}
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Website</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* Maping from our contacts array we pull the information according to our headers to populate our table */}
          {contacts.map((contact) => {
            return (
              <Contacts
                contact={contact}
                key={contact.id}
                SelectAll={SelectAll}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
