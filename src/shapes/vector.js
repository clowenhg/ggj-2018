export default class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(vec) {
        return new Vector(this.x + vec.x, this.y + vec.y);
    }

    compareDistance(vec) {
        let dx = this.x - vec.x;
        let dy = this.y - vec.y;

        return dx * dx + dy * dy;
    }

    difference(vec) {
        return new Vector(this.x - vec.x, this.y - vec.y);
    }

    distance(vec) {
        return this.difference(vec).length;
    }

    dot(vec) {
        return this.x * vec.x + this.y * vec.y;
    }

    multiply(scalar) {
        return new Vector(this.x * scalar, this.y * scalar);
    }

    subtract(vec) {
        this.x -= vec.x;
        this.y -= vec.y;
    }

    get normal() {
        return new Vector(this.y, -this.x).normalized;
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    get negative() {
        return new Vector(-this.x, -this.y);
    }

    get normalized() {
        let x = (this.x / this.length)
        let y = (this.y / this.length)
        return new Vector(x, y);
    }
}