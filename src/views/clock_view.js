import Backbone from 'backbone';

const ClockView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;

    this.listenTo(params.bus, 'tick', this.render);
  },
  render() {
    // use the template
    const clockHTML = this.template({
      location: this.model.get('location'),
      time: this.model.time(),
    });

    // append the rendered template to the page
    this.$el.html(clockHTML);

    return this;
  },
});

export default ClockView;
