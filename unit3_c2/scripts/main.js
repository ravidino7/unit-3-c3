var ans=document.getElementById("form");


function formdata(event){
    
    event.preventDefault();
    console.log('event:')

    function construct(name,email,address,amount){
        this.name=name;
        this.email=email;
        this.address=address;
        this.amount=amount;
    
    }

    var name=ans.name.value;
    var email=ans.email.value;
    var address=ans.address.value;
    var amount=ans.amount.value;
    var obj= new construct(name,email,address,amount)
  
localStorage.setItem("user",JSON.stringify(obj));
document.getElementById("name").innerText=null;
document.getElementById("form").reset();
}