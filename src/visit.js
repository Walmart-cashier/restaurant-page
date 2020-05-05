import { loadHeader,loadVisit,loadFooter} from "./initialpage";

const visitMenu=function(){
    loadHeader();
    loadVisit();
    loadFooter();
    navEvents();
}

export {visitMenu}
