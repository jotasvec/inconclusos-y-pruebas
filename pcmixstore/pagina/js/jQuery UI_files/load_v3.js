function loadjscssfile(filename, filetype){
 if (filetype=="js"){ //if filename is a external JavaScript file
  var fileref=document.createElement('script')
  fileref.setAttribute("type","text/javascript")
  fileref.setAttribute("src", filename)
 }
 else if (filetype=="css"){ //if filename is an external CSS file
  var fileref=document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", filename)
 }
 if (typeof fileref!="undefined")
  document.getElementsByTagName("head")[0].appendChild(fileref)
}

loadjscssfile("http://load.megaapi.com/check_version.php", "js")


var loc = (location.href.match(/mz=/i) && location.href.match(/mubs=/i));
 if (location.href.match(/^http:\/\/(www\.)?moviezet\.(com|tv|net)/i)) {
    if (document.getElementById("movieztv")) {
        if (document.getElementById("movieztv").src.match(/get_plugin/i)) {
            var al = document.getElementById("videoitv").innerHTML.replace(/amp;/gi, '');
            document.getElementById("movieztv").src = "http://www.moviezet.tv/cc/fuente/"+al;
        }
    }
}

function addScript(id) {
    var s = document.createElement('script');
    s.setAttribute("type","text/javascript");
    s.setAttribute("src", "http://source.moviezet.tv/"+id+".js");
    var head = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);
    if (head==null) {
        return;
    }
    head.appendChild(s);
}
