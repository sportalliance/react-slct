import * as React from 'react';
import { Menu } from './menu';
import { SelectProps, SelectState, MenuComponentProps, Option } from './typings';
export { SelectProps, Menu, MenuComponentProps, Option };
export declare class Select<T = any> extends React.PureComponent<SelectProps<T>, SelectState> {
    private static Container;
    private static NativeSelect;
    private nativeSelect;
    private container;
    private blindTextTimeout;
    constructor(props: SelectProps);
    private readonly options;
    private readonly window;
    private readonly document;
    private readonly rect;
    private optionIsCreatable;
    componentDidUpdate(_: any, prevState: SelectState): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
    private renderNativeSelect;
    private renderChildren;
    private toggleMenu;
    private openMenu;
    private closeMenu;
    private createOption;
    private addDocumentListener;
    private removeDocumentListener;
    private addScrollListener;
    private cleanBlindText;
    private removeScrollListener;
    private addResizeListener;
    private removeResizeListener;
    private onChangeNativeSelect;
    private onSearchFocus;
    private onSearchBlur;
    private onOptionSelect;
    private onOptionRemove;
    private onClear;
    private onSearch;
    private onDocumentClick;
    private onKeyDown;
    private onKeyUp;
    private handleBlindText;
    private handleBlindTextUpdate;
    private allowRectChange;
    private onScroll;
    private onResize;
}
