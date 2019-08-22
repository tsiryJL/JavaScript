var i ; n = prompt('combient d etage?? ','write here')
for (i = 0; i < n; i++) {
    let j = 0;
    do{
        document.write("*");
        j++;
    }
    while(j < i)
    document.write("<br/>")
  }