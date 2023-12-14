var photo=["imge/img3.png","imge/r.jpg","imge/robi.jpg"];
var imgTag=document.querySelector("img");
var count=0;
function previous(){
    count--;
    if(count<0){
        count=photo.length-1;
        imgTag.src=photo[count];
     
        
    }
    else{
        imgTag.src=photo[count];
    }

    
}
var count=0;
function next(){


count++;
if(count>=photo.length){
    count=0;
    imgTag.src=photo[count];
}else{
    imgTag.src=photo[count];
}
}