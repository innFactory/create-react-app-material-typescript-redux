import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { isWidthDown, isWidthUp } from '@material-ui/core/withWidth';

const allowMobile = true;
export function isSmartphone(width: Breakpoint): boolean {
    return allowMobile && isWidthDown('xs', width);
}

export function isTablet(width: Breakpoint): boolean {
    return allowMobile && isWidthDown('sm', width);
}

export function isMobile(width: Breakpoint): boolean {
    return allowMobile && isTablet(width);
}

export function isDesktop(width: Breakpoint): boolean {
    return !allowMobile || isWidthUp('md', width);
}