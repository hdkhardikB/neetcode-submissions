class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    public userArray: number[]
    public maxCapacity: number
    public size: number
    constructor(capacity: number) {
        this.maxCapacity = capacity;
        this.userArray = new Array(capacity);
        this.size = 0;
    }

    /**
     * @param {number} i
     * @returns {number} 
     */
    get(i: number): number {
        return this.userArray[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        if (i < 0) throw new Error('Invalid index');
        this.userArray[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if (this.size === this.maxCapacity) {
            this.resize();
        }
        this.userArray[this.size] = n;
        this.size++;
    }

    /**
     * @returns {number}
     */
    popback(): number {
        this.size--;
        return this.userArray[this.size];
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.maxCapacity *= 2;
        const newArray = new Array(this.maxCapacity);
        for (let i = 0; i < this.size; i++) {
            newArray[i] = this.userArray[i];
        }
        this.userArray = newArray;
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.maxCapacity;
    }
}