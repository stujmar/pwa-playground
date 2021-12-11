


// Adding new contact.
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  console.log('submit attempt');
    e.preventDefault();
    const name = document.querySelector('#title').value;
    const phone = document.querySelector('#numbers').value;
    // const name = document.querySelector('#name').value;
    // const phone = document.querySelector('#phone').value;
    // const email = document.querySelector('#email').value;
    // const address = document.querySelector('#address').value;
    const newContact = {
        name,
        phone,
        // email,
        // address
    };
    db.collection('contacts').add(newContact);
    console.log(newContact);
    form.reset();
});