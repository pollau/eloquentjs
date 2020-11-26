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


// let gr = new Group();
// gr.add(121);
// gr.add('str');
// gr.add('str');
// gr.add('str2');
// gr.add('1122');
// gr.add('s477tr');
// gr.delete('str');

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false