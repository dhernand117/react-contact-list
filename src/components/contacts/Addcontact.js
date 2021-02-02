import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addContact } from '../../actions/contactaction';
import shortid from "shortid";
import { useHistory } from 'react-router-dom';
//*Short Id is used to generate unique Id's automatically for our objects
//*Used cards and forms from bootstrap
//* importing hook setState to store the value inside our variables and then change the initial state
export const Addcontact = () => {
    let history = useHistory();
    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [website, setWebsite] = useState("");

    //*adding the dispatch method to call the action from our store
    const dispatch = useDispatch();
    
//*we will use this as our callback function to prevent the page from reloading on submit
    function createContact (e) {
        e.preventDefault();
        console.log("name:", name);
        console.log("email:", email);
        console.log("phone:", phone);
        console.log("website:", website);
        //* Creating a newContact object that holds the information and passing it to the dispatch method to use our action addContact
        const newContact = {
            id: shortid.generate(),
            name: name,
            phone: phone,
            email: email,
            website: website
        }
        dispatch(addContact(newContact));
        //*Using addHistory method from router to take us back to the contact list after adding our information
        history.push("/");
    }

//*inside our form we set our onChange attribute to use our previously created states with the info inside our inputs onClick
    return (
      <div>
        <div className="card border-3 shadow ">
          <div className="card-header">Enter Contact Information</div>
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
              className="btn btn-outline-dark"
              type="submit"
              onClick={(e) => createContact(e)}>
              Add Contact
            </button>
            <button
              type="button"
              className="btn btn-outline-primary mx-3"
              onClick={() => history.push("../")}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
}
