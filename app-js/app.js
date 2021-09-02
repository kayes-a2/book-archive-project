// add event handeler by anonymous function
const error = document.getElementById('error-message');
const searchInput = document.getElementById('inputField');
const container = document.getElementById('container')



document.getElementById('button').addEventListener('click', function () {
  const search = searchInput.value;
  // clear search inputfield
  searchInput.value = '';

  container.textContent = "";
  if (search === '') {
    error.classList.add("p-2")
    error.innerText = 'Search field can not be empty';
    return
  }


  // api link (load data) of book archive  
  const url = (`https://openlibrary.org/search.json?q=${search}`)


  // get api data by fetch
  fetch(url)
    .then(res => res.json())
    .then(data => showData(data.docs))

  search.value = "";

})

//show api data with arrow function
const showData = data => {

  // clear previous search value
  container.textContent = "";
  error.innerText = "";

  if (data.length === 0) {
    error.innerText = 'Book not found';
    return;
  }

  data.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = ` 
          <div class="card h-100">
          <div class="w-75 mx-auto h-75">
              <img  src=https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg class="card-img-top" alt="...">
            </div>
                  <div class="card-body">
                      <h5 class="card-title">Book Name:<span class='danger'>  ${item.title}</span></h5>
                      <h5 class="card-title">Author Name: ${item.author_name}</h5>
                      <h5 class="card-title">Publisher: ${item.publisher}</h5>
                      <h5 class="card-title">First Published Year: ${item.first_publish_year}</h5>
                  </div>
          </div>
    `;
    container.appendChild(div);

  })
}

