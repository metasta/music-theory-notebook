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

function addfooter(){
 var footer = document.createElement('footer');
 footer.innerHTML = '<small class="copyright">&copy; 2018 <a href="https://twitter.com/metasta">metasta</a></small>';
 document.body.appendChild(footer);
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

function s(){
 renderabc();
 maketoc();
 addfooter();
}
