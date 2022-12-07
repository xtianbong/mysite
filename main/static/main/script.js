/*window.onscroll=()=>{
    var current=""
    const sections = document.querySelectorAll('.testimonial');
    s_array=>Array.from(sections).forEach((section,index)=>{
        const sectionTop = section.offsetTop;
        if (pageYOffset>=sectionTop){
            current = section.getAttribute("id");
        }
    });

    NavigationPreloadManager.forEach((s_array,index) =>{
        li.classList.remove("active");
        if (li.classList.contains(current)){
            li.classList.add("active");
        }
    });
};*/

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
        if (pageYOffset>=sectionTop){
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
})

//expand project box on click
/*
const projects = document.querySelectorAll(".project-box");
console.log(projects)
function projectExpand(p_name){
    let current=p_name
    console.log(current)
    projects.forEach(p=>{
        p.classList.remove('active');
        if(p.classList.contains(current)){
            p.classList.add('active')
            p.style.height = '500px';
        }
    })
}

document.querySelectorAll(".project-box").addEventListener('click',projectExpand());
*/
const projects = document.querySelectorAll(".project-box");
console.log(projects)
function projectExpand(project){
    projects.forEach(p=>{
        p.classList.remove('project-expand');
    })
    project.classList.add('project-expand')
    console.log(project.classList)
}

function projectCollapse(){
    projects.forEach(p=>{
        p.classList.remove('project-expand');
    })
}



$(document).ready(function(){
    projectExpand();
});

