document.getElementById("bold").addEventListener("click", function(){
if (document.getElementById("txt").style.fontWeight=="bold"){
  document.getElementById("txt").style.fontWeight="normal";
} else{
  document.getElementById("txt").style.fontWeight="bold";
}

});

document.getElementById("ita").addEventListener("click", function(){
if (document.getElementById("txt").style.fontStyle=="italic"){
  document.getElementById("txt").style.fontStyle="normal";
} else {
  document.getElementById("txt").style.fontStyle="italic";
}
});

document.getElementById("under").addEventListener("click", function(){
  if (document.getElementById("txt").style.textDecoration=="underline"){
    document.getElementById("txt").style.textDecoration="none";
  } else {
    document.getElementById("txt").style.textDecoration="underline";
  }
  });

  function taille (ta){
    document.getElementById("txt").style.fontSize=ta.value+"px" ;
  };

  function police (po){
    document.getElementById("txt").style.fontFamily=po.value ;
  };