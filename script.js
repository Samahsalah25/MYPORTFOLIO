var nam=document.querySelector(".myname");
var web=document.querySelector(".web");
var s1=document.querySelector(".s1")
var s2=document.querySelector(".s2")
var s3=document.querySelector(".s3")
var a1=document.querySelector(".a1")
var a2=document.querySelector(".a2")
var a3=document.querySelector(".a3")
var a4=document.querySelector(".a4")
var a5=document.querySelector(".a5")
var a6=document.querySelector(".a6")
var btn=document.querySelector(".btn")
var icons=document.querySelector(".icons");
var str="Samah Salah Hussien";
var str1="I am a";
var str2="Web developer";
var str3="from Egypt";
var str4="Home"
var str5="About"
var str6="Resume"
var str7="Services"
var str8="Portfolio"
var str9="Contact"
var res1="";
var res2="";
var res3="";
var res="";
var res4="";
var i=0;
var k=0;
var l=0;
var m=0;
var e=0
// it slider bg
var count = 0;
var images = [`images/bg1.jpg`, `images/bg2.jpg`, `images/bg3.jpeg`, `images/bg4.jpeg`];


function changePicture() {
    document.body.style.backgroundImage = `url(${images[count]})`;
    if (count < images.length-1) {
        count++;
    } else {
        count = 0;
    }

    console.log("Image changed");
    //  linear-gradient(to right, rgba(255,255,255, 0.1) 0 100%),url("4.jpg")
  

}
// 
// 
var x=setInterval(()=>{
    if (i===str.length-1)
    {
     clearInterval(x)
     var y=setInterval(()=>{
        if (k===str1.length-1)
        {
         clearInterval(y);
         var z=setInterval(()=>{
            if (l===str2.length-1)
            {
             clearInterval(z);
             var u=setInterval(()=>{
                if (m===str3.length-1)
                {
                 clearInterval(u);
                 var g=setInterval(()=>{
                    if(e<str4.length)
                    {
                        a1.innerHTML+=str4[e];
                    }
                    else if(e<str4.length+str5.length)
                    {
                        a2.innerHTML+=str5[e-str4.length]
                    }
                    else if(e<str4.length+str5.length+str6.length)
                    {
                        a3.innerHTML+=str6[e-str4.length-str5.length]
                    }
                    else if(e<str4.length+str5.length+str6.length+str7.length)
                    {
                        a4.innerHTML+=str7[e-str4.length-str5.length-str6.length]
                    }
                    else if(e<str4.length+str5.length+str6.length+str7.length+str8.length)
                    {
                        a5.innerHTML+=str8[e-str4.length-str5.length-str6.length-str7.length]
                    }
                    else if(e<str4.length+str5.length+str6.length+str7.length+str8.length+str9.length)
                    {
                        a6.innerHTML+=str9[e-str4.length-str5.length-str6.length-str7.length-str8.length]
                    }
                    else{
                        icons.style.visibility="visible";
                        btn.style.display="inline-block";
                       
                       
                       
                    
                    }
                    e++;

                    
                },200)
            
                }
                res3=str3[m];
                s3.innerHTML+=res3
                m++;
              
            },200)
        
            }
            res2=str2[l];
            s2.innerHTML+=res2
            l++;
          
        },200);
        }
         res1=str1[k];
            s1.innerHTML+=res1
            k++;  
    },200);
    }
    res=str[i];
    nam.innerHTML+=res
    i++;
  
},200);
// to do slider bg in js 

// Call the function when the body has finished loading
setTimeout(
setInterval(changePicture,4000)
,10000)