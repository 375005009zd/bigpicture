
  	var imgBox = document.getElementById('imgBox');
    var imgBoxW = imgBox.clientWidth;
    var imgBoxH = imgBox.clientHeight;
  	var magnifierMark = document.getElementById('magnifierMark');
  	var orginMarkW = "";
  	var orginMarkH = "";
  	var markHalfW = "";
  	var markHalfH = "";

  	//鼠标进入图片框时，显示放大区域和放大遮罩层
  	imgBox.addEventListener('mouseenter',function(event){
  		var e = event || window.event;
      magnifierMark.style.display='block';
      orginMarkW = document.querySelector("#magnifierMark").clientWidth;
      orginMarkH = document.querySelector("#magnifierMark").clientHeight;
      markHalfW = orginMarkW/2;
      markHalfH = orginMarkH/2;

  		if(e.offsetX<=markHalfW){
  		    	magnifierMark.style.left = '0px';
  		}else if(imgBoxW - e.offsetX <= markHalfW){
            magnifierMark.style.left = (imgBoxW - orginMarkW) + 'px';
  		}else {
            magnifierMark.style.left = (e.offsetX - markHalfW) + 'px';

      }

      if(e.offsetY<=markHalfH){
            magnifierMark.style.top = '0px';
      }else if(imgBoxH- e.offsetY <= markHalfH) {
            magnifierMark.style.top = (imgBoxH - orginMarkH) + 'px';
      }else {
           magnifierMark.style.top = (e.offsetY - markHalfH) + 'px';
      }
      console.log("mouseenter");
  	});
    

  	imgBox.addEventListener('mouseleave',function(){
  		var e = event || window.event;
  		 magnifierMark.style.display='none';
  	});

   imgBox.addEventListener('mouseover',function(event){
           var e = event || window.event;

      if(e.offsetX<=markHalfW){
            magnifierMark.style.left = '0px';
      }else if(imgBoxW - e.offsetX <= markHalfW){
            magnifierMark.style.left = (imgBoxW - orginMarkW) + 'px';
      }else {
            magnifierMark.style.left = (e.offsetX - markHalfW) + 'px';

      }

      if(e.offsetY<=markHalfH){
            magnifierMark.style.top = '0px';
      }else if(imgBoxH- e.offsetY <= markHalfH) {
            magnifierMark.style.top = (imgBoxH - orginMarkH) + 'px';
      }else {
           magnifierMark.style.top = (e.offsetY - markHalfH) + 'px';
      }
      console.log("mouseover");
    });
    //@ sourceURL=index.js