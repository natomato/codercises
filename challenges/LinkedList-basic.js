var Node = function (value) {
  this.value = value;
  this.next = null;
}

var LinkedList = function (node) {
  this.head = node;
  this.next = this.head;
  
  this.add = function (node) {
    var curr = this.head
    while (curr.next) {
      curr = curr.next
    }
    curr.next = node;
  }
  
  this.removeDuplicates = function () {
    var values = [this.head.value]
    var prev = this.head;
    var curr = this.head.next;
    while (curr) {
      console.log("prev" + prev.value)
      console.log("curr" + curr.value)
      if (values.indexOf(curr.value) !== -1) {
        prev.next = curr.next
      } else {
        values.push(curr.value)
        prev = curr;
      }
      curr = curr.next
    }
    return this;
  }
  
}


var n0 = new Node(0);
var n10 = new Node(10);
var n10b = new Node(10);
var n11 = new Node(11);

var ll = new LinkedList(n0) //
ll.add(n10)
ll.add(n10b)
ll.add(n11)
console.log(ll.next.value) //0
console.log(ll.next.next.value) //10
console.log(ll.next.next.next.value) //10
console.log(ll.next.next.next.next.value) //11

ll.removeDuplicates()
console.log(ll.next.value) //0
console.log(ll.next.next.value) //10
console.log(ll.next.next.next.value) //11
console.log(ll.next.next.next.next.value) //null