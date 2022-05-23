function addMoreProducts(){
    window.location.href="index.html"
}

var localData=JSON.parse(localStorage.getItem("products"))||[]

display(localData);

function display(data){
    data.forEach(function(ele,index){
        var box=document.createElement("div")
        box.setAttribute("class","card")

        var types=document.createElement("h2")
        types.innerText=ele.type

        var description=document.createElement("p")
        description.innerText=ele.desc;

        var prices=document.createElement("h3")
        prices.innerText=ele.price

        var image_url=document.createElement("img")
        image_url.setAttribute("src",ele.image)
        
      
        
        var remove=document.createElement("button")
        remove.setAttribute("id","remove_product")
        remove.innerText="Remove"

        remove.addEventListener("click",function(){
deleteProduct(ele,index)
        })

        box.append(image_url,types,description,prices,remove)
        document.querySelector("#all_products").append(box)
    })
}

function deleteProduct(ele,index){
     localData.splice(index,1)

     localStorage.setItem("products", JSON.stringify(localData))
     window.location.reload()

}