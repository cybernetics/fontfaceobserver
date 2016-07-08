goog.require('fontface.Observer');

/**
 * @define {boolean} DEBUG
 */
var DEBUG = true;

if (typeof module !== 'undefined') {
  module.exports = window['FontFaceObserver'];
} else {
  window['FontFaceObserver'] = fontface.Observer;
  window['FontFaceObserver']['prototype']['load'] = fontface.Observer.prototype.load;
}
