 /*var yourLevel = prompt('please enter your level');
//
if (yourLevel == 'baby') {
  alert('you are underage please click here');
  document.write('<a href="https://ar.kidsstory.org/11-%D9%82%D8%B5%D9%87-%D9%82%D8%B5%D9%8A%D8%B1%D9%87-%D9%84%D9%84%D8%A7%D8%B7%D9%81%D8%A7%D9%84-%D9%85%D9%86-%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9-%D9%82%D8%B5%D8%B5-%D8%B1%D8%A7%D8%A6%D8%B9%D8%A9/">click me</a>');
  document.write('<img src="https://png.pngtree.com/png-clipart/20190515/original/pngtree-set-icons-of-small-children-reading-a-book-png-image_3562479.jpg">');
}
else if (yourLevel == 'student' ) {
  alert('you are student please click here');
  document.write('<a href="https://www.arabacademy.com/arabic-beginners-first-6-steps/">click me</a>');
  document.write('<img src="https://arabacademy-u8hapu3mdn.netdna-ssl.com/wp-content/uploads/2017/02/blog3.png">');
}
else if (yourLevel == 'developer') {
  alert('you are developer please click here');
  document.write('<a href="https://books.google.jo/books/about/JavaScript_JQuery.html?id=dAJyxUtEZLMC&printsec=frontcover&source=kp_read_button&redir_esc=y#v=onepage&q&f=false">click me</a>');
  document.write('<img src="https://camo.githubusercontent.com/72c27477f91493365e44b44306740892911721464f3f25d5b706c5deab24bfc2/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f392f39392f556e6f6666696369616c5f4a6176615363726970745f6c6f676f5f322e7376672f34383070782d556e6f6666696369616c5f4a6176615363726970745f6c6f676f5f322e7376672e706e67">');
}
else {
  alert('try agin and have a nice day ^_^ ');
}
*/
// 1. the user set the level inside the prompt
/*var theperson=prompt('enter your level please');

// 2. validate about the input level 1.
while (theperson!=='baby' && theperson!=='student' && theperson !=='developer')
{
  theperson=prompt('please try again');
}

//3. i want to chack what the user input inside the level 1.and save the image 
var choosepic;
if (theperson === 'baby')
{
  document.write('<a href="https://ar.kidsstory.org/11-%D9%82%D8%B5%D9%87-%D9%82%D8%B5%D9%8A%D8%B1%D9%87-%D9%84%D9%84%D8%A7%D8%B7%D9%81%D8%A7%D9%84-%D9%85%D9%86-%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9-%D9%82%D8%B5%D8%B5-%D8%B1%D8%A7%D8%A6%D8%B9%D8%A9/">click me</a>');
  choosepic='<img src="https://png.pngtree.com/png-clipart/20190515/original/pngtree-set-icons-of-small-children-reading-a-book-png-image_3562479.jpg">';
}
else if ( theperson === 'student')
{
  document.write('<a href="https://www.arabacademy.com/arabic-beginners-first-6-steps/">click me</a>');
choosepic='<img src="https://arabacademy-u8hapu3mdn.netdna-ssl.com/wp-content/uploads/2017/02/blog3.png">';
}
else if (theperson === 'developer')
{
  document.write('<a href="https://www.arabacademy.com/arabic-beginners-first-6-steps/">click me</a>');
  choosepic='<img src="https://camo.githubusercontent.com/72c27477f91493365e44b44306740892911721464f3f25d5b706c5deab24bfc2/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f392f39392f556e6f6666696369616c5f4a6176615363726970745f6c6f676f5f322e7376672f34383070782d556e6f6666696369616c5f4a6176615363726970745f6c6f676f5f322e7376672e706e67">';
  
}

//4. i want to write a code to see how many pic i can see when me run the code 
var numofimage=prompt('plese enter the number');
for(var i=0;i<numofimage;i++)
{
  document.write(choosepic);

}
*/
function avarg()
{
  var inputnumber=prompt('plase enter your number');
  if(inputnumber<50)
  {
    alert('you are fail');
     document.write('<a href="https://www.annahar.com/ContentFilesArchive/167841Image1.jpg?version=1011038">click me you are fail </a>');
  }
  else if  (inputnumber>=50)
  { alert('you are pass');
     document.write('<a href="https://img.youm7.com/large/S920131484354.jpg"> click me you are pass</a>');
  }
  else {
    alert('try agin');
  }
 
  
  

}
 avarg();

