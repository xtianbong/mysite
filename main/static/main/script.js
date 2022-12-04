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

const sections = document.querySelectorAll(".section");
console.log(sections)
const navLi = document.querySelectorAll('.nav-item');
console.log(navLi)
window.addEventListener('scroll', ()=>{
    let current='';
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight=section.clientHeight;
        if (pageYOffset>=sectionTop){
            current=section.getAttribute('id')
        }
    })
    console.log(current)
    navLi.forEach(li=>{
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active')
        }
    })
})