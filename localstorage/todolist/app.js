


let add = document.getElementById("add");
let id = 0;
let delet = document.querySelector(".delete")

add.addEventListener("click", () => {
   


    let input = document.getElementById("input").value;
    const data = JSON.stringify({ input })
    localStorage.setItem("input", data)
    
    let h1 = document.getElementById("h1")
    if (input !== "") {
        let newh1 = document.createElement("h1");
        let checkbox = document.createElement("input");
        delet.innerHTML = '🗑️';
        checkbox.type = "checkbox";
        newh1.textContent = `${++id} ${input}`;
        h1.appendChild(newh1);
        newh1.appendChild(checkbox);
        // checkbox her defe yaranir  duzdu
        newh1.appendChild(delet);
        // amma delet qutusu bir defe yanir eslinde duz iwliyir sadece niya anlamadim
        document.getElementById("input").value = ''
        // burda sualim var niya input.value='' iwlemir ama bele yazanda iwliyir

        delet.addEventListener("click", () => {
            if (checkbox.checked) {
                newh1.remove()
            }
        }
        )
    }
});