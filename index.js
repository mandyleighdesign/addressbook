class AddressBook {
    constructor(items) {
      this.items = items;
    }
    add(info) {
      this.items.push(info);
    }    
    deleteAt() {
      this.items.pop(list);
    }
    print() {
      console.log(list);
    }
  }

  class Contact {
    constructor (name, email, phone, rel) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.rel = rel;
    }
  }

  let list = new AddressBook ([
    new Contact ("Paul M", "thebeatles.com", "248-555-ROCK", "beatle man #1"), 
    new Contact ("Ringo S", "thebeatles.com","248-555-ROCK", "beatle man #2"),
    new Contact ("John L", "thebeatles.com", "248-555-ROCK", "beatle man #3"),
    new Contact ("George H", "thebeatles.com", "248-555-ROCK", "beatle man #4")
  ]);           

  while(true) {
    const response = prompt ("would you like to add, print, delete, a new contact or quit?");
      if (response === "quit" || response === null) {
      break;
    }

    if (response === "print") {
      list.print();
    }

    if (response === "add") {
      const name = prompt("what is the name of the contact you want to add?");
      const email = prompt("what is the email of your new contact?");
      const phone = prompt("what is the phone number of your new contact?");
      const rel = prompt("what is the relation of your new contact?");
      
      const info = new Contact(name, email, phone, rel);
      list.add(new Contact(name, email, phone, rel));
    }

    if (response === "delete") {
      list.deleteAt();
    }
  }
