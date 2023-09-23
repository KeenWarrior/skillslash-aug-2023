class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  insertLast(value) {
    if (this.head === null) {
      this.insertFirst(value);
      return;
    }

    // temp should go to last node
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }

    const node = new Node(value);
    temp.next = node;
  }

  #nodeAt(index) {
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      if (temp === null) {
        throw new Error("Index out of bounds for index: " + index);
      }
      temp = temp.next;
    }
    return temp;
  }

  valueAt(index) {
    return this.#nodeAt(index).value;
  }

  insertAt(value, index) {
    if (index === 0) {
      this.insertFirst(value);
      return;
    }

    const prev = this.#nodeAt(index - 1);
    const node = new Node(value);
    node.next = prev.next;
    prev.next = node;
  }

  print() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  reverse() {
    let present = this.head;
    let prev = null;

    while (present !== null) {
      const temp = present.next;
      present.next = prev;

      prev = present;
      present = temp;
    }

    this.head = prev;
  }

  #concatenate(head1, tail1, head2, tail2) {
    if (head1 === null) {
      return [head2, tail2];
    }
    tail1.next = head2;
    return [head1, tail2];
  }

//   kReverse(k) {
//     let resultList = null;

//     let present = this.head;
//     while (present !== null) {
//       let head = present;
//       let prev = null;
//       let count = 0;
//       while (count < k && present !== null) {
//         const temp = present.next;
//         present.next = prev;

//         prev = present;
//         present = temp;
//         count++;
//       }
//       head = prev;
//       resultList = this.#concatenate(resultList, head);
//     }
//     this.head = resultList;
//   }

  reverseEvenGroups() {

    let size = 0;

    let node = this.head;
    while (node !== null) {
        size++;
        node = node.next;
    }
    
    let k = 1;
    let [result_head, result_tail] = [null, null];
    let present = this.head;
    while (present !== null) {

        if(k > size){
             k = size;
        }


        if (k % 2 === 0) {
            let head = present;
            let tail = present;
            let prev = null;
            let count = 0;
            while (count < k && present !== null) {
              const temp = present.next;
              present.next = prev;
      
              prev = present;
              present = temp;
              count++;
            }
            head = prev;
            [result_head, result_tail] = this.#concatenate(result_head, result_tail, head, tail);
        } else {
            let head = present;
            let prev = null;
            let count = 0;
            while (count < k && present !== null) {
                prev = present;
              present = present.next;
              count++;
            }
            prev.next = null;
            const tail = prev;
            [result_head, result_tail] = this.#concatenate(result_head, result_tail, head, tail);
        }

        size = size - k;
        k++;
    }
    this.head = result_head;
  };
}



const list = new LinkedList();

list.insertLast(1);
list.insertLast(1);
list.insertLast(0);
list.insertLast(6);
list.insertLast(5);
list.reverseEvenGroups();

list.print();
