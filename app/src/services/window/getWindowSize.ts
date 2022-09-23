import { WindowBreakpoint } from '../../hooks/window/enums/WindowBreakpoint';

// Define general type for useWindowSize hook, which includes width and height
export interface WindowSize {
    height: number;
    width: number;
    breakpoint: WindowBreakpoint;
    isSmallResolution: boolean;
}

export default function getWindowSize(): WindowSize {

    const size = {
        width: window.innerWidth,
        height: window.innerHeight,
    };

    const breakpoint = getBreakpoint(size.width);
    
    return {
        ...size,
        breakpoint,
        isSmallResolution: [
            WindowBreakpoint.xs,
            WindowBreakpoint.sm
        ].includes(breakpoint),
    }
}

export function getBreakpoint(windowWidth?: number) {
    const width = windowWidth ?? window.innerWidth;

    if(width < 576) return WindowBreakpoint.xs;
    if(width < 768) return WindowBreakpoint.sm;
    if(width < 992) return WindowBreakpoint.md;
    if(width < 1200) return WindowBreakpoint.lg;
    if(width < 1600) return WindowBreakpoint.xl;
    return WindowBreakpoint.xxl;
}