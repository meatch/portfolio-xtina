/*---------------------------
| Media Queries
---------------------------*/
import { useEffect, useState } from 'react';

export const mediaBreakPoints = { medium: 600, large: 970 }

export const mediaQueries = {
    small:`@media only screen and (max-width: ${mediaBreakPoints.mediumBreak-1}px)`,
    medium: `@media only screen and (min-width: ${mediaBreakPoints.mediumBreak}px)`,
    mediumOnly: `@media only screen and (min-width: ${mediaBreakPoints.mediumBreak}px) and (max-width: ${mediaBreakPoints.largeBreak-1}px)`,
    large:`@media only screen and (min-width: ${mediaBreakPoints.largeBreak}px)`,
}

export const useMediaQuery = (onWindowChange, onMediaChange) => {
    const [isSmall, setIsSmall] = useState(false);
    const [isMedium, setIsMedium] = useState(false);
    const [isLarge, setIsLarge] = useState(false);
    const [width, setIsWidth] = useState(window.innerWidth);
    const [height, setIsHeight] = useState(window.innerHeight);



    useEffect(() => {
        const handleWindowSizeChange = () => {
            if (onWindowChange) {
                onWindowChange();
            }
    
            const winWidth = window.innerWidth;
            const winHeight = window.innerHeight;
    
            let small = winWidth < mediaBreakPoints.medium;
            let medium = winWidth >= mediaBreakPoints.medium && winWidth < mediaBreakPoints.large;
            let large = winWidth >= mediaBreakPoints.large;
    
            setIsWidth(winWidth);
            setIsHeight(winHeight);
            setIsSmall(small);
            setIsMedium(medium);
            setIsLarge(large);
        };
        handleWindowSizeChange();
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, [onWindowChange]);

    useEffect(() => {
        const handleOnMediaChange = () => {
            if (onMediaChange) {
                onMediaChange();
            }
        };
        handleOnMediaChange();
    }, [onMediaChange, isSmall, isMedium, isLarge]);

    return {
        isSmall: isSmall,
        isMedium: isMedium,
        isLarge: isLarge,
        width: width,
        height: height,
    };
};