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
  //
  constructor(head = null) {
    this.head = null;
  }
  //
  insertFirst(data) {
    this.head = new Node(data, this.head); // avoid overwritting previous node - it will append the new array
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }
  //
  getFirst() {
    return this.head;
  }
  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }
  //
  getAt(index) {
    // Can be deleted
    if (!this.head) {
      return null;
    }

    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    // Index was not found
    return null;
  }
  //
  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }
  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }
  //
  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }
  //
  insertLast(data) {
    const last = this.getLast();

    if (last) {
      //
      last.next = new Node(data);
    } else {
      //
      this.head = new Node(data);
    }
  }
  //
  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  // forEach
  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }
  // Generator loop
  *[Symbol.iterator]() {
    let node = this.head;

    while (node) {
      yield node;
      node = node.next;
    }
  }

  // Clear thhe data stored in node
  clear() {
    this.head = null;
  }
}

module.exports = { Node, LinkedList };
