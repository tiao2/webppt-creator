document.getElementById("input").addEventListener('keyup', function(event){
           var a=document.getElementById('input').innerText.split('\n').length;
           document.getElementById("line").innerText=((Array.from({length: a-1},(_,index)=> index+1)).map(text => text+'\n')).join('');
   });
   var module1 = document.getElementById('input'),module2 = document.getElementById('line');
              module1.addEventListener('scroll', function() {
                module2.scrollTop = module1.scrollTop;
                 });
             module2.addEventListener('scroll', function() {
                module1.scrollTop = module2.scrollTop;
                 });

function wc(){
   var file=document.getElementById("hd").innerText+'\n'+document.getElementById("input").innerText+'\n'+document.getElementById("bd").innerText;
   location.href='wc.html?f='+ec(file);
}
