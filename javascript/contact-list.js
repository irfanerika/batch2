var irfan = {
    nama: "Irfan",
    telepon: "08562370xxx",
    email: "irfan@gmail.com"
};

var erika = {
    nama: "Erika",
    telepon: "08562360xxx",
    email: "erika@gmail.com"
};

var contacts = [irfan, erika];

function printPerson(person) {
    console.log(person.nama  + " " + person.telepon +" "+ person.email);
}

function list() {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        printPerson(contacts[i]);
    }
}
function search(nama){
    var contactsLength = contacts.length;
    for(i=0;i<contactsLength;i++){
        if(this.nama=contacts[i].nama){
            printPerson(contacts[i]);
        }
    }
}
function add(nama,telepon,email){
contacts[contacts.length] = {
    nama: nama,
    telepon: telepon,
    email: email
  };
}
add("Ferdian","08562350xxx","ferdian@gmail.com");

search("Irfan");