import * as React from 'react';
import { Rect, MenuComponentProps, MenuContainerProps } from './typings';
interface MenuComponentState {
    rect?: Rect;
}
export declare class Menu extends React.PureComponent<MenuComponentProps, MenuComponentState> {
    static MenuContainer: import("../../../../../Users/dschkalee/src/react-slct/node_modules/styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & MenuContainerProps, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & MenuContainerProps>;
    private static Empty;
    private list;
    constructor(props: any);
    componentDidUpdate(prevProps: MenuComponentProps): void;
    render(): React.ReactNode;
    private rowRenderer;
    private onSelect;
    private onRect;
}
export interface MenuContainerState {
    rect?: Rect;
}
export declare class MenuContainer extends React.PureComponent<MenuContainerProps, MenuContainerState> {
    private el?;
    private readonly rect;
    private readonly window;
    private readonly document;
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(_: any, prevState: MenuContainerState): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
    private addListener;
    private removeListener;
    private allowRectChange;
    private onViewportChange;
    private onEl;
}
export {};