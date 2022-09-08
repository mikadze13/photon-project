var img_box=document.querySelectorAll(".img_box")
var homeImgArr=[]
class HomePage {
    constructor(homeImg) {
        this.homeImg = homeImg
    }
}

class FirebaseWorker {
    firebaseref;  
    constructor() {
        this.firebaseref = firebase.firestore()
    }     
    async addHomeImg(imgitem){
        var json=JSON.stringify(imgitem)
        var result=await this.firebaseref.collection("HomePageImg").add(JSON.parse(json)) 
    }
    async ReadHomeImg(){
        var allImg=[]
        var result=await this.firebaseref.collection("HomePageImg").get()
        result.forEach(i=>{
            var tmp=i.data()
            tmp.id=i.id
            allImg.push(tmp) 
            
        }) 
         
        // for(var i of allImg){ 
        //     homeImgArr.push(i.homeImg) 
        // }
        // for(var l in img_box){
        //     for(var j of homeImgArr){
        //         var tmp=`
        //         <img src="${j}" class="img1" alt="">
        //         `
        //         img_box[l].innerHTML+=tmp
        //     }
     
        // }
       
    }
    
}
var fbw=new FirebaseWorker()

fbw.ReadHomeImg().then(x=>{console.log(x,"xxxxx")})   
// console.log(homeImgArr) 
// var a1=new HomePage("homeimg/home1.webp")
// var a2=new HomePage("homeimg/home2.webp")
// var a3=new HomePage("homeimg/home3.webp")
// var a4=new HomePage("homeimg/home4.webp")
// var a5=new HomePage("homeimg/home5.webp")
// var a6=new HomePage("homeimg/home6.webp")
// var a7=new HomePage("homeimg/home7.webp") 