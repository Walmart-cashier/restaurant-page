import {mainContentDiv,loadHeader,loadVisit,loadFooter,navEvents} from "./initialpage";

const visitMenu=function(){
    mainContentDiv.innerHTML="";
    loadHeader();
    loadVisit();
    loadFooter();
    navEvents();
}

export {visitMenu}
