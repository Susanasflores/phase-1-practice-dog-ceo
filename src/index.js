console.log('%c HI', 'color: firebrick');

const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
window.addEventListener('load', (event) => {
fetch(imgUrl)
       .then(res => res.json()) 
        .then(data => {
    data.message.forEach(imgUrl => {
        const img = document.createElement("img");
        img.src = imgUrl;
        document.body.appendChild(img);
    });
})
     .catch(error => {
        console.log("error");
     })});

const breedUrl = "https://dog.ceo/api/breeds/list/all"
window.addEventListener('load', (event) => {

fetch(breedUrl)
.then(res => res.json())
.then(data => {
    console.log(data)
//adds breeds to the page in the ul 
//loop through every element on breed list and append
//to li
Object.keys(data.message).forEach(breed => {
    const liTags = document.createElement("li");
    const ulTags = document.getElementById("dog-breeds");
    liTags.textContent = breed;
    ulTags.appendChild(liTags);
    liTags.addEventListener("click", function() {
  liTags.style.color= "pink";
        });
      });
const dropdown = document.getElementById("breed-dropdown");
//add a submit button
//const btn = document.createElement("button")
//const container = document.getElementById("dog-image-container")
//container.appendChild(btn);
dropdown.addEventListener('input', function() {
    const dropdown_items = document.querySelectorAll('#dog-breeds li');
   const selectedLetter = dropdown.value.toUpperCase();
   
   dropdown_items.forEach(item => {
    const breedName = item.textContent.toUpperCase();
    if(breedName.startsWith(selectedLetter)) {
        item.style.display = 'block';
   } else {
    item.style.display = 'none';
   }
})
})})
    })
  
//add JavaScript so that, when the user clicks on any 
//one of the <li>s, the font color of that <li> changes. 
//This can be a color of your choosing.

//add javascript so the user can filter breeds that start
//with a particular letter using a dropdown.

