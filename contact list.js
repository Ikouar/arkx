const prompt = require('prompt');
//prompt package, which allows us to prompt the user for input in the command-line interface.
let contacts = [];
// declares an empty array contacts to store the contacts entered by the user.
const menu = () => {
  // defines an arrow function named menu. This function represents the main menu of the application and will display options for the user to choose from.
  console.log('Menu:');
  //printf the menu header to the console
  console.log('1. Add a contact');
  //prints the option to add a contact to the console.
  console.log('2. View all contacts');
  //prints the option to view all contacts to the console.
  console.log('3. Search for a contact');
  //prints the option to search for a contact to the console.
  
  console.log('4. Exit');

  prompt.start();
  //enabling us to use it to get input from the user.
  prompt.get(['choice'], (err, result) => {
    // is called when the user provides input.
    if (err) {
      console.error('Error occurred while getting user choice:', err);
      return;
    }

    switch (result.choice) {
      case '1':
        addContact();
        break;
      case '2':
        viewContacts();
        break;
      case '3':
        searchContact();
        break;
      case '4':
        console.log('Exiting the application.');
        break;
      default:
        console.log('Invalid choice. Please try again.\n');
        menu();
    }
  });
};

const addContact = () => {
  prompt.start();
  prompt.get(['name', 'phoneNumber'], (err, result) => {
    if (err) {
      console.error('Error occurred while adding contact:', err);
      return;
    }

    contacts.push({ name: result.name, phoneNumber: result.phoneNumber });
    console.log('Contact added successfully!\n');
    menu();
  });
};

const viewContacts = () => {
  if (contacts.length === 0) {
    console.log('No contacts available.\n');
  } else {
    console.log('Contacts:\n');
    contacts.forEach(contact => {
      console.log(`Name: ${contact.name}, Phone: ${contact.phoneNumber}`);
    });
    console.log();
  }
  menu();
};

const searchContact = () => {
  prompt.start();
  prompt.get(['name'], (err, result) => {
    if (err) {
      console.error('Error occurred while searching contact:', err);
      return;
    }

    const foundContact = contacts.find(contact => contact.name.toLowerCase() === result.name.toLowerCase());
    if (foundContact) {
      console.log(`Contact found:\nName: ${foundContact.name}, Phone: ${foundContact.phoneNumber}\n`);
    } else {
      console.log('Contact not found.\n');
    }
    menu();
  });
};

console.log('Welcome to the Contact Manager\n');
menu();
