
  	var bigBox = document.getElementById('bigBox');
    var bigBoxW = bigBox.clientWidth;
    var bigBoxH = bigBox.clientHeight;
    var bigImg = document.getElementById('bigImg');
    var smallBox = document.getElementById('smallBox');
    var smallBoxW = smallBox.clientWidth;
    var smallBoxH = smallBox.clientHeight;
  	var magnifierMark = document.getElementById('magnifierMark');
  	var  orginMarkW = parseInt(magnifierMark.style.width);
    var  orginMarkH = parseInt(magnifierMark.style.height);
    var  markHalfW = orginMarkW/2;
    var markHalfH = orginMarkH/2;

  	//鼠标进入图片框时，显示放大区域和放大遮罩层
  	smallBox.addEventListener('mouseover',function(event){
  		var e = event || window.event;
      magnifierMark.style.display='block';
      bigBox.style.display = 'block';
  	});
    

  	smallBox.addEventListener('mouseout',function(event){
  		var e = event || window.event;
  		 magnifierMark.style.display='none';
       bigBox.style.display='none';
  	});

   smallBox.addEventListener('mousemove',function(event){
      var e = event || window.event;
      var rateX = bigBoxW/orginMarkW;
      var rateY = bigBoxH/orginMarkH;

      if(e.offsetX<=markHalfW){
            magnifierMark.style.left = '0px';
            bigImg.style.left = '0px';
      }else if(smallBoxW - e.offsetX <= markHalfW){
            magnifierMark.style.left = (smallBoxW - orginMarkW) + 'px';
            bigImg.style.left = -(smallBoxW - orginMarkW)*rateX + 'px';
      }else {
            magnifierMark.style.left = (e.offsetX - markHalfW) + 'px';
             bigImg.style.left = -(e.offsetX - markHalfW)*rateX + 'px';
      }

      if(e.offsetY<=markHalfH){
            magnifierMark.style.top = '0px';
            bigImg.style.top = '0px';
      }else if(smallBoxH- e.offsetY <= markHalfH) {
            magnifierMark.style.top = (smallBoxH - orginMarkH) + 'px';
             bigImg.style.top = -(smallBoxH - orginMarkH)*rateY + 'px';
      }else {
           magnifierMark.style.top = (e.offsetY - markHalfH) + 'px';
           bigImg.style.top = -(e.offsetY - markHalfH)*rateY + 'px';
      }
    });

//@ sourceURL=index.js