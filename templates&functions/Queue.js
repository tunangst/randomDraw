// class Node {
// 	constructor(val) {
// 		this.val = val;
// 		this.next = null;
// 	}
// }
// class Queue {
// 	constructor() {
// 		this.first = null;
// 		this.last = null;
// 		this.inLine = 0;
// 	}
// 	//add from last, remove from first
// 	enqueue(value) {
// 		//push
// 		let newNode = new Node(value);
// 		if (this.inLine === 0) {
// 			this.first = newNode;
// 			this.last = newNode;
// 		} else {
// 			this.last.next = newNode;
// 			this.last = newNode;
// 		}
// 		this.inLine++;
// 		return this.inLine;
// 	}
// 	dequeue() {
// 		//shift
// 		if (this.inLine === 0) return `there are no Nodes in queue`;

// 		let leader = this.first;
// 		if (this.inLine === 1) this.last = null;
// 		this.first = this.first.next;

// 		this.inLine--;
// 		leader.next = null;
// 		return leader;
// 	}
// }

// export default Queue;
