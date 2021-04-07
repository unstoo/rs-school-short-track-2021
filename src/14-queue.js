const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.nodesCount = 0;
  }

  get size() {
    return this.nodesCount;
  }

  enqueue(element) {
    if (!this.head) {
      this.head = new ListNode(element);
      this.tail = this.head;
      this.nodesCount = 1;
    } else {
      const node = new ListNode(element);
      this.tail.next = node;
      this.tail = node;
      this.nodesCount += 1;
    }
  }

  dequeue() {
    const node = this.head;
    this.head = this.head.next;
    this.nodesCount -= 1;
    return node.value;
  }
}

module.exports = Queue;
