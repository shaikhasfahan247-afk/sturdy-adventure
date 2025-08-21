// Carousel
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showSlide(index){
    items.forEach((item,i)=>{
        item.classList.remove('active');
        dots[i].classList.remove('active');
    });
    items[index].classList.add('active');
    dots[index].classList.add('active');
    document.querySelector('.carousel').style.transform = `translateX(-${index*100}%)`;
}
dots.forEach((dot,i)=>dot.addEventListener('click',()=>{currentIndex=i;showSlide(currentIndex);}));
setInterval(()=>{currentIndex=(currentIndex+1)%items.length;showSlide(currentIndex);},5000);

// Modal
const modal=document.getElementById("productModal");
const modalImage=document.getElementById("modalImage");
const modalName=document.getElementById("modalName");
const modalPrice=document.getElementById("modalPrice");
const modalDescription=document.getElementById("modalDescription");
const closeBtn=document.querySelector(".close");

function openModal(name,img,price,desc){
    modal.style.display="block";
    modalImage.src=img;
    modalName.textContent=name;
    modalPrice.textContent=price;
    modalDescription.textContent=desc;
}

closeBtn.onclick=function(){modal.style.display="none";}
window.onclick=function(event){if(event.target==modal) modal.style.display="none";}
