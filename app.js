(function(){
    var url = window.location.href;
    var edit = url.match(/[&\?]edit=([\w\/-]+)/)[1];
    if(edit!=""){//Redirect to github edit
        window.location.href = 'http://github.com';
    
    }
})();