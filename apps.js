const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;

  if (username.length >= 5) {
    alert('Username validation passed!');
  } else {
    alert('Username must be at least 5 characters long.');
  }
});

// ================================================

  // const button = document.getElementById('toggleButton');
  // const hiddenDiv = document.getElementById('hiddenDiv');

  // button.addEventListener('click', function() {
  //   if (hiddenDiv.style.display === 'none') {
  //     hiddenDiv.style.display = 'block';
  //   } else {
  //     hiddenDiv.style.display = 'none';
  //   }
  // });