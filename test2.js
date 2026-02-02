document.addEventListener("DOMContentLoaded", () => {
    const bilete= {
        randuri: 2, coloane: 3, locuri: [
            {rand: 1, loc: 1, stare: "liber"},
            {rand: 1, loc: 2, stare: "ocupat"},
            {rand: 1, loc: 3, stare: "liber"},
            {rand: 2, loc: 1, stare: "liber"},
            {rand: 2, loc: 2, stare: "liber"},
            {rand: 2, loc: 3, stare: "ocupat"}
        ]
    };

    const randuri = bilete.randuri;
    const coloane = bilete.coloane;
    let count = 0;

    console.log(randuri);
    const tabel = document.createElement("table");
    tabel.style.borderColor = "black";
 
    for(let i = 0; i < randuri; i++){
        for(let j = 0; j < coloane; j++){

            const td = document.createElement("td");
            td.id = string(i+j);

            td.onclick = (e) => {
                e.stopPropagation();  
                update_cell(i+j);
            }

            const rand = bilete.locuri[i+j].rand;
            const coloana = bilete.locuri[i+j].coloana;
            
            const liber = ((bilete.locuri[i+j].stare) === "liber");
            if (liber){
                td.classList.add("liber");
                count += 1;
            }else{
                td.classList.add("ocupat");
            }
            td.innerText = `R${rand}-L${coloana}`;
            tabel.appendChild(td);
        }
    }

    

    function update_cell(i){
        const celula = document.getElementById(i);
        const liber = celula.className === "liber";
        if (liber){
            count -= 1;
            celula.classList.remove("liber");
            celula.classList.add("ocupat");
        }else{
            alert("Locul este deja ocupat");
        }

    };

    document.addEventListener("click", () => {
        alert(count);
    })

});