


// Adding new contact.
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  console.log('submit attempt');
    e.preventDefault();
    const name = document.querySelector('#title').value;
    const phone = document.querySelector('#numbers').value;
    const newContact = {
        name,
        phone,
    };
    db.collection('contacts').add(newContact);
    console.log(newContact);
    form.reset();
});