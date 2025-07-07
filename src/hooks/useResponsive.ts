import {Theme, useMediaQuery } from "@mui/material"


const useResponsive = () => {
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

    const isTablet = useMediaQuery((theme: Theme) => theme.breakpoints.between('sm', 'md'));

    const isLandscape = useMediaQuery((theme: Theme) => `${theme.breakpoints.between('sm', 1000)} and (orientation: landscape)`);

    const isDesktop = !isMobile && !isTablet;

    const isReponsive = isMobile && isTablet;

    const isMobileLandScape  = isMobile || isLandscape

    return {
        isMobile,
        isTablet,
        isDesktop,
        isReponsive,
        isMobileLandScape,
    }
}

export default useResponsive;