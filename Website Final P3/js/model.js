class Visitor {
    constructor(id, fName, lName, add, city, state, zip, phone, email, source) {
        this.id = id;
        this.fName = fName;
        this.lName = lName;
        this.address = add;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
        this.source = source
    }
    get fullName() {
        return this.fName + " " + this.lName;
    }
    get fullAddress() {
        return  this.address + " " + this.city  + " " + this.state  + " " + this.zip
    }
}

let visitors = []

function modelAddVisitor(visitor) {
    visitors.push(visitor)
};
function modelDeleteVisitor(id) {
    let target = findVisitorIndex(id);
        delete visitors[target];
};
function findVisitor(id) {
    for (var i in visitors) {
        if (i.id === id) {
            return visitors[i];
        };
    };
};
function findVisitorIndex(id) {
    for (var i in visitors) {
        if (visitors[i].id === id) {
            return i;
        };
    };
};
function modelUpdateVisitor(visitor) {
    var locate = findVisitorIndex(visitor.id);
    visitors.splice(locate, 1, visitor);
}