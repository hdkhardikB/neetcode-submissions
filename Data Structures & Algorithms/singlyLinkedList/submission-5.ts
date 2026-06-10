class LinkNode {
    public value
    public next
    constructor(val) {
        this.value = val;
        this.next = null
    }
}
class LinkedList {
    private head;
    private tail;
    private length;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        if (index < 0 || index >= this.length) return -1;
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode.value;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        const newNode = new LinkNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        const newNode = new LinkNode(val);
        if (!this.tail) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index: number): boolean {
        if (index < 0 || index >= this.length) return false
        if (index === 0) {
            this.head = this.head.next;
            if (!this.head) {
                this.tail = null
            }
            this.length--;
            return true
        }
        let previousNode = this.head;
        for (let i = 0; i < index - 1; i++) {
            previousNode = previousNode.next;
        }
        const nodeToDelete = previousNode.next;
        previousNode.next = nodeToDelete.next;
        if (nodeToDelete === this.tail) {
            this.tail = previousNode;
        }

        this.length--;
        return true

    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        const listValues: number[] = [];
        let currentNode = this.head;
        while (currentNode) {
            listValues.push(currentNode.value)
            currentNode = currentNode.next;
        }
        return listValues;
    }
}
