import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import 'foundation-sites/dist/css/foundation.css';
import './style.css';

import Clock from './models/clock';
import ClockView from './views/clock_view';

$(document).ready(() => {
  const clockTemplate = _.template($('#clock-template').html());

  const bus = _.extend({}, Backbone.Events);

  const clockNYC = new Clock({
    location: 'New York City',
    tzOffset: -5,
  });

  const clockMoscow = new Clock({
    location: 'Moscow',
    tzOffset: +3,
  });

  const clockTokyo = new Clock({
    location: 'Tokyo',
    tzOffset: +9,
  });

  const clocks = [clockNYC, clockMoscow, clockTokyo];
  clocks.forEach((clock) => {
    const clockView = new ClockView({
      template: clockTemplate,
      model: clock,
      bus: bus,
    });

    clockView.render();
    $('main').append(clockView.$el);
  });

  setInterval(() => {
    bus.trigger('tick', {hello: "world"});
  }, 1000);
});
