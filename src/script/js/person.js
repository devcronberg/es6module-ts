var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.NameToUpper = function () {
        return this.name.toUpperCase();
    };
    return Person;
}());
export { Person };
