function maketoc2(){
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

function maketoc(){
 if (null == document.getElementById('table-of-contents')){ return 1; }

 var ol = document.createElement('ol');
 var hlist = document.querySelectorAll('h2, h3');
 var count_h2 = 0;
 var count_h3 = 0;
 var prefix = "";

 for (var i = 0; i < hlist.length; i++){
  if (hlist[i].tagName == 'H2') {
   count_h2++;
   count_h3 = 0;
   prefix = "§" + count_h2;
  }
  else if (hlist[i].tagName == 'H3') {
   count_h3++;
   prefix = count_h2 + "." + count_h3;
  }
  var id = encodeURIComponent(prefix + "_" + (hlist[i].hasAttribute('title') ? hlist[i].getAttribute('title') : hlist[i].innerHTML) );

  var a = document.createElement('a');
  a.setAttribute('href', '#' + id);
  a.innerHTML = prefix + " " + hlist[i].innerHTML;

  var li = document.createElement('li');
  li.appendChild(a);
  li.classList.add(hlist[i].tagName);

  ol.appendChild(li);

  hlist[i].innerHTML = prefix + " " + hlist[i].innerHTML;
  hlist[i].id = id;
 }
 document.getElementById('table-of-contents').appendChild(ol);
}

function renderabc(){
 var score = document.getElementsByClassName("score");
 if( !score ) { return; }
 for(var i in score){
  if( score[i].classList && score[i].classList.contains('long') ){
   ABCJS.renderAbc( score[i], score[i].innerHTML.replace(/\\n/g,"\n").replace("&lt;","<").replace("&gt;",">") );
  }
  else if( score[i].innerHTML ){
   ABCJS.renderAbc( score[i], score[i].innerHTML.replace(/\\n/g,"\n").replace("&lt;","<").replace("&gt;",">"),{staffwidth:300} );
  }
 }
}
