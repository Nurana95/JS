const url = "http://localhost:3000/cars/";
const cars = document.querySelector(".car");
const add = document.querySelector(".add");
const _open = document.querySelector(".open");
const __open = document.querySelector("._open");
const main = document.querySelector(".main");

const login = document.querySelector(".login");
const logoName = document.querySelector(".logoName");

login.addEventListener("click", (e) => {
    _open.style.display = "block";
    e.preventDefault();
});



const writeData = async () => {
   
    try {
        const { data } = await axios(url);
        data.forEach(({ id, name, price, mileage, image }) => {
            cars.innerHTML += `
                <div class="col">
                    <img src="${image}" alt="">
                    <h2>${name}  <span class="btn bg-success" onclick="changeCarInfo('${id}')"> </span></h2> 
                    <p>Пробег: ${mileage} <span class="btn bg-success" onclick="changeMileage('${id}')"></span></p>
                    <p>Цена: ${price}  <span class="btn bg-success" onclick="changePrice('${id}')"></span></p>
                    <button class="btn bg-danger" onclick="delet('${id}')">Удалить</button>
                </div>
            `;
            
        });
       
    } catch (error) {
        console.log('Ошибка:', error);
    }


}
__open.addEventListener("click", (e) => {
    e.preventDefault();
    const ad = document.querySelector(".ad").value;
    const soyad = document.querySelector(".soyad").value;
    logoName.textContent = `${ad} ${soyad}`;
    _open.style.display = "none";
    main.style.display = "block"

});
writeData();
/// patch 
const changeCarInfo = async (id) => {
    try {
        const { data } = await axios.get(url + id);
        const _name = prompt('Введите новое название машины', data.name);

        if (_name) {
            await axios.patch(url + id, { name: _name });
            location.reload();
        }
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

const changeMileage = async (id) => {
    try {
        const { data } = await axios.get(url + id);
        const _mileage = prompt('Введите пробег', data.mileage);

        if (_mileage) {
            await axios.patch(url + id, { mileage: _mileage });
            location.reload();
        }
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

const changePrice = async (id) => {
    try {
        const { data } = await axios.get(url + id);
        const _price = prompt('Введите новую цену', data.price);

        if (_price) {
            await axios.patch(url + id, { price: _price });
            location.reload();
        }
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

////ADD
add.addEventListener("click", async (e) => {
    e.preventDefault();
    const name = document.querySelector(".marka").value;
    const mileage = document.querySelector(".probeq").value;
    const price = document.querySelector(".price").value;

    const newUser = { name, mileage, price };

    if (name && mileage && price) {
        axios.post(url, newUser).then((res) => {
            if (res.statusText === "Created") {
                location.reload();
            }
        });
    } else {
        alert("Заполните все поля");
    }
});

// delete
const delet = async (id) => {
    try {
        const { data } = await axios.delete(url + id);
        console.log('silindi', data);
        location.reload();
    } catch (error) {
        console.error('Ошибка:', error);
    }
}
