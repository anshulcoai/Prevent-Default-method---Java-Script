b=document.getElementById("btn1")
b.addEventListener
(
    "click",
    function (event)
    {
      alert("Form Submission prevented")
      event.preventDefault()
    }
)

a1=document.getElementById("link1")
a1.addEventListener
(
    "click",
    function(event)
    {
      event.preventDefault()
    }
)

g1=document.getElementById("div1")
g1.addEventListener
(
    "contextmenu",
    function (event)
    {
      event.preventDefault()
    }
)

function newfunction()
{
    document.getElementById("opt1").style.display="block"
}

s6=document.getElementById("inp1")
s6.addEventListener
(
    "click",
    function (event)
    {
        alert("sorry!! you can't check this box ")
        event.preventDefault()
    }
)

d3=document.getElementById("inp2")
d3.addEventListener
(
    "keypress",
    function (element)
    {
        c4=element.key
        if (c4=="Enter")
        {
            alert("Enter key disabled")
        }
        else{
            alert(`${c4}`)
        }
    }
)



s8=document.getElementById("div2")
s8.addEventListener
(
    "wheel",
    function (event)
    {
        
        event.preventDefault();
    },
    
        { passive: false }
);


g6=document.getElementById("div3")
g6.addEventListener
(
    "dblclick",
    function(event)
    {
        event.preventDefault();
        alert("double clicked")
    }
)