class Group {
    constructor(x) {
        this.instance = [];
    }
    static from(iterableValue) {
        let group = new Group();
        for (let value of iterableValue) {
            group.instance.push(value);
        }
        return group;
    }
    add(value) {
        if (this.instance.includes(value))
            return this;
        this.instance.push(value);
        return this;
    }
    delete(value) {
        let index = this.instance.indexOf(value);
        this.instance.splice(index, 1);
        return this;
    }
    has(value) {
        return this.instance.includes(value);
    }
}

class IterableGroup {
    constructor(group) {
        this.group = group;
        this.instanceIndex = 0;
    }
    next() {
        if (this.instanceIndex === this.group.instance.length) {
            return { done: true }
        }

        let value = this.group.instance[this.instanceIndex];
        this.instanceIndex++;
        return { value, done: false };
    }
}


Group.prototype[Symbol.iterator] = function() {
    return new IterableGroup(this);
  };

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
  // → a
  // → b
  // → c