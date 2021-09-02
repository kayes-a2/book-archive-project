document.getElementById('button').addEventListener('click', function () {
  const search = document.getElementById('inputField').value;


  const url = (`http://openlibrary.org/search.json?q=${search}`)
  fetch(url)
    // console.log(url)
    .then(res => res.json())
    .then(data => showData(data.docs));


})

const showData = (data) => {
  const container = document.getElementById('container')
  data.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = ` 
          <div class="card h-100">
          <div class="w-75 mx-auto h-75">
              <img  src=https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg class="card-img-top" alt="...">
            </div>
                  <div class="card-body">
                      <h5 class="card-title">Book Name: ${item.title}</h5>
                      <h5 class="card-title">Author Name: ${item.author_name}</h5>
                      <h5 class="card-title">Publisher: ${item.publisher}</h5>
                      <h5 class="card-title">First Published Year: ${item.first_publish_year}</h5>
                  </div>
          </div>
    `;
    container.appendChild(div);

  })
}
const container = document.getElementById('div');

