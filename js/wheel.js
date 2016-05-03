$(function(){
	/*
    轮播图
	*/
	var imgs=$('a',$('.bannertubox')[0]);
	// console.log(imgs);
	var btns=$('li',$('.eightbtn')[0]);
	// console.log(btns);
	var index=0;
	var t=setInterval(wheel,3000);
	var arr=["#ffdbe3","#c87dfe","#ff7170","#1ba9eb","#fae0a3","#e73f1a","#fd4c16","#53be56","#ff8e01"];
    function wheel(){
		index++;
		if(index>=imgs.length){
			index=0;
		}
		for (var i = 0; i < imgs.length; i++) {
			animate(imgs[i],{opacity:0});
            btns[i].className="";
		};
		animate(imgs[index],{opacity:1});
	    btns[index].className="hot";
	    outbox.style.background=arr[index];
	}
	for (var i = 0; i < btns.length; i++) {
		btns[i].index=i;
		btns[i].onmouseover=function(){
             for (var j = 0; j < imgs.length; j++) {
             	animate(imgs[j],{opacity:0});
             	btns[j].className="";
             };
             animate(imgs[this.index],{opacity:1});
             btns[this.index].className="hot";
             outbox.style.background=arr[this.index];
             index=this.index;
		}
	};
    var outbox=$('.banneroutbox')[0];
    // console.log(outbox);
    outbox.onmouseover=function(){
    	clearInterval(t);
    	/*left.style.cssText="dispaly:block;background:rgba(0,0,0,0.3);color:#fff;";
    	right.style.cssText="dispaly:block;background:rgba(0,0,0,0.3);color:#fff;";*/
    }
    outbox.onmouseout=function(){
    	t=setInterval(wheel,3000);
    }
    
    var left=$('.lbtn')[0];
    var right=$('.rbtn')[0];
    left.onclick=function(){
    	index--;
    	if(index==-1){
    		index=imgs.length-1;
    	}
    	for (var i = 0; i < imgs.length; i++) {
    		animate(imgs[i],{opacity:0});
         	btns[i].className="";
         	outbox.style.background="";
         };
         animate(imgs[index],{opacity:1});
         btns[index].className="hot";
         outbox.style.background=arr[index];
    }
    right.onclick=function(){
    	wheel();
    }


    /*
    小轮播图
    */  
        function lun(num){
            var imgs2=$('a',$('.con2imgs')[num]);
            // console.log(imgs2);
            var imgs2box=$('.con2imgs')[num];
            // console.log(imgs2box);
            var imgs2w=parseInt(getStyle(imgs2[0],'width'));
            // console.log(imgs2w);
            var btn2s=$('li',$('.sbtn')[num]);
            // console.log(btn2s);
            var index2=0;
            var t2=setInterval(wheel2,2000);
            function wheel2(){
               index2++;
               if(index2>=imgs2.length){
                   index2=0;
               }
                for (var i = 0; i < btn2s.length; i++) {
                   btn2s[i].className="";
               };
               btn2s[index2].className="re";
               animate(imgs2box,{marginLeft:-index2*imgs2w});
            }
            var dabox=$('.con2imgs')[num];
            // console.log(dabox);
            dabox.onmouseover=function(){
                clearInterval(t2);
            }
            dabox.onmouseout=function(){
                t2=setInterval(wheel2,2000);
            }
            /*
            鼠标移上按钮
            */
            for (var i = 0; i < btn2s.length; i++) {
                btn2s[i].index2=i;
                btn2s[i].onmouseover=function(){
                    for (var j = 0; j < imgs2.length; j++) {
                        btn2s[j].className="";
                    };
                    btn2s[this.index2].className="re";
                    animate(imgs2box,{marginLeft:-this.index2*imgs2w});
                    index2=this.index2;
                }
            };
        }
        for (var i = 0; i <8 ;i++) {
            lun(i);
        };

    /*
    品牌轮播
    */
    var cbox=$('.imgsbox')[0];
    // console.log(cbox);
    var imgs3=$('.imgs');
    // console.log(imgs3);
    var imgs3w=parseInt(getStyle(imgs3[0],'width'));
    // console.log(imgs3w);
    var aa=0;
    var t2=setInterval(wheel3,2000)
    function wheel3(){
        animate(cbox,{marginLeft:-imgs3w},function(){
            cbox.appendChild(getFirst(cbox));
            cbox.style.marginLeft=0+"px";
            aa++;
            if(aa>=imgs3.length){
            aa=0;
            } 
        })
    }

    


})