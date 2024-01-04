/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, IconProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type JunkBarOverridesProps = {
    JunkBar?: PrimitiveOverrideProps<FlexProps>;
    "Frame 5"?: PrimitiveOverrideProps<FlexProps>;
    "Amplify Mark"?: PrimitiveOverrideProps<ViewProps>;
    Union?: PrimitiveOverrideProps<IconProps>;
    Home?: PrimitiveOverrideProps<ButtonProps>;
    Junk?: PrimitiveOverrideProps<ButtonProps>;
    About?: PrimitiveOverrideProps<ButtonProps>;
    Contact?: PrimitiveOverrideProps<ButtonProps>;
    Admin?: PrimitiveOverrideProps<ButtonProps>;
    actions?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type JunkBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    anchor?: String;
} & {
    overrides?: JunkBarOverridesProps | undefined | null;
}>;
export default function JunkBar(props: JunkBarProps): React.ReactElement;
