var photos = [
    "asset/1.jpg",
    "asset/2.jpg",
    "asset/3.jpg",
    "asset/4.jpg",
    "asset/5.jpg",
    "asset/6.jpg",
    "asset/7.jpg",
    "asset/8.jpg",
    "asset/9.jpg",
    "asset/10.jpg",
    "asset/11.jpg",
    "asset/12.jpg",
    "asset/13.png",
    "asset/14.jpg",
  ];
  
  var imgTag=document.querySelector('img')
  var count = 0;
  function nextFunction() {
    count++;
    if (count >= photos.length) {
      count = 0;
      imgTag.src = photos[count];
    } else {
      imgTag.src = photos[count];
    }
  }
  
  function prevFunction() {
      count--;
      if (count <0) {
        count = photos.length-1;
        imgTag.src = photos[count];
      } else {
        imgTag.src = photos[count];
      }
  }
  