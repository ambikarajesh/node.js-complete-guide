const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
class Contact {
    constructor(dataFile){
        this.dataFile = dataFile;
    }
    async fetchContacts(){
        const contacts = await readFile(this.dataFile, 'utf-8');
        if(!contacts){
            return [];
        }
        return JSON.parse(contacts);
    }
    async storeContact(contact){
        const contacts = await this.fetchContacts();
        contacts.push(contact);
        return await writeFile(this.dataFile, JSON.stringify(contacts));
    }
}

module.exports = Contact;