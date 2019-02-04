import classes from './classes';
import helpers from './helpers';

export default {
  open (data) {
    helpers.addClass(data.trigger, classes.active);
    helpers.addClass(data.viewport, classes.active);
    this.ariaExpanded(data);
  },
  close (data) {
    if (data.trigger && data.viewport) {
      helpers.removeClass(data.trigger, classes.active);
      helpers.removeClass(data.viewport, classes.active);
    } else if (data.trigger) {
      helpers.removeClass(data.trigger, classes.active);
    } else if (data.viewport) {
      helpers.removeClass(data.viewport, classes.active);
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
