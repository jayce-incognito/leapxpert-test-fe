import { ITabsReducer } from 'src/components/Core/Tabs';
import { ISettingReducer } from 'src/module/Setting';
import { ITooltipReducer } from 'src/module/Tooltip';
import { ITodoReducer } from 'src/module/Todo';

export interface IAction {
    type: string;
    payload: any;
}

export interface IRootState {
    setting: ISettingReducer;
    tooltip: ITooltipReducer;
    tabs: ITabsReducer;
    todo: ITodoReducer;
}
