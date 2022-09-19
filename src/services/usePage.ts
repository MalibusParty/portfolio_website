import router from "@/router";
import { reactive } from "vue";

interface IPageState {
    throttled: boolean,
    scroll: boolean,
    transitionBehaviour: string,
    currentPage: number,
    currentRoute: string,
    pageCount: number
}

const pageState = reactive<IPageState>({
    throttled: false,
    scroll: false,
    transitionBehaviour: 'scrollTransDown',
    currentPage: getCurrentPage(),
    currentRoute: '',
    pageCount: 3
})

pageState.currentPage = getCurrentPage();

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
        
        router.push(getPageLink(pageState.currentPage));
        
        setTimeout(() => {
            pageState.throttled = false;
        }, 500);
    }
}

function getCurrentPage() {
    const url =  window.location.href.split('/');
    const urlStr = url[url.length - 1];
    switch(urlStr) {
        case '':
            return 0;
        case 'projectone':
            return 1;
        case 'projecttwo':
            return 2;
        default:
            return 0;
    }
}

function getPageLink(pageNumber: number) {
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

function switchScroll() {
    if(pageState.scroll) {
        window.addEventListener('wheel', wheelListener);
    } else {
        window.removeEventListener('wheel', wheelListener);
    }
}

function scrollOn() {
    if(!pageState.scroll) {
        pageState.scroll = true;
        pageState.transitionBehaviour = 'scrollTransDown';
        window.addEventListener('wheel', wheelListener);
    }
}

function scrollOff() {
    if(pageState.scroll) {
        pageState.scroll = false;
        pageState.transitionBehaviour = 'clickTransIn';
        window.removeEventListener('wheel', wheelListener);
    }
}

export function usePage() {
    return {
        pageState,
        wheelListener,
        getCurrentPage,
        getPageLink,
        switchScroll,
        scrollOn,
        scrollOff
    }
}