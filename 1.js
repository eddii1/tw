// creeam 6 butoane cu un for si map methinks
document.addEventListener("DOMContentLoaded", () => {
    let count = 6;
    let first = 0;

    for(let i = 1; i <= 6; i++){
        console.log(i);
        let buton = document.createElement("button");
        buton.id = String(i);
        buton.innerText = `Butonul ${i}`;
        buton.onclick = (e) => {
            e.stopPropagation();  
            turnred(i);
        }

        if (i % 2 == 1){
            buton.style.backgroundColor = "yellow";
            buton.style.color = "black";
        }else{
            buton.style.backgroundColor = "green";
            buton.style.color = "white";
        }

        document.body.appendChild(buton);
    }

    function turnred(id){
        const element = document.getElementById(id);
        const is_red = element.style.color === "red";

        if(is_red){
            document.body.removeChild(element);
            count= count-1;
        }
        else{
            prev = element.style.color;
            element.style.color = "red";
            setTimeout(() => {
                element.style.color = prev;
            }, 5000);
        }
    }

    document.addEventListener("click", () => {
        alert(count);
    })



    p = document.getElementById("info");
    let r_Size = localStorage.getItem("fontSize");
    if (r_Size){
        p.style.fontSize = r_Size;
    }
    document.addEventListener("keyup", (e) => {
        tasta = e.key;
        data = "dd";
        let r = 0;

        if (tasta === "a" && first === 0){
            first += 1;
            p.innerText+= " KDKDKDKKD";
            

            intervalid = setInterval(() => {
                r = Math.floor(Math.random() * 21)+ 10;
                console.log(r);

                p.style.fontSize = r + "px";

            }, 3000);

            
        }else if (tasta === "a" && first !== 0){
                p.innerText+= data;

                clearInterval(intervalid);
                localStorage.setItem("fontSize", r + "px");
        
            }

    });

});

/*

<!DOCTYPE html>
<html>
<head>
    <title>P4 - Word Sorter</title>
</head>
<body>
    <form id="myForm">
        <input type="text" id="words" placeholder="Enter words separated by space" required>
        
        <select id="sortType">
            <option value="alphabetic">Alphabetic</option>
            <option value="length">By Length</option>
        </select>
        
        <button type="submit">Submit</button>
    </form>
    
    <div id="result"></div>

    <script>
        document.getElementById("myForm").addEventListener("submit", async (e) => {
            e.preventDefault();
            
            const wordsInput = document.getElementById("words").value;
            const sortType = document.getElementById("sortType").value;
            const resultDiv = document.getElementById("result");
            
            // Validate: words must be separated by space and contain only a-z
            const words = wordsInput.split(" ");
            const isValid = words.every(word => /^[a-z]+$/.test(word) && word.length > 0);
            
            if (!isValid) {
                resultDiv.innerHTML = "<p style='color: red;'>Date invalide</p>";
                return;
            }
            
            // Sort locally
            let sorted = [...words];
            
            if (sortType === "alphabetic") {
                sorted.sort();
            } else {
                sorted.sort((a, b) => a.length - b.length);
            }
            
            // Display result
            resultDiv.innerHTML = `<p>${sorted.join(" ")}</p>`;
        });
    </script>
</body>
</html>

*/
