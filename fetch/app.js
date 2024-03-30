const url = "http://localhost:3000/clothes";
const card = document.querySelector(".cards");


const writeData = async () => {
    try {
        const { data } = await axios(url);
        data.forEach((element) => {
            card.innerHTML += `
            <div class="card" style="width: 18rem;">
  <img src="${element.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${element.name}</h5>
    <p class="card-text">${element.description}</p>
    <a href="#" class="btn btn-primary">${element.price}</a>
  </div>
</div>
            `;
        });
    } catch (error) {
        console.log('eror:');
    }
}

writeData();









// fetch ile 

/*
const writeData = () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                card.innerHTML += `
            <div>
                <h1>${element.name}</h1>
                <img src="${element.image}" alt="">
                <p>${element.description}</p>
            </div>
        `;

            })
        }).catch(error => console.log("error"))
}
writeData()



// axios then 

const writeData = () => {
    axios.get(url)
        .then(response => {
   const data=response.data
            data.forEach(element => {
                card.innerHTML += `
            <div>
                <h1>${element.name}</h1>
                <img src="${element.image}" alt="">
                <p>${element.description}</p>
            </div>
        `;

            })
        }).catch(error => console.log("error"))
}
writeData()

*/