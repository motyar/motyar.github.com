(function(){
    var url = window.location.href;
    var edit = url.match(/[&\?]edit=([\w\/-]+)/)[1];
    if(edit!=""){//Redirect to github edit
        //window.location.href = 'http://github.com';

        var editUrl = url.replace("//","//github.com/motyar/motyar.github.com/").replace("motyar.gihub.io/","/edit/master/").replace("?edit="+edit,"");
        alert(editUrl);
    
    }
})();