var itemContainer = document.getElementById("item-info");
var btn = document.getElementById("btn");
// add a counter variable
var pageCounter = 1;
// var ourRequest = new XMLHttpRequest();
// ourRequest.open('GET','https://my-json-server.typicode.com/typicode/demo/posts');
// ourRequest.onload = function() {
//   //var ourData = ourRequest.responseText;
//   var ourData = JSON.parse(ourRequest.responseText);
//   console.log(ourRequest.responseText);
// };
// ourRequest.send();

btn.addEventListener("click", function() {
  console.log("click event");
  var ourRequest = new XMLHttpRequest();
  //ourRequest.open('GET','https://my-json-server.typicode.com/typicode/demo/posts');
  ourRequest.open('GET','https://jsonplaceholder.typicode.com/comments?postId='+pageCounter);
  ourRequest.onload = function() {
    //var ourData = ourRequest.responseText;
    var ourData = JSON.parse(ourRequest.responseText);
    //console.log(ourRequest.responseText);
    renderHTML(ourData);
  };
  ourRequest.send();
  pageCounter++;
});

function renderHTML(data) {
  var htmlString = "";
  for (i = 0; i < data.length; i++)
  {
    htmlString += "<p><b>" + data[i].name + "</b> has a email : <i>" + data[i].email + "</i> | NOTE : " +data[i].body+ "</p>";
  }
  // add data to the html with beforeend 
  itemContainer.insertAdjacentHTML('beforeend', htmlString);
}