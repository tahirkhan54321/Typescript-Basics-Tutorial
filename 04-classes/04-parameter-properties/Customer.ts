class Customer {

    //new constructor convention, same as previous longer version
    constructor(private _firstName: string, private _lastName: string) {
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }
    
    public set lastName(value: string) {
        this._lastName = value;
    }

}

//create an instance
let myCustomer = new Customer("Martin", "Dixon");

// myCustomer.firstName = "Martin";
// myCustomer.lastName = "Dixon";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);