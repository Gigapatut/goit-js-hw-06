const liItemsByClass = document.querySelectorAll(".item");

const message = `Number of categories: ${document.querySelectorAll(".item").length}`;
console.log(message);

liItemsByClass.forEach(function (element) {
      
    const categoryName = element.querySelector("h2");
          
    const liItems = element.querySelectorAll("li");
        
    console.log(`Category: ${categoryName.textContent}
    Elements: ${liItems.length}`);          
});
 
