function fileImport(callback){
       var input = document.createElement('input');
       input.type = 'file';
       input.onchange=function(e){
            const file = e.target.files[0];
             if(file){
                 var reader=new FileReader();
                  reader.readAsText(file);
                  reader.onload=()=> {
                      callback(file.name, reader.result);
                       };
            reader.onerror=(e)=> {
               throw new Error("Error:"+e);
                    }
             }
      };
   input.click();
};
