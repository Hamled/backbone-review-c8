import Backbone from 'backbone';

const instanceOptions = {
  defaults: {
    name: 'Some Wizard',
    house: 'Hufflepuff'
  },

  someCustomFunction() {
    console.log("We're in the custom function!");
  },
};

const classOptions = {
  someClassFunction() {
    console.log("We're in the class function!");
  },
};

const Wizard = Backbone.Model.extend(instanceOptions, classOptions);


export default Wizard;
