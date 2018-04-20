function maketoc(){
 var id_toc = 'table-of-contents';
 if(null == document.getElementById(id_toc)){ return 1; }

 var ol = document.createElement('ol');

 var h2 = document.getElementsByTagName('h2');
 for (var i = 0; i < h2.length; i++) {
  var a = document.createElement('a');
  a.innerHTML = "§" + (i + 1) + " " + h2[i].innerHTML;

  if(h2[i].hasAttribute('title')){
   var title = h2[i].getAttribute('title');
  }
  else {
   var title = h2[i].innerHTML;
  }
  var id = encodeURIComponent("§" + (i + 1) + "_" + title);
  h2[i].id = id;
  a.setAttribute('href', "#" + id);

  var li = document.createElement('li');
  li.appendChild(a);

  ol.appendChild(li);
 }
 document.getElementById('table-of-contents').appendChild(ol);
};
