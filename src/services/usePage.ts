import router from "@/router";
import { reactive } from "vue";

// TODO: switch to state pattern for less headaches

interface IPageState {
    throttled: boolean,
    scroll: boolean,
    transitionBehaviour: string,
    currentPage: number,
    currentRoute: string,
    pageCount: number,
    menuOpen: boolean
}

const pageState = reactive<IPageState>({
    throttled: false,
    scroll: false,
    transitionBehaviour: 'scrollTransDown',
    currentPage: getCurrentPage(),
    currentRoute: '',
    pageCount: 3,
    menuOpen: false
})

pageState.currentPage = getCurrentPage();

let touchStartPos = 0;

function wheelListener(event: WheelEvent) {
    if(Math.abs(event.deltaY) < 30) return;
    if(!pageState.throttled) {
        pageState.throttled = true;
        if(event.deltaY < 0) {
            pageState.currentPage -= (pageState.currentPage === 0) ? 0 : 1;
            pageState.transitionBehaviour = 'scrollTransUp';
        } else {
            pageState.currentPage += (pageState.currentPage < pageState.pageCount-1) ? 1 : 0;
            pageState.transitionBehaviour = 'scrollTransDown';
        }
        
        router.push(getPageLink());
        
        setTimeout(() => {
            pageState.throttled = false;
        }, 500);
    }
}

function scrollListener(event: TouchEvent) {
    if(!pageState.throttled) {
        pageState.throttled = true;

        const currentPagePos = event.changedTouches[0].screenY | 0;
        if (touchStartPos === currentPagePos) return;
    
        if(touchStartPos - currentPagePos < 0) {
            pageState.currentPage -= (pageState.currentPage === 0) ? 0 : 1;
            pageState.transitionBehaviour = 'scrollTransUp';
        } else {
            pageState.currentPage += (pageState.currentPage < pageState.pageCount-1) ? 1 : 0;
            pageState.transitionBehaviour = 'scrollTransDown';
        }
        touchStartPos = currentPagePos;
        router.push(getPageLink());

        setTimeout(() => {
            pageState.throttled = false;
        }, 500);
    }
}

function getCurrentPage(): number {
    // const url =  window.location.href.split('/');
    // const urlStr = url[url.length - 1];
    // switch(urlStr) {
    //     case '':
    //         return 0;
    //     case 'projectone':
    //         return 1;
    //     case 'projecttwo':
    //         return 2;
    //     default:
    //         return 0;
    // }
    const url = window.location.href
    if(url.includes('projectone')) {
        return 1;
    } else if(url.includes('projecttwo')) {
        return 2;
    } else {
        return 0;
    }
}

function getPageLink() {
    switch(pageState.currentPage) {
        case 0:
            return '/';
        case 1:
            return '/projectone';
        case 2:
            return '/projecttwo';
        default:
            return '/';
    }
}

function getGithubLink(): string {
    switch(pageState.currentPage) {
        case 0:
            return 'https://github.com/MalibusParty';
        default:
            return 'https://github.com/MalibusParty';
    }
}

function switchScroll() {
    if(pageState.scroll) {
        // window.addEventListener('wheel', wheelListener);
        window.addEventListener('touchmove', scrollListener);
    } else {
        // window.removeEventListener('wheel', wheelListener);
        window.removeEventListener('touchmove', scrollListener);
    }
}

function scrollOn() {
    if(!pageState.scroll) {
        pageState.scroll = true;
        pageState.transitionBehaviour = 'scrollTransDown';
        // window.addEventListener('wheel', wheelListener);
        window.addEventListener('touchmove', scrollListener);
    }
}

function scrollOff() {
    if(pageState.scroll) {
        pageState.scroll = false;
        pageState.transitionBehaviour = 'clickTransIn';
        // window.removeEventListener('wheel', wheelListener);
        window.removeEventListener('touchmove', scrollListener);

    }
}

export function usePage() {
    return {
        pageState,
        wheelListener,
        getCurrentPage,
        getPageLink,
        getGithubLink,
        switchScroll,
        scrollOn,
        scrollOff
    }
}