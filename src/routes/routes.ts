import {lazy, LazyExoticComponent} from "react";
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = ()=> JSX.Element;

interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string
}

const LazyLayout = lazy(()=> import(/* webpackChunkName:"lazyLayout" */ "../01-lazyload/layout/Layout"));

export const routes:Route[] = [
    {
        to: "/lazyload/",
        path:"/lazyload/*",
        Component: LazyLayout,
        name: "lazy1",
    },
    {
        to: "/no-lazy",
        path:"/no-lazy",
        Component: NoLazy,
        name: "no lazy",
    },
]