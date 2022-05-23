//store the products array in localstorage as "products"
var productArray=JSON.parse(localStorage.getItem("products"))||[]

function PumaProduct(t,des,pr,img){
    this.type=t;
    this.desc=des;
    this.price=pr;
    this.image=img;
}

function addProduct(){
    event.preventDefault();

    var type=products.type.value
    var description=products.desc.value
    var price=products.price.value
    var image_url=products.image.value

var obj= new PumaProduct(type,description,price,image_url)

productArray.push(obj)
localStorage.setItem("products",JSON.stringify(productArray))
window.location.reload();
}

function showProducts(){
    event.preventDefault();
    window.location.href="inventory.html"
}