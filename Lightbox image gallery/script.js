
const galleryItem  = document.getElementsByClassName("gallery")

//lightbox için eleman oluşturma
const lightBoxContainer = document.createElement("div")
//temel alan
const lightBoxContent = document.createElement("div")
//img
const lightBoxImg= document.createElement("img")
//görüntüleri değiştirme düğmesi önceki buton
const lightBoxPrev = document.createElement("div")
//sonraki buton
const lightBoxNext = document.createElement("div")
const lightBoxClose = document.createElement("div")

lightBoxContainer.classList.add("ligthbox")
lightBoxContent.classList.add("ligthbox-content")
lightBoxPrev.classList.add("fa", "fa-angle-left", "ligthbox-prev")
lightBoxNext.classList.add("fa", "fa-angle-right", "ligthbox-next")
lightBoxClose.classList.add("fa", "fa-times", "ligthbox-close")

lightBoxContainer.appendChild(lightBoxContent)
lightBoxContent.appendChild(lightBoxImg)
lightBoxContent.appendChild(lightBoxPrev)
lightBoxContent.appendChild(lightBoxNext)
lightBoxContent.appendChild(lightBoxClose)
document.body.appendChild(lightBoxContainer)

let index = 1;

function showLightBox(n){
    if(n>galleryItem.length){
        index =1;
    }else if(n<1){
        index = galleryItem.length;
    }

    let imageLocation = galleryItem[index-1].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src", imageLocation)
}

function currentImage(){
    lightBoxContainer.style.display="block";

    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index=imageIndex);
}

for (let i=0; i<galleryItem.length; i++){
    galleryItem[i].addEventListener("click", function(){
        currentImage.call(this);
    })
}

function sliderImage(n){
    showLightBox(index += n)
}


function prevImage(){
    sliderImage(-1)
}

function nextImage(){
    sliderImage(1)
}



lightBoxPrev.addEventListener("click", prevImage)
lightBoxNext.addEventListener("click", nextImage)
lightBoxClose.addEventListener("click", closeLightBox);

function closeLightBox() {
    lightBoxContainer.style.display = "none";
}




