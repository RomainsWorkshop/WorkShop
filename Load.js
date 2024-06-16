var txtFile = new XMLHttpRequest();
txtFile.open("GET", "/Intro.txt", true);
txtFile.onreadystatechange = function() {
  if (txtFile.readyState === 4 && txtFile.status == 200) {
     allText = txtFile.responseText;
  }
}
document.getElementById('Jonha').innerHTML = allText;
