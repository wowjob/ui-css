import type { TDirectional, TDirectionalUnit } from '../../type';
export declare const normalizeDirectional: <T extends string>(value?: TDirectional<T>, convertUnit?: (v: number | TDirectionalUnit | string) => string) => string | number;
