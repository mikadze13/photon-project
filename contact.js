var fname = document.querySelector(".fname")
var lname = document.querySelector(".lname")
var email = document.querySelector(".email")
var subject = document.querySelector(".subject")
var message = document.querySelector("#message")
var button = document.querySelector(".btn1")
var notifi_mother=document.querySelector(".notifi_mother")
class UserInfo {
    constructor(firstname, lastname, mail, ssubject, mmessage) {
        this.firstname = firstname
        this.lastname = lastname
        this.mail = mail
        this.ssubject = ssubject
        this.mmessage = mmessage
    }
}
class FirebaseWorker {
    firebaseref
    constructor() {
        this.firebaseref = firebase.firestore()
    }
    async addUserInfo(infoItem) {
        var json = JSON.stringify(infoItem)
        var result = await this.firebaseref.collection("User-Info").add(JSON.parse(json))
    }
    async readUserInfo() {
        var allInfo = []
        var result = await this.firebaseref.collection("User-Info").get()
        result.forEach(i => {
            var tmp = i.data()
            tmp.id = i.id
            allInfo.push(tmp)
        })
    }
}  
function notifiNone(){
    notifi_mother.style.display="none"
}
notifiNone()
function fire(){
    var info = new UserInfo(fname.value,lname.value,email.value,subject.value,message.value,)
    var fbw = new FirebaseWorker()
    fbw.addUserInfo(info)
    fbw.readUserInfo().then(x=>{console.log(x,"xxxomagi")})
} 
 
button.addEventListener("click",function(){ 
    if(fname.value==""||lname.value==""||email.value==""||subject.value==""||message.value==""){
        alert("Fill in all the information to contact you") 
        if(fname.value==""){
           fname.style.border="1px solid red"
        }
        if(lname.value==""){
            lname.style.border="1px solid red"
        }
        if(email.value==""){
            email.style.border="1px solid red"
        }
         if(subject.value==""){
            subject.style.border="1px solid red"
        }
        if(message.value==""){
            message.style.border="1px solid red"
        }
    } else{
         fire() 
    notifi_mother.style.display="block"
    setTimeout(() => {
        notifi_mother.style.display="none"
    }, 3000);
    fname.value=""
    lname.value=""
    email.value=""
    subject.value=""
    message.value=""
    fname.style.border="0.5px solid #ced4da"
    lname.style.border="0.5px solid #ced4da"
    email.style.border="0.5px solid #ced4da"
    subject.style.border="0.5px solid #ced4da"
    message.style.border="0.5px solid #ced4da"
    }
   
})
      
