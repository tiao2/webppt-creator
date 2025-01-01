var bn=1,ce=document.getElementById("c");
function adb(){
   document.getElementById("list").innerHTML+="<div class='page' onclick='ps("+(bn+1)+")'><strong>"+(bn+1)+"</strong><iframe src='yl.html' id='"+(bn+1)+"' frameborder='none'></iframe></div>"
  bn++;
  }
function ps(n){
   document.getElementById("subb").onclick=()=>bc(n,'bg');
   document.getElementById("sube").onclick=()=>bc(n,'el');
   document.getElementById("toast").style.display="block";
   document.getElementById("toast").innerHTML="您正在编辑: 第"+n+"页";
   setTimeout(function(){document.getElementById("toast").style.display='none';} , 2000);
  }
ce.addEventListener("keyup", function(e){
           var a=ce.value.split(/[^#0123456789abcdefABCDEF]/); if(ce.value.search("#")>=0) ce.value=a[0];
           if(ce.value.search("#")<0 && ce.value!='' && e.key!=='Enter'){
            var dt='aliceblue,antiquewhite,aqua,aquamarine,azure,bisque,black,blanchedalmond,blue,blueviolet,brown,burlywood,cadetblue,chartreuse,chocolate,coral,cornflowerblue,cornsilk,crimson,cyan,darkblue,darkcyan,darkgoldenrod,darkgray,darkgreen,darkgrey,darkkhaki,darkmagenta,darkolivegreen,darkorange,darkorchid,darkred,darksalmon,darkseagreen,darkslateblue,darkslategray,darkslategrey,darkturquoise,darkviolet,deeppink,deepskyblue,dimgray,dimgrey,dodgerblue,firebrick,floralwhite,forestgreen,fuchsia,gainsboro,ghostwhite,gold,goldenrod,gray,green,greenyellow,grey,honeydew,hotpink,indianred,indigo,ivory,khaki,lavender,lavenderblush,lawngreen,lemonchiffon,lightblue,lightcoral,lightcyan,lightgoldenrodyellow,lightgray,lightgreen,lightgrey,lightpink,lightsalmon,lightseagreen,lightskyblue,lightslategray,lightslategrey,lightsteelblue,lightyello,lime,linen,magenta,maroon,mediumaquamarine,mediumblue,mediumorchid,mediumpurple,mediumseagreen,mediumslateblue,mediumspringgreen,mediumturquoise,mediumvioletred,midnightblue,mintcream,mistyrose,moccasin,navajowhite,navy,oldlace,olive,olivedrab,orange,orangered,orchid,palegoldenrod,palegreen,paleturquoise,palevioletred,papayawhip,peachpuff,peru,pink,plum,powderblue,purple,red,rosybrown,royalblue,saddlebrown,salmon,sandybrown,seagreen,seashell,sienna,silver,skyblue,slateblue,slategray,slategrey,snow,springgreen,steelblue,tan,teal,thistle,tomato,turquoise,violet,wheat,white,whitesmoke,yellow,yellowgreen';
var gt='aliceblue,antiquewhite,aqua,aquamarine,azure,bisque,black,blanchedalmond,blue,blueviolet,brown,burlywood,cadetblue,chartreuse,chocolate,coral,cornflowerblue,cornsilk,crimson,cyan,darkblue,darkcyan,darkgoldenrod,darkgray,darkgreen,darkgrey,darkkhaki,darkmagenta,darkolivegreen,darkorange,darkorchid,darkred,darksalmon,darkseagreen,darkslateblue,darkslategray,darkslategrey,darkturquoise,darkviolet,deeppink,deepskyblue,dimgray,dimgrey,dodgerblue,firebrick,floralwhite,forestgreen,fuchsia,gainsboro,ghostwhite,gold,goldenrod,gray,green,greenyellow,grey,honeydew,hotpink,indianred,indigo,ivory,khaki,lavender,lavenderblush,lawngreen,lemonchiffon,lightblue,lightcoral,lightcyan,lightgoldenrodyellow,lightgray,lightgreen,lightgrey,lightpink,lightsalmon,lightseagreen,lightskyblue,lightslategray,lightslategrey,lightsteelblue,lightyello,lime,linen,magenta,maroon,mediumaquamarine,mediumblue,mediumorchid,mediumpurple,mediumseagreen,mediumslateblue,mediumspringgreen,mediumturquoise,mediumvioletred,midnightblue,mintcream,mistyrose,moccasin,navajowhite,navy,oldlace,olive,olivedrab,orange,orangered,orchid,palegoldenrod,palegreen,paleturquoise,palevioletred,papayawhip,peachpuff,peru,pink,plum,powderblue,purple,red,rosybrown,royalblue,saddlebrown,salmon,sandybrown,seagreen,seashell,sienna,silver,skyblue,slateblue,slategray,slategrey,snow,springgreen,steelblue,tan,teal,thistle,tomato,turquoise,violet,wheat,white,whitesmoke,yellow,yellowgreen';
gt=gt.split(',');dt=dt.split(',');
  for(var n=0; n<dt.length; n++){
         var s=dt[n],yn=(s.search(ce.value)===-1);
         if(yn){console.log(yn);gt.splice(gt.findIndex(item => item === s), 1);}
      }
       var sd=gt.map(m => '<div height="10px" width="100%" onclick="ce.value=\''+m+'\';document.getElementById(\'search\').style.display=\'none\';" class="sj"><label style="background-color:'+m+'">&nbsp;&nbsp;&nbsp;</label>'+m+'</div>').join('');
        document.getElementById("search").style.display='block';
        document.getElementById("search").innerHTML=sd;
             } else { document.getElementById("search").style.display='none'; }
        });
function bc(p,n){

   document.getElementById("toast").style.display="block";
   document.getElementById("toast").innerHTML="成功保存了相关内容。";
   setTimeout(function(){document.getElementById("toast").style.display='none';}, 2000);
  }
function ade(){
  document.getElementById("el").innerHTML+='<div name="els">未制作程序</div>';
 }
