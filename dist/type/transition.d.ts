import type { TGlobalKeyword } from './global-keyword';
export type TTransitionProperty = TGlobalKeyword | 'none' | 'all' | string;
export type TTransitionDuration = TGlobalKeyword | string | number;
export type TTransitionTimingFunction = TGlobalKeyword | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' | 'step-start' | 'step-end' | string;
export type TTransitionDelay = TGlobalKeyword | string | number;
export type TTransition = string | Array<string | number> | {
    property?: TTransitionProperty;
    duration?: TTransitionDuration;
    timingFunction?: TTransitionTimingFunction;
    delay?: TTransitionDelay;
};
