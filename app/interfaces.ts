import { User } from "firebase/auth";
import { ReactNode } from "react";

export interface Error{
    [key:string]:{
        valid:boolean,
        message:string
    }
}

export type ErrorObject = null | Error

export interface SelectOption{
    value:string,
    label:string
}
export interface InputFieldProps{
    label:string,
    value:string,
    type:string,
    placeholder:string,
    containerClass?:string,
    handleInput:(value:string)=>void,
    suffixComponent?:ReactNode,
    prefixComponent?:ReactNode,
    min?:number,
    max?:number,
    maxLength?:number,
    minLength?:number,
    required?:boolean,
    readOnly?:boolean
    fieldError?:{
        valid:boolean,
        message:string
    }
}
export interface SelectInputFieldProps{
    label:string,
    value:string,
    containerClass?:string,
    handleSelect:(value:string)=>void,
    options:SelectOption[],
    fieldError?:{
        valid:boolean,
        message:string
    }
}

export interface TogglePasswordShownProps{
    shown:boolean,
    toggleShown:()=>void
}

export interface MainLayoutProps{
    active:string,
    children:ReactNode
}
export interface DashboardLinkObject{
    url:string,
    name:string,
    slug:string,
    icon?:ReactNode,
    activeIcon?:ReactNode,
    className?:string
    type?:"button"|"url",
    handler?:()=>void
}
export interface LinkComponentProps{
    link:DashboardLinkObject,
    active:string
}
export interface HeaderProps{
    pageTitle:string,
}
export interface SideBarProps{
    active:string,
}
export interface AuthContextObject{
    user:null | User
    loading:boolean
    updateUserData:(newData:null | User)=>void
}

export interface ContextProviderProps{
    children:ReactNode
}
export interface IntegrationDataObject{
    bgUrl:string,
    name:string,
    logo:string,
    link:string
}