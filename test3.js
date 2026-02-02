const lista = ["paine", "lapte", "mere", "oua", "carne", "condimente", "legume"];

document.addEventListener("DOMContentLoaded", () => {
    const cos = localStorage.getItem("cos");

    setTimeout(() => {
        intervalId = setInterval(() => {
            r = Math.floor(Math.random() * 7);
            p_ales = document.getElementById("produs");
            p_ales.innerText = lista[r];
            
            document.addEventListener("keyup", (e) => {
                tasta = e.key;

                if (!cos.includes(lista[r]){
                    cos.append(lista);
                    document.getElementById("cos").innerText += `${lista[r]}`;
                }
            });

        }, 5000);
        localStorage.setItem("cos", cos);
    }, 20000);


    document.addEventListener("keyup", (e) => {
        tasta = e.key;
        if (tasta === "enter"){
            cos = [];
            document.getElementById("cos").innerText = "";
        }
    });
    

});