function loadData2(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then( res => res.json())
    .then(data => console.log(data))
}