import React, { Dispatch, useReducer } from 'react'

export enum Theme {
    light = 'light',
    dark = 'dark'
}

interface IThemeState {
    value: Theme
}

export enum IThemeActionType {
    SET_DARK_THEME,
    SET_LIGHT_THEME
}
interface IThemeAction {
    type: IThemeActionType
}
export function themeReducer(state: IThemeState, action: IThemeAction) {

    switch (action.type) {
        case IThemeActionType.SET_DARK_THEME: return {
            ...state,
            value: Theme.dark
        }
        case IThemeActionType.SET_LIGHT_THEME: return {
            ...state,
            value: Theme.light
        }
        default: return state
    }

}

export function setDarkTheme(): IThemeAction {
    return { type: IThemeActionType.SET_DARK_THEME }
}

export function setLightTheme(): IThemeAction {
    return { type: IThemeActionType.SET_LIGHT_THEME }
}



export interface IThemeContext {
    currentTheme: IThemeState;
    setCurrentTheme: Dispatch<IThemeAction>;
}


const ThemeContext = React.createContext<IThemeContext>({} as IThemeContext)

export const ThemeProvider = ThemeContext.Provider
export default ThemeContext