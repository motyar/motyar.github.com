(function(){
    var url = window.location.href;
    var edit = url.match(/[&\?]edit=([\w\/-]+)/)[1];
    if(edit!=""){//Redirect to github edit
        //window.location.href = 'http://github.com';
        //TODO if file is index.html and filename doest exits

        var editUrl = url.replace("//","//github.com/motyar/motyar.github.com/").replace("motyar.github.io/","edit/master/").replace("?edit="+edit,"");
        window.location.href = editUrl; 
    }
})();