
const intialLoad = function(){
    console.log('im intial load');
    const mainContentDiv = document.querySelector('.main');

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
    const nav_ul_arr=['menu','visit','read','order online'];
    nav_ul_arr.forEach((item)=>{
        let nav_ul_li=document.createElement('li');
        nav_ul_li.textContent=item;
        nav_ul_li.classList.add('hvr-underline-from-center');
        nav_ul.appendChild(nav_ul_li);
    });
    nav.appendChild(nav_ul);
    mainContentDiv.appendChild(nav);

    const sectionJumbotron=document.createElement('section');
    sectionJumbotron.classList.add('jumbotron');
    const sectionJumbotron_h3_arr=['Our Passion','Your Burger'];
    sectionJumbotron_h3_arr.forEach((item)=>{
        let sectionJumbotron_h3=document.createElement('h3');
        sectionJumbotron_h3.textContent=item;
        sectionJumbotron.appendChild(sectionJumbotron_h3);
    })
    const sectionJumbotron_button=document.createElement('button');
    sectionJumbotron_button.textContent='Order Now';
    sectionJumbotron.appendChild(sectionJumbotron_button);
    mainContentDiv.appendChild(sectionJumbotron);

    const sectionMiniJumbotron=document.createElement('section');
    const sectionMiniJumbotron_h2=document.createElement('h2');
    sectionMiniJumbotron_h2.textContent='FIND YOUR CRIMSON BURGERS';
    const sectionMiniJumbotron_p=document.createElement('p');
    sectionMiniJumbotron_p.textContent='ORDER ONLINE AT SELECT LOCATIONS';
    sectionMiniJumbotron.appendChild(sectionMiniJumbotron_h2);
    sectionMiniJumbotron.appendChild(sectionMiniJumbotron_p);
    mainContentDiv.appendChild(sectionMiniJumbotron);

    const footer=document.createElement('footer');
    const footer_obj={
        section1:['FYI','News & Press'],
        section2:['WHATS\'S UP','eClub Sign-Up','Crimson Deals'],
        section3:['PLAY HARD','Work With Us','Locations'],
    }
    for(let element in footer_obj){
        let footer_section=document.createElement('section');
        let footer_section_h6=document.createElement('h6');
        let [first,...rest]=element;
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
    copyrightDiv.textContent='Crimson Burgers &copy; 2020';
    mainContentDiv.appendChild(copyrightDiv);

}

export default intialLoad