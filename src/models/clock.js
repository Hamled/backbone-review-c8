import Backbone from 'backbone';

const Clock = Backbone.Model.extend({
  defaults: {
    location: 'New York City',
    tzOffset: -5,
  },

  time() {
    // calculate the time for this clock
    const now = new Date();
    const minutes = now.getUTCMinutes();
    const seconds = now.getUTCSeconds();
    const hours = (now.getUTCHours() + this.get('tzOffset'));

    return `${hours}:${minutes}:${seconds}`;
  }
});

export default Clock;
