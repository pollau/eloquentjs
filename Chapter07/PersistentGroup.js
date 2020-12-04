class PGroup {
    static get empty() {
        let group = new PGroup();
        group.instance = [];
        return group;
    }
    static from(iterableValue) {
        let group = new PGroup();
        group.instance = [];
        for (let value of iterableValue) {
            group.instance.push(value);
        }
        return group;
    }
    add(value) {
        if (this.instance.includes(value))
            return this;

        let newGroup = PGroup.from(this.instance);
        if (newGroup.instance === undefined) {
            newGroup = PGroup.empty;
        }
        newGroup.instance.push(value);
        return newGroup;
    }
    delete(value) {
        if (!this.instance.includes(value))
            return this;

        let newGroup = PGroup.from(this.instance);
        if (newGroup.instance === undefined) {
            newGroup = PGroup.empty;
        }
        let index = newGroup.instance.indexOf(value);
        newGroup.instance.splice(index, 1);
        return newGroup;
    }
    has(value) {
        return this.instance.includes(value);
    }
}

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
