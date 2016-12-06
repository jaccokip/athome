/**
 * 
 */

 $(document).ready(function () {
   $("#frmLink").click(function () {
       var target = $(this).attr("href");//get the targer from the href attribute
       $(target).toggle();
       return false; 
   });
});