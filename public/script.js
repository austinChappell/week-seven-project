let nav = document.querySelector('nav');
let stars = document.querySelectorAll('.star');
let userID = nav.getAttribute('data-user-id');

stars.forEach((star) => {
  star.addEventListener('click', () => {
    let snippetID = {
      userID,
      id: star.parentElement.parentElement.getAttribute('data-snippet-id')
    };

    if (star.classList.contains('fa-star-o')) {
      star.classList.remove('fa-star-o');
      star.classList.add('fa-star');
      changeFavStatus('/addfav', snippetID);
    } else if (star.classList.contains('fa-star')) {
      star.classList.remove('fa-star');
      star.classList.add('fa-star-o');
      changeFavStatus('/removefav', snippetID);
    }



  });
});

function changeFavStatus(url, id) {

  fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(id)

  }).then(() => {
    console.log('AFTER FETCH', id);
  });

};
