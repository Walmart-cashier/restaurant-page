
const loadMenu=function(){
    const mainContentDiv = document.querySelector('#main');
    mainContentDiv.innerHTML="";
    /*fixed contents*/
    const sectionContactInfo = document.createElement('section');
    sectionContactInfo.classList.add('contactInfo');
    const sectionContactInfo_p=document.createElement('p');
    sectionContactInfo_p.innerHTML="home delivery : 600 - Crimsons (600-564-669) <span>Crimson deals</span>";
    sectionContactInfo.appendChild(sectionContactInfo_p);
    mainContentDiv.appendChild(sectionContactInfo);

    const nav = document.createElement('nav');
    const nav_logoSection=document.createElement('section');
    const nav_logoSection_icon=document.createElement('i');
    nav_logoSection_icon.classList.add('fas','fa-hamburger','fa-6x');
    nav_logoSection.appendChild(nav_logoSection_icon);
    nav.appendChild(nav_logoSection);

    const nav_ul=document.createElement('ul');
    const nav_ul_arr=['menu','visit','read','orderOnline'];
    nav_ul_arr.forEach((item)=>{
        let nav_ul_li=document.createElement('li');
        nav_ul_li.textContent=item;
        nav_ul_li.id=`nav_${item}`;
        nav_ul_li.classList.add('hvr-underline-from-center');
        nav_ul.appendChild(nav_ul_li);
    });
    nav.appendChild(nav_ul);
    mainContentDiv.appendChild(nav);

    /*menu contents*/

    const section_menu=document.createElement('section');
    section_menu.classList.add('menu');

    const section_menu_arr=['shakes','burgers','starters','salads','kidsmeal','desserts'];
    section_menu_arr.forEach((item)=>{
        let section_submenu=document.createElement('section');
        section_submenu.classList.add('menu_'+item)
        let section_submenu_h3=document.createElement('h3');
        section_submenu_h3.textContent=item;
        let section_submenu_button=document.createElement('button');
        section_submenu_button.textContent='explore';
        section_submenu.appendChild(section_submenu_h3);
        section_submenu.appendChild(section_submenu_button);
        section_menu.appendChild(section_submenu);
    });
    mainContentDiv.appendChild(section_menu);

    /*fixed contents*/
    const footer=document.createElement('footer');
    const footer_obj={
        section1:['FYI','News & Press'],
        section2:['WHATS\'S UP','eClub Sign-Up','Crimson Deals'],
        section3:['PLAY HARD','Work With Us','Locations'],
    }
    for(let element in footer_obj){
        let footer_section=document.createElement('section');
        let footer_section_h6=document.createElement('h6');
        let [first,...rest]=footer_obj[element];
        footer_section_h6.textContent=first;
        footer_section.appendChild(footer_section_h6);
        rest.forEach((item)=>{
            let footer_section_p=document.createElement('p');
            footer_section_p.textContent=item;
            footer_section.appendChild(footer_section_p);
        })
        footer.appendChild(footer_section);
    }
    mainContentDiv.appendChild(footer);

    const copyrightDiv=document.createElement('div');
    copyrightDiv.classList.add('copyright')
    copyrightDiv.textContent='Crimson Burgers &copy; 2020';
    mainContentDiv.appendChild(copyrightDiv);
}

export {loadMenu}