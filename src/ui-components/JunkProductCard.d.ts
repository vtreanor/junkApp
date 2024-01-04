/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JunkProductCardOverridesProps = {
    JunkProductCard?: PrimitiveOverrideProps<ViewProps>;
    "avatar 1"?: PrimitiveOverrideProps<ImageProps>;
    Content?: PrimitiveOverrideProps<ViewProps>;
    Header?: PrimitiveOverrideProps<TextProps>;
    body?: PrimitiveOverrideProps<TextProps>;
    Price?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type JunkProductCardProps = React.PropsWithChildren<Partial<ViewProps> & {
    junk?: any;
} & {
    overrides?: JunkProductCardOverridesProps | undefined | null;
}>;
export default function JunkProductCard(props: JunkProductCardProps): React.ReactElement;
