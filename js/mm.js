function openhome(){
    document.getElementById('home-content').style.transform= "translatex(0)";
    document.getElementById('services-content').style.transform= "translatex(100%)";
    document.getElementById('product-content').style.transform= "translatex(100%)";
}
function openservices(){
    document.getElementById('home-content').style.transform= "translatex(100%)";
    document.getElementById('services-content').style.transform= "translatex(0)";
    document.getElementById('product-content').style.transform= "translatex(100%)";
}
function openproducts(){
    document.getElementById('home-content').style.transform= "translatex(100%)";
    document.getElementById('services-content').style.transform= "translatex(100%)";
    document.getElementById('product-content').style.transform= "translatex(0)";
}
