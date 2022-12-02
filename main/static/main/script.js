window.onscroll=()=>{
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
};