const API_TOKEN = "aaa"
const API_URL = "https://script.google.com/macros/s/AKfycbwQgeX0zIga8WNDvA97aU8wd0O5_-SnyJq4eacSNawzcj4nA_aVZard77x4UisUM7VfEg/exec"

function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.responseText)
}

function getDataMenu(){
    var data = httpGet(`${API_URL}?token=${API_TOKEN}&db=menu`)
    data.data.forEach(r=>{
        var option = r.option
        var category = r.category
        var res = `<div class="col-lg-4 portfolio-item ${r.sub_category}">
                    <div class="single-menu">
                        <div class="title-div justify-content-between d-flex">
                            <h4>${r.name}</h4>
                        </div>
                        <p>${r.description}</p>
                        <br>

                        ${category != 'snack' ?
                            option == 1 ? 
                            `<p class="price float-right">Ice : ${r.price}k</p>` : 
                            `<p class="price float-right">Hot : ${r.price}k</p>	
                            <p class="price">Ice : ${r.price_2}k</p>` :
                        
                            `<p class="price float-right">Price : ${r.price}k</p>`}							
                    </div>
                </div>`

        document.getElementById('data-classes').innerHTML += res;
    })
}