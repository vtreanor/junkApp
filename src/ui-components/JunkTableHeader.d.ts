/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type JunkTableHeaderOverridesProps = {
    JunkTableHeader?: PrimitiveOverrideProps<FlexProps>;
    ImageFrame?: PrimitiveOverrideProps<FlexProps>;
    Image?: PrimitiveOverrideProps<TextProps>;
    HeaderFrame?: PrimitiveOverrideProps<FlexProps>;
    Header?: PrimitiveOverrideProps<TextProps>;
    BodyFrame?: PrimitiveOverrideProps<FlexProps>;
    Body?: PrimitiveOverrideProps<TextProps>;
    PriceFrame?: PrimitiveOverrideProps<FlexProps>;
    Price?: PrimitiveOverrideProps<TextProps>;
    DateFrame?: PrimitiveOverrideProps<FlexProps>;
    Date?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type JunkTableHeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: JunkTableHeaderOverridesProps | undefined | null;
}>;
export default function JunkTableHeader(props: JunkTableHeaderProps): React.ReactElement;
