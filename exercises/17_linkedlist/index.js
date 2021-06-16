// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    // init executed
    this.data = data;
    this.next = next;
    // undefined = no properties
    // null = has been set to be null
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head); // avoid overwritting previous node
  }
}

module.exports = { Node, LinkedList };
