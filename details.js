var happy=document.querySelector(".happy");
var projects=document.querySelector(".project");
var support=document.querySelector(".support");
var award=document.querySelector(".award")
function count(x,y)
{
    var i=0;
var h=setInterval(()=>{
    x.innerHTML=i;
    i++;
    if(i==y)
    {
        clearInterval(h)
    }

},20)
}
count(happy,201);
count(projects,140);
count(support,300);
count(award,150);
//////////////////////////////// 
var resume=document.querySelector("#resumeclick");
var About=document.querySelector("#About");
console.log(resume);

$(document).ready(function(){
    const urlParams = new URLSearchParams(window.location.search);
        const from = urlParams.get('from');

        if (from === 'abouthome') {
            // Your code here to adjust the display of #about
            $("#about").css("display", "inline");
            $(`#resume`).css(`display`,`none`);
       
           
            $(`#mycontact`).css(`display`,`none`);
            $(`#myportfolo`).css(`display`,`none`);
         
            $(`#myservices`).css(`display`,`none`);
        }
        else if(from===`resumehome`)
        {   $(`#resume`).css(`display`,`inline`);
            $("#About").css("display", "none");
            $(`#mycontact`).css(`display`,`none`);
            $(`#myportfolo`).css(`display`,`none`);
            $(`#myservices`).css(`display`,`none`);
       $("#resumeclick").addClass(`active`);
  $(`#about`).removeClass(`active`);

        }
        else if(from===`service`)
        {
          $(`#myservices`).css(`display`,`inline`);
    $("#About").css('display', 'none');
    $(`#resume`).css(`display`,`none`);
    $(`#myportfolo`).css(`display`,`none`);
    $(`#mycontact`).css(`display`,`none`);
    $("#serviceclick").addClass(`active`);
    $(`#about`).removeClass(`active`);
    $(`#resumeclick`).removeClass(`active`);
    $(`#contact`).removeClass(`active`);
    $(`#portfolo`).removeClass(`active`);
            
        }
        else if(from===`portfolo`){
          $(`#myportfolo`).css(`display`,`inline`);
          $(`#mycontact`).css(`display`,`none`);
          $("#About").css('display', 'none');
          $(`#resume`).css(`display`,`none`);
          $(`#myservices`).css(`display`,`none`);
          $("#portfolo").addClass(`active`);
          $(`#about`).removeClass(`active`);
          $(`#resumeclick`).removeClass(`active`);
          $(`#serviceclick`).removeClass(`active`);
          $(`#contact`).removeClass(`active`);
        }
        else if(from===`contants`)
        {
          $(`#mycontact`).css(`display`,`inline`);
          $(`#myportfolo`).css(`display`,`none`);
          $("#About").css('display', 'none');
          $(`#myservices`).css(`display`,`none`);
          $(`#resume`).css(`display`,`none`);
          $("#contact").addClass(`active`);
          $(`#about`).removeClass(`active`);
          $(`#serviceclick`).removeClass(`active`);
          $(`#resumeclick`).removeClass(`active`);
          $(`#portfolo`).removeClass(`active`);

        }
 

//   function to add section about
  $(`#about`).click(function(){
    $(`#About`).css(`display`,`inline`);
    $(`#resume`).css(`display`,`none`);
    $(`#myservices`).css(`display`,`none`);
    $(`#myportfolo`).css(`display`,`none`);
    $(`#mycontact`).css(`display`,`none`);
    $(`#about`).addClass(`active`);
    $(`#resumeclick`).removeClass(`active`);
    $(`#serviceclick`).removeClass(`active`);
    $(`#contact`).removeClass(`active`);
    $(`#portfolo`).removeClass(`active`);
   

  })
  // function to add section resume
$("#resumeclick").click(function(){
  $(`#resume`).css(`display`,`inline`);
  $("#About").css('display', 'none');
  $(`#myservices`).css(`display`,`none`);
  $(`#myportfolo`).css(`display`,`none`);
  $(`#mycontact`).css(`display`,`none`);
  $("#resumeclick").addClass(`active`);
  $(`#about`).removeClass(`active`);
  $(`#serviceclick`).removeClass(`active`);   
  $(`#contact`).removeClass(`active`);
  $(`#portfolo`).removeClass(`active`);
});
// function to add services
$("#serviceclick").click(function(){
    $(`#myservices`).css(`display`,`inline`);
    $("#About").css('display', 'none');
    $(`#resume`).css(`display`,`none`);
    $(`#myportfolo`).css(`display`,`none`);
    $(`#mycontact`).css(`display`,`none`);
    $("#serviceclick").addClass(`active`);
    $(`#about`).removeClass(`active`);
    $(`#resumeclick`).removeClass(`active`);
   
    $(`#contact`).removeClass(`active`);
    $(`#portfolo`).removeClass(`active`);
  });
  //add section portfolo
  $("#portfolo").click(function(){
    $(`#myportfolo`).css(`display`,`inline`);
    $(`#mycontact`).css(`display`,`none`);
    $("#About").css('display', 'none');
    $(`#resume`).css(`display`,`none`);
    $(`#myservices`).css(`display`,`none`);
    $("#portfolo").addClass(`active`);
    $(`#about`).removeClass(`active`);
    $(`#resumeclick`).removeClass(`active`);
    $(`#serviceclick`).removeClass(`active`);
    $(`#contact`).removeClass(`active`);
  });
  /// add contant section
  $("#contact").click(function(){
    $(`#mycontact`).css(`display`,`inline`);
    $(`#myportfolo`).css(`display`,`none`);
    $("#About").css('display', 'none');
    $(`#resume`).css(`display`,`none`);
    $("#contact").addClass(`active`);
    $(`#about`).removeClass(`active`);
    $(`#serviceclick`).removeClass(`active`);
    $(`#resumeclick`).removeClass(`active`);
    $(`#portfolo`).removeClass(`active`);
  });
  // add All portofolo in section portofilio
  $(".provid-all").click(function(){
    $(`.pro-all`).css(`display`,`inline`);
    $(`.pro-web`).css(`display`,`none`);
    $(`.pro-tasks`).css(`display`,`none`); 
    $(`.pro-small`).css(`display`,`none`);   
    $(".provid-all").addClass(`act`);
    $(`.provid-tasks`).removeClass(`act`);
    $(`.provid-web`).removeClass(`act`);
    $(`.provid-small`).removeClass(`act`);
   
  });
  // add web portifolio in section protofilo
  $(".provid-web").click(function(){
    $(`.pro-web`).css(`display`,`inline`);
    $(`.pro-all`).css(`display`,`none`);
    $(`.pro-tasks`).css(`display`,`none`); 
    $(`.pro-small`).css(`display`,`none`);   
    $(".provid-web").addClass(`act`);
    $(`.provid-all`).removeClass(`act`);
    $(`.provid-tasks`).removeClass(`act`);
    $(`.provid-small`).removeClass(`act`);
   
  });
  // add tasks portofolio in section portfolo 
  $(".provid-tasks").click(function(){
    $(`.pro-tasks`).css(`display`,`inline`);
    $(`.pro-all`).css(`display`,`none`); 
    $(`.pro-web`).css(`display`,`none`); 
    $(`.pro-small`).css(`display`,`none`);  
    $(".provid-tasks").addClass(`act`);
    $(`.provid-all`).removeClass(`act`);
    $(`.provid-web`).removeClass(`act`);
    $(`.provid-small`).removeClass(`act`);
   
  });
  // add small tasks in portofolo sections
  $(".provid-small").click(function(){
    $(`.pro-small`).css(`display`,`inline`);
    $(`.pro-all`).css(`display`,`none`); 
    $(`.pro-web`).css(`display`,`none`); 
    $(`.pro-tasks`).css(`display`,`none`);  
    $(".provid-small").addClass(`act`);
    $(`.provid-all`).removeClass(`act`);
    $(`.provid-web`).removeClass(`act`);
    $(`.provid-tasks`).removeClass(`act`);
   
  });
  $(`.ty1`).click(function(){
    location.href=`showpro.html`
  })
  // 
});


