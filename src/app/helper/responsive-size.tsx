import React, { createContext } from 'react';
import { useMediaQuery } from 'react-responsive'

export const BigScreen = ({ children }) => {
    const isBigScreen = useMediaQuery({ query: '(min-width: 1128px)' })
    return isBigScreen ? children : null
}
export const MediumScreen = ({ children }) => {
    const isMediumScreen = useMediaQuery({ minWidth: 743, maxWidth: 1127 })
    return isMediumScreen ? children : null
}
export const SmallScreen = ({ children }) => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 742px)' })
    return isSmallScreen ? children : null
}


