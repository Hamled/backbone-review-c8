import $ from 'jquery';
import _ from 'underscore';

import 'foundation-sites/dist/css/foundation.css';
import './style.css';

import WizardSchool from './collections/wizard_school';
import Wizard from './models/wizard';


// Starts undefined - we'll set this in $(document).ready
// once we know the template is available
let wizardTemplate;

const render = function render(wizardList) {
  wizardList.forEach((wizard) => {
    $('#wizards').append(`<li>${wizard.get('name')}</li>`);
  });
};

$(document).ready(() => {
  wizardTemplate = _.template($('#book-template').html());
  //
  // const example = {
  //   success: true,
  //   "not success": false,
  // };
  //
  // example.success == true;
  // example['success'] == true;
  // example['not success'] == false;

  const school = new WizardSchool();
  school.fetch({
    // success: function success() {
    //   // this is the success callback
    // },
    //
    // failure() {
    //   // failure callback
    // },
  });

  school.on('update', function() {
    render(school);
  });

  school.add({
    name: "Charles",
    house: "Hufflepuff"
  });


  Wizard.someClassFunction();
});
