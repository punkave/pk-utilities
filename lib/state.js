import classes from './classes';
import methods from './methods';

export default {
  open (data) {
    methods.addClass(data.trigger, classes.active);
    methods.addClass(data.viewport, classes.active);
    this.ariaExpanded(data);
  },
  close (data) {
    if (data.trigger && data.viewport) {
      methods.removeClass(data.trigger, classes.active);
      methods.removeClass(data.viewport, classes.active);
    } else if (data.trigger) {
      methods.removeClass(data.trigger, classes.active);
    } else if (data.viewport) {
      methods.removeClass(data.viewport, classes.active);
    }
    this.ariaHidden(data);
  },
  ariaHidden (data) {
    if (data.trigger && data.viewport) {
      data.trigger.setAttribute('aria-expanded', 'false');
      data.viewport.setAttribute('aria-hidden', 'true');
    } else if (data.trigger) {
      data.trigger.setAttribute('aria-expanded', 'false');
    } else if (data.viewport) {
      data.viewport.setAttribute('aria-hidden', 'true');
    }
  },
  ariaExpanded (data) {
    if (data.trigger && data.viewport) {
      data.trigger.setAttribute('aria-expanded', 'true');
      data.viewport.setAttribute('aria-hidden', 'false');
    } else if (data.trigger) {
      data.trigger.setAttribute('aria-expanded', 'false');
    } else if (data.viewport) {
      data.viewport.setAttribute('aria-hidden', 'false');
    }
  }
};
