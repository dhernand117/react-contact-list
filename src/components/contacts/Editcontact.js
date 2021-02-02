import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact, updateContact } from "../../actions/contactaction";
import { useHistory, useParams } from "react-router-dom";
//*Short Id is used to generate unique Id's automatically for our objects
//*Used cards and forms from bootstrap
//* importing hook setState to store the value inside our variables and then change the initial state
export const Editcontact = () => {
  //*Calling useSelector method to set the initial state
  const contact = useSelector((state) => state.contact.contact);
  //* Calling the method useParams we get access to the info living inside each index of our array
  let { id } = useParams();
  //*Using useState method to change the values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  let history = useHistory();
  //*adding the dispatch method to call the action from our store
  const dispatch = useDispatch();
  //*with our useEffect method we are using dispatch to apply our action using id from useParams
  //*useEffect will reload each time the app receives a new value and will check the condition inside
  useEffect(() => {
           if (contact != null) {
            setName(contact.name);
            setEmail(contact.email);
            setPhone(contact.phone);
            setWebsite(contact.website);
          }
    dispatch(getContact(id));
    //*passing a dependency of contact after the if else runs to fill our useState and that is different than null
  }, [contact]);

  const onUpdateContact = (e)=>{
      e.preventDefault();
      //*Object.assign() method will replace only the data that is supposed to be changed onClick
      const update_contact = Object.assign(contact,{
          name: name,
          phone: phone,
          email: email,
          website: website
      })
      dispatch(updateContact(update_contact));
      history.push("/");
    }



  return (
    <div>
      <div className="card border-3 shadow ">
        <div className="card-header">Edit Contact Information</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
          </form>
          <button
            onClick={(e) => onUpdateContact(e)}
            className="btn btn-outline-dark"
            type="submit">
            Save Contact
          </button>
          <button
            type="button"
            className="btn btn-outline-primary mx-3"
            onClick={() => history.push("../../")}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
