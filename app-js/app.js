// global (scope)variable (start)
const error = document.getElementById('error-message');
const searchInput = document.getElementById('inputField');
const container = document.getElementById('container');



// add event handeler by anonymous function (start)
const button = () => {
  const search = searchInput.value;

  // clear search inputfield
  searchInput.value = '';

  // clear container 
  container.textContent = "";

  // error massage function (start)
  if (search === '') {
    error.classList.add("p-2")
    error.innerText = 'Search field can not be empty !!';
    return;
  }

  // api link of book archive  
  const url = (`https://openlibrary.org/search.json?q=${search}`)

  // load data
  fetch(url)
    .then(res => res.json())
    .then(data => showData(data.docs))

  // clear search value
  search.value = "";
}



//show data 
const showData = data => {

  // clear previous search value
  container.textContent = "";
  error.innerText = "";

  // error massage function (start)
  if (data.length === 0) {
    error.innerText = 'Sorry book not found -_-';
    return;
  }

  // show data in ui
  data.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = ` 
          <div class="card h-100">
          <div class="w-75 mx-auto h-75">
              <img  src=https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg class="card-img-top" alt="...">
            </div>
                  <div class="card-body">
                      <h5 class="card-title">Book Name: <span class="text-success"> 
                      ${item.title}</span></h5>
                      <h5 class="card-title">Author Name: <span class="text-info"> 
                      ${item.author_name} </span></h5>
                      <h5 class="card-title">Publisher: <span class="text-secondary"> ${item.publisher}</span></h5>
                      <h5 class="card-title">First Published Year:<span class="text-primary"> ${item.first_publish_year} </span></h5>
                  </div>
          </div>
    `;
    container.appendChild(div);

  })
}

