import React from 'react';
//*Main functional component that will store our memeFactory component
export const MemeGenerator = () => {
    return (
      <div>
        <MemeFactory />
      </div>
    );
};

//* MemeFactory will be calling to an API and holding on to data
//* using a class component as a reminder of how they work vs functional components
class MemeFactory extends React.Component {
  constructor() {
    super();
    //*This will initialize our state with the following properties
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
    //*Binding the "this" keyword into our methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //*Using lyfecycle method componentDidMount() and is a hook that gets invoked right after a React component has been mounted aka after the first render()
  componentDidMount() {
    //* using fetch to pull our data from the respective API returning a promise
    fetch("https://api.imgflip.com/get_memes")
    //*The promise then will have to be translated into a JS object using a json method
      .then((response) => response.json())
    //*And the translated response will be pulling the array data and then saved into a constant
      .then((response) => {
        const { memes } = response.data;
    //*Making sure the data is being pulled from the API using a console.log
        console.log(memes);
    //*This new state will store that data into our empty array from our initial state
        this.setState({ allMemeImgs: memes });
      });
  }
//* Setting our on change function that will pass a parameter
  handleChange(event) {
    //*this function will update the name and value properties inside our targeted inputs
    const { name, value } = event.target;
    //*this new state will pull the information inside the inputs and store it as a new state
    this.setState({ [name]: value });
  }
//*This function will randomize the selection of information from our API call
  handleSubmit(event) {
    //*Using preventDefault so the page is not refreshed on submit
    event.preventDefault();
    //*Declaring a constant that will return a random number that represents a index inside the array length
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    //*Declaring a constant that will take that random number as an index and return that index with the url property
    const randMemeImg = this.state.allMemeImgs[randNum].url;
    //*This new state will be updating the randomImg property from our initial state and replacing that value with randMemeImg
    this.setState({ randomImg: randMemeImg });
  }
//* API fetch call will be rendered into a form with the following properties
  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button className="btn btn-outline-danger mx-3">NewMeme!!!</button>
          {/* This will render the new image every time the form is submitted */}
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          {/*This H2 will display the current state of the info inside our inputs */}
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}
