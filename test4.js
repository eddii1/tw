document.getElementById("form").addEventListener("submit", async (e) => {
            e.preventDefault();
            
            const Litera = document.getElementById("litera").value;
            const Lungime = document.getElementById("lungime").value;
            
            const file = "server/denumire_fisier_json.json";

            async function filtreaza(file){
                let x = await fetch(file);
                let y = await JSON.parse(x.text());
                cuv = y.cuvinte;
                lun = len(cuv);
                if (Lungime){
                    for(let i = 0; i < lun; i++){
                        if(len(cuv[i]) === Lungime)
                            console.log(cuv[i]);
                    }
                } else if(Litera){
                    for(let i = 0; i < lun; i++)
                        if(cuv[i].includes(string(Litera)))
                            console.log(cuv[i]);
                } else{
                    console.log("Nu exista cuvinte");
                }

            }
        });