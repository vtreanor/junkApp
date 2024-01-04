/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type JunkDetailOverridesProps = {
    JunkDetail?: PrimitiveOverrideProps<ViewProps>;
    PanelLHS?: PrimitiveOverrideProps<ViewProps>;
    "junk-03 1"?: PrimitiveOverrideProps<ImageProps>;
    Header4188444?: PrimitiveOverrideProps<TextProps>;
    PanelRHS?: PrimitiveOverrideProps<ViewProps>;
    Header4186610?: PrimitiveOverrideProps<TextProps>;
    BodyFrame?: PrimitiveOverrideProps<ViewProps>;
    Body?: PrimitiveOverrideProps<TextProps>;
    BottomFrame?: PrimitiveOverrideProps<FlexProps>;
    Price?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type JunkDetailProps = React.PropsWithChildren<Partial<ViewProps> & {
    junk?: any;
} & {
    overrides?: JunkDetailOverridesProps | undefined | null;
}>;
export default function JunkDetail(props: JunkDetailProps): React.ReactElement;
