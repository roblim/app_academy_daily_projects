class DOMNodeCollection {
  constructor(htmlElements) {
    this.nodes = htmlElements;
  }

  html(content) {
    if (content) {
      this.nodes.forEach(function(node) {node.innerHTML = content;});
    } else {
      return this.nodes[0].innerHTML;
    }
  }

  empty() {
    this.nodes.forEach(function(node) {
      let childrenCol = new DOMNodeCollection(Array.from(node.children));
      childrenCol.nodes.forEach(function(cNode) {cNode.remove();});
    });
  }

  append(something) {
    if (something.constructor.name === 'DOMNodeCollection') {
      this.nodes.forEach(function(node) {
        something.nodes.forEach(function(sNode) {
          node.append(sNode);
        });
      });
    } else if (something.constructor.name === 'String') {
      this.nodes.forEach(function(node) {
        return node.append(something);
      });
    } else if (something instanceof(HTMLElement)) {
      this.nodes.forEach(function(node) {
        node.append(something);
      });}
  }



}



module.exports = DOMNodeCollection;
