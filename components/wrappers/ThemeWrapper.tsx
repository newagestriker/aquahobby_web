import React, { useContext } from "react";
import ThemeContext from "../../providers/theme-context";


export default function WithTheme<P extends object>(Component: React.ComponentType<P>) {
    return (props: P) => {
        const themeContext = useContext(ThemeContext)
        return <Component themeContext={themeContext} {...props} />
    }
}