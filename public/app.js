var CATS_ARRAY = [
{ name: "Boba", favouriteFood:"Sock fluff",imageSrc:"http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg" },
   { name: "aby", favouriteFood:"Tuna",imageSrc:"http://dreamicus.com/data/cat/cat-01.jpg" },
    { name: "lexy", favouriteFood:"Whiskas Temptations",imageSrc:"http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg" }];

var createUnOrderedList = function(){
  var unOrderedList = document.createElement("ul");
   unOrderedList.classList.add("cat");
   return unOrderedList;
 };

  var createName = function(name){
    var catName = document.createElement("li");
    catName.innerText = name + " ";
    return catName;
  };

  var createFavouriteFood = function(food){
    var favFood = document.createElement("li");
    favFood.innerText = food + " ";
    return favFood;
  };

  var createImage = function(image){
    var imageSrc = document.createElement("li");
   
    imageSrc.innerHTML =  "<img src =" + image + "/>" ;
    return imageSrc;
  };

 var appendElements = function(cats, unOrderedList, catName, favFood,imageSrc){
    favFood.appendChild(imageSrc);
    catName.appendChild(favFood);
    unOrderedList.appendChild(catName);
  cats.appendChild(unOrderedList);
 }

 var addCat = function(name, favouriteFood, image){
   var unOrderedList = createUnOrderedList();
   var catName = createName(name);
   var favFood = createFavouriteFood(favouriteFood);
   var imageSrc = createImage(image);
   var cats = document.getElementById("cats");
   appendElements(cats, unOrderedList, catName, favFood, imageSrc);

}
var app = function() {
  for(var catty of CATS_ARRAY){
    // console.log(catty.name);
    addCat(catty.name, catty.favouriteFood, catty.imageSrc);
  }
};
window.onload = app;
    // var unOrderedList = document.createElement("ul");
    //  unOrderedList.classList.add("cat");


    // var name = document.createElement("li");
    // name.innerText = "babby";

    // var favouriteFood = document.createElement("li");
    // favouriteFood.innerText = "fluff";

    //  var img = document.createElement("li");
    //  img.innerHTML = "<img src = http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg>";
    //  favouriteFood.appendChild(img);
    //   name.appendChild(favouriteFood);
    //   unOrderedList.appendChild(name);
    //  var cats = document.querySelector('#cats');
    //  cats.appendChild(unOrderedList);



   