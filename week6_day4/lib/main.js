const DOMNodeCollection = require('./dom_node_collection.js');

window.$l = function(selector) {
  if (selector instanceof(HTMLElement)) {
    return new DOMNodeCollection([selector]);
  }
  let nodes = Array.from(document.querySelectorAll(selector));
  return new DOMNodeCollection(nodes);
};
