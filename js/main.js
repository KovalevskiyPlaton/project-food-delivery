const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-button-prev',
      prevEl: '.slider-button-next',
    },
 });

 document.body.addEventListener('click', function (event) {
  // filter out clicks on any other elements
  if (event.target.nodeName == 'A' && event.target.getAttribute('aria-disabled') == 'true') {
 event.preventDefault();
  }
});



const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item){                          //На каждую кнопку навешиваем обрабочик события клика
  item.addEventListener("click",()=>{  
      let currentBtn = item;                      //Назначаем текущий элемент      
      let tabId = currentBtn.getAttribute("data-set"); //получаем текущую кнопку по атрибуту  data-set 
      let currentTab = document.querySelector(tabId); //выбираем селектор ID который мы нажимаем
    if(!currentBtn.classList.contains('active')){ //условие исключает моргание на активных классах

      tabsBtn.forEach((item)=>{
        item.classList.remove('active'); //У всех элементов  удаляем класс active
    });
    tabsItems.forEach((item)=>{
        item.classList.remove('active'); //У всех элементов  удаляем класс active
    });
    currentBtn.classList.add('active');         //На каждую нажатую кнопку добавляем класс active
    currentTab.classList.add('active');         //На каждый  блок текста навешиваем класс active
      }
  });
}

document.querySelector('.tabs__nav-btn').click(); 
          




