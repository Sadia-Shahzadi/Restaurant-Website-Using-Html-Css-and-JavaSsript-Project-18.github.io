// text animation section 

const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() =>{
        text.textContent = "Italian Pizzeria";
    }, 0);
    setTimeout(() =>{
        text.textContent = "Canadian Pizzeria";
    }, 2000);
    setTimeout(() =>{
        text.textContent = "Russian Pizzeria";
    }, 4000);
    setTimeout(() =>{
        text.textContent = "Australian Pizzeria";
    }, 6000);
}

textLoad;
setInterval(textLoad, 8000);


// Gallery Section 

const filterOptions = document.querySelectorAll(".filter-option");
const galleryItems = document.querySelectorAll('.gallery-item');

filterOptions.forEach(option => {   
  option.addEventListener('click', () => {
    filterOptions.forEach(o => o.classList.remove('active'));
    option.classList.add('active');
    const filterCategory = option.getAttribute('data-filter');
    galleryItems.forEach(item => {
      if (item.classList.contains(filterCategory) || filterCategory === 'all') {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
