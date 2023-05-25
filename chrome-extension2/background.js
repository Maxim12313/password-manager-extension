chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (details.method !="POST" && !details.url.includes("/signin")){
      console.log("NOT A SIGN IN REQUEST");
      return;
    }
    const body = details.requestBody;

    if (body==undefined){
      console.log("BODY UNDEFINED");
      return;
    }

    console.log("url: "+details.url); 
    console.log("method: "+details.method); 
    console.log("header: "+details.requestHeaders); 
    console.log("body: "+details.requestBody); 

    const formData = body.formData;
    if (formData===undefined){
      console.log("FORMDATA UNDEFINED");
      return;
    }


    for (const key in formData){
      console.log(key+": "+formData[key]);
    }
  },
  {urls: ["<all_urls>"]},
  ["requestBody","extraHeaders"],
);