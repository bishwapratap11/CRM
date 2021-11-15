// sidebars
var toggleSidebarMain = document.querySelector('.main-container');
var toggleSidebar = document.querySelector('.sidebar-toggle');
var expand = document.querySelector('#expand');
var toggleBtn = document.querySelector('#toggleBtn');
var logoutBtn = document.querySelector('.menu-logout');
var logoutModal = document.querySelector('.logout-alert');
var cancelLogout = document.querySelector('.cancel-modal-btn');
var addProduct = document.querySelector('.add-product');
var cancelProduct = document.querySelector('.add-product-cancel');
var productModal = document.querySelector('.add-product-modal');

expand.onclick = function(){
    if (document.documentElement.requestFullscreen()) {
        document.documentElement.requestFullscreen();
    }
    else{
        document.documentElement.ExitFullscreen();
    }
}

toggleBtn.onclick = function(){
    toggleSidebarMain.classList.toggle('active');
    toggleSidebar.classList.toggle('active');
}

logoutBtn.onclick = function(){
    logoutModal.classList.add('active');
}

cancelLogout.onclick = function(){
    logoutModal.classList.remove('active');
}
addProduct.onclick = function(){
    productModal.classList.add('active');
}
cancelProduct.onclick = function(){
    productModal.classList.remove('active');
}
logoutModal.onclick = function(e){
    if (e.target == logoutModal) {
        logoutModal.classList.remove('active');
    }
}
productModal.onclick = function(e){
    if (e.target == productModal) {
        productModal.classList.remove('active');
    }
}
var a = document.querySelector('.recent-orders').clientHeight;
console.log(a)