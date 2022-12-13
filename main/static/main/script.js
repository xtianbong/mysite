//make active nav item change on scroll
const sections = document.querySelectorAll(".section");
//console.log(sections)
const navLi = document.querySelectorAll('.nav-item');
//console.log(navLi)
window.addEventListener('scroll', ()=>{
    let current='';
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight=section.clientHeight;
        if (pageYOffset>=sectionTop-50){
            current=section.getAttribute('id')
        }
    })
    //console.log(current)
    navLi.forEach(li=>{
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active')
        }
    })
    //console.log(current)
    if(current=="resume"){
        console.log('rrrr')
        document.querySelector("nav").classList.add("pdf")
    }
    else{
        document.querySelector("nav").classList.remove("pdf")
    }
})

//expand/collapse project boxes on click
const projects = document.querySelectorAll(".project-box");
var expanded=0;
const e_list = [];
const p_len=projects.length;
const iframes=document.querySelectorAll('iframe');
console.log(projects)
function projectExpand(project){
    projects.forEach(p=>{
        if(p!=project){
            p.classList.remove('project-expand');
        }
    })
    project.classList.toggle('project-expand')

    //pause every iframe when a projectbox is opened/closed
    iframes.forEach(i=>{
        i.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
    })
}
//expand/collapse skillboxes on click
const s_cards = document.querySelectorAll(".skill-card")
function skillCardExpand(s_card){
    console.log(s_cards)
    s_cards.forEach(s=>{
        if(s!=s_card){
            s.classList.remove("s-expand")
        }
    })
    s_card.classList.toggle("s-expand")
}

//convert yt links to embedable ones
const yt_links = document.querySelectorAll(".yt-frame");
function ytEmbed(){
    console.log(yt_links)
    yt_links.forEach(l=>{
        l_list=l.src.split(".com")
        embed=l_list[0]+".com"+"/embed"+l_list[1]+"?enablejsapi=1";
        console.log(embed)
        document.getElementById(l.id).src=embed
    })
}
var yt_embeds =[]

//link "contact me" with navbar "Links"


// Get a reference to the element that you want to work with
var contactString = document.querySelector("#contact-me");

// Set up an event handler. Notice that we don't use "on" in front
// of the event name when doing it this way.
contactString.addEventListener("mouseover", contactMe);

function contactMe(){
    document.querySelector("#nav-links").focus()
}

$(document).ready(function(){
    projectExpand();
});

