import Backbone from 'backbone';
import Wizard from '../models/wizard';

const WizardSchool = Backbone.Collection.extend({
  model: Wizard,
  url: 'http://hp-api.herokuapp.com/api/characters',
  parse(response) {
    response.forEach(function(wizardAttrs) {
      wizardAttrs.name = wizardAttrs.name.toUpperCase();
    });

    return response;
  },
});

export default WizardSchool;
