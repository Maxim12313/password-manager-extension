chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log("url: "+details.url); // Access the URL of the request
    console.log("method: "+details.method); // Access the HTTP method (GET, POST, etc.)
    console.log("header: "+details.requestHeaders); // Access the request headers
    console.log("body: "+details.requestBody); // Access the request body data

    // Perform any necessary operations with the request data

    // Return {cancel: true} to cancel the request, if desired
  },
  {urls: ["<all_urls>"]},
  ["requestBody","extraHeaders"],
);