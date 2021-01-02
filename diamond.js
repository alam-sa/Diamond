function diamond(num){
  let tampung = ''

  for (let i = 0; i < num*2-1; i++) {
    tampung = ''
    for (let j = 0; j < num; j++) {
      if (j == Math.abs((num-1)-i) || j == num-1) {
        tampung +='$ '
      } else {
        if (i>=0 && j< Math.abs(num-1-i)) {
          tampung += ' '
        } else {
          tampung += '  '
        }       
      }
    }
    console.log(tampung);
  }  
}
    
diamond(3);
diamond(4);
diamond(6);
diamond(10);