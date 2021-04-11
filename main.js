fetch("main.json")
.then(function(resp){
    return resp.json();
})
.then (function (data){
    appendData(data);
});

function appendData(data) {
    let main = document.getElementById("myData");
    for (let i = 0; i < data.length; i++){
        let div = document.createElement("div");
        div.innerHTML =
        `Product Name: ${data[i].nameOfProduct}
 Price: ${data[i].price}
 Product Description: ${data[i].description}
 Specification: ${data[i].features}
 ${+data[i].image}`;
        main.appendChild(div);
    }
}