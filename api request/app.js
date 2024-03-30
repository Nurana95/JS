
const url = "https://dummyjson.com/products";
const div = document.querySelector(".cards");
const btn = document.querySelector(".btn");




const sorgu = new XMLHttpRequest();
sorgu.open("GET", url);

sorgu.onreadystatechange = function () {

    if (sorgu.readyState === 4) {
        try {
            const data = JSON.parse(sorgu.response);
            let products = data.products;
            products.forEach(element => {
                div.innerHTML += `
                        <div class="card" style="width: 18rem;">
                            <img src="${element.thumbnail}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${element.title}</h5>
                                <p class="card-text">${element.description}</p>
                                <a href="#" class="btn btn-primary">${element.price}</a>
                            </div>
                        </div>`;
            });

        } catch (error) {
            console.log("error ");
        }
    }
};
sorgu.send();

