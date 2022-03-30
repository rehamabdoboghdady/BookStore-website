

$(document).ready(function(){
    $("#best").click(function(){
    open("viewListBooks.html");
    });
//$("#best").on('click',function(){
    

    $("#web").click(function(){
    open("webList.html");
    });
    /////////////////////////////////
    $("#program").click(function(){
        open("programmingList.html");
     });
    ////////////////////////////////////
    $("#novel").click(function(){
            open("novelsList.html");
    });
/////////////////////////////////////////////////////////

////////////////////////////////////////////
//$("#b1").click(function(){
  //  open("login.html");
//});
////////////////////////////////////////////
$.ajax({
url:'books.json',
datatype:'json',
success:function(data,status)
{
  
 // alert("bestSeller");
       // alert("asd");
            //   if(value11==="bestSeller"){
                  var numBestSeller=data[0].bestSeller.length;
                  console.log(numBestSeller);
                 
                  $.each(data,function(index){
                   // alert("asd");
                      for(var x=0;x< numBestSeller;x++)
                  {
                      
        $("#show").append("<div class='show2'><img src=images/"+data[index].bestSeller[x].img+ ">"+
                      "<p>"+data[index].bestSeller[x].name+"</p>"+
                      "<span>"+data[index].bestSeller[x].price+"</span>"
                      + "<button class='viewList be' id=b"+x+">Add To Cart</button></div>");
                      //console.log(data[index].bestSeller[x].name);
                  }
                  });
               
}

,
error:function(xhr,textStatus,err)
{
    console.log(err);
}

//})

});
///////////////////////////////////web development////////////////////////////
//$("#web").on('click',function(){
    $.ajax({
    url:'books.json',
    datatype:'json',
    success:function(data,status)
{
       
           // alert("webDevelopment");
                //   if(value11==="bestSeller"){
                      var numBestSeller=data[0].webDevolopment.length;
                      console.log(numBestSeller);
                      $.each(data,function(index){
                       // alert("asd");
                          for(var x=0;x< numBestSeller;x++)
                      {
                          
                          $("#showweb").append("<div class='show2'><img src=images/"+data[index].webDevolopment[x].img+ ">"+
                          "<p>"+data[index].webDevolopment[x].name+"</p>"+
                          "<span>"+data[index].webDevolopment[x].price+"</span>"
                          + "<button class='viewList' id=w"+x+">Add To Cart</button></div>");
                          //console.log(data[index].bestSeller[x].name);
                      }
                        
                      });
                      //open("viewListBooks.html"); 
    }
    
    ,
    error:function(xhr,textStatus,err)
    {
        console.log(err);
    
    }
   // })
 

});
////////////////////////programming language/////////////////////////
$.ajax({
    url:'books.json',
    datatype:'json',
    success:function(data,status)
{
       
        //    alert("webDevelopment");
                //   if(value11==="bestSeller"){
                      var numBestSeller=data[0].programmingLanguage.length;
                      console.log(numBestSeller);
                      $.each(data,function(index){
                       // alert("asd");
                          for(var x=0;x< numBestSeller;x++)
                      {
                          
                          $("#showprogramming").append("<div class='show2'><img src=images/"+data[index].programmingLanguage[x].img+ ">"+
                          "<p>"+data[index].programmingLanguage[x].name+"</p>"+
                          "<span>"+data[index].programmingLanguage[x].price+"</span>"
                          + "<button class='viewList' id=p"+x+">Add To Cart</button></div>");
                         
                      }
                        
                      });
                      //open("viewListBooks.html"); 
    }
    
    ,
    error:function(xhr,textStatus,err)
    {
        console.log(err);
    
    }
   // })
});
////////////////////////////Novels///////////////////////////////////
$.ajax({
    url:'books.json',
    datatype:'json',
    success:function(data,status)
    {
      
  ///    alert("bestSeller");
           // alert("asd");
                //   if(value11==="bestSeller"){
                      var numBestSeller=data[0].novels.length;
                      console.log(numBestSeller);
                     
                      $.each(data,function(index){
                       // alert("asd");
                          for(var x=0;x< numBestSeller;x++)
                      {
                          
            $("#shownovels").append("<div class='show2'><img src=images/"+data[index].novels[x].img+ ">"+
                          "<p>"+data[index].novels[x].name+"</p>"+
                          "<span>"+data[index].novels[x].price+"</span>"
                          + "<button class='viewList' id=n"+x+ ">Add To Cart</button></div>");
                          //console.log(data[index].bestSeller[x].name);
                      }
                      });
                   
    }
    
    ,
    error:function(xhr,textStatus,err)
    {
        console.log(err);
    }
    
    //})
    
    });
////////////////////////////////////////Add to cart////////////////////////////////////

  //  $("#addBook").append("<div class='bestcart'><img src=images/"+data[0].novels[0].img+ ">"+
    //"<p>"+data[0].novels[0].name+"</p>"+
    //"<span>"+data[0].novels[0].price+"</span></div>")


//})





/////////////////////////////////////////////////////////////////////
$("#btnnav").on('click',function(){
   // open("viewListBooks.html");
  $("#searchnav11").keyup(function()
  {
var searchFeild=$("#searchnav11").val();
var myExp=new RegExp(searchFeild,"i");
$.get('books.json',function(data){
    var output='<ul class="searchres">';
    $(data).find("name").each(function(index,value){
        var val=value.firstChild.nodeValue;
        if((val.search(myExp)!=-1)){
            output +='<li>'+val+'</li>';
        }
    });
    output +='</ul';
    $("#update").html(output);
});


  });
});
})