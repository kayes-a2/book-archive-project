document.getElementById('button').addEventListener('click', function () {
    const search = document.getElementById('inputField').value;

    const url = (`http://openlibrary.org/search.json?q=${search}`)
    fetch(url)
        // console.log(url)
        .then(res => res.json())
        .then(data => showData(data.docs));


})

const showData = (data) => {

    data.map(item => {

        const div = document.createElement('div');
        div.classList.add("col-lg-3")

        div.innerHTML =
            `
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Book Name: ${item.title}</h5>
              <h5 class="card-title">Author Name: ${item.author_name}</h5>
              <h5 class="card-title">Publisher: ${item.publisher}</h5>
              <h5 class="card-title">Publisher: ${item.first_publish_year}</h5>
            </div>
            

          </div>
        `;
        container.appendChild(div);
    })
}
const container = document.getElementById('div');
