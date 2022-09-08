var gallery_photos = document.querySelector(".gallery_photos")
var arr = ['galleryimg/gallery1.webp', 'galleryimg/gallery2.jpg', 'galleryimg/gallery3.webp', 'galleryimg/gallery4.jpg', 'galleryimg/gallery5.webp', 'galleryimg/gallery6.webp', 'galleryimg/gallery7.webp', 'galleryimg/gallery8.webp', 'galleryimg/gallery9.jpg']
var arr1 = []
for (var j = 0; j < 10; j++) {
   for (var i of arr) {
      var tmp = `
    <a href="${i}" class="fancybox" data-fancybox="gallery1"><img src="${i}" alt="" class="img"></a>
    `
      gallery_photos.innerHTML += tmp
     
   }
}
var img = document.querySelectorAll(".img")
for(var i of img){
   i.addEventListener("click", function () {
   console.log(this)
})
}
