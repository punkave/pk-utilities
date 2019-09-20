
export default {
  addClass (el, className) {
    if (el.classList) {
      el.classList.add(className);
    } else {
      el.className += ' ' + className;
    }
  },
  removeClass (el, className) {
    if (el.classList) {
      el.classList.remove(className);
    } else {
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  },
  toggleClass (el, className) {
    if (el.classList) {
      el.classList.toggle(className);
    } else {
      let classes = el.className.split(' ');
      const existingIndex = classes.indexOf(className);
      if (existingIndex >= 0) {
        classes.splice(existingIndex, 1);
      } else {
        classes.push(className);
        el.className = classes.join(' ');
      }
    }
  },
  closest (el, selector) {
    if (el.closest) {
      return el.closest(selector);
    }
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector;
    }
    Element.prototype.closest = function (s) {
      let el = this;
      if (!document.documentElement.contains(el)) return null;
      do {
        if (el.matches(s)) {
          return el;
        }
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    };
    return el.closest(selector);
  }
};
