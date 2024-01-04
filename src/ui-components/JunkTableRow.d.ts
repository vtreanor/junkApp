/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type JunkTableRowOverridesProps = {
    JunkTableRow?: PrimitiveOverrideProps<FlexProps>;
    RowImageframe?: PrimitiveOverrideProps<FlexProps>;
    Image?: PrimitiveOverrideProps<ImageProps>;
    RowHeaderFrame?: PrimitiveOverrideProps<FlexProps>;
    RowHeaderText?: PrimitiveOverrideProps<TextProps>;
    RowBodyFrame?: PrimitiveOverrideProps<FlexProps>;
    RowBodyText?: PrimitiveOverrideProps<TextProps>;
    RowPriceFrame?: PrimitiveOverrideProps<FlexProps>;
    RowPriceText?: PrimitiveOverrideProps<TextProps>;
    RowDateFrame?: PrimitiveOverrideProps<FlexProps>;
    RowDateText?: PrimitiveOverrideProps<TextProps>;
    RowControls?: PrimitiveOverrideProps<FlexProps>;
    DeleteButton?: PrimitiveOverrideProps<FlexProps>;
    "\uD83E\uDD86 icon \"Times\""?: PrimitiveOverrideProps<FlexProps>;
    Vector4169562?: PrimitiveOverrideProps<IconProps>;
    EditButton?: PrimitiveOverrideProps<FlexProps>;
    "\uD83E\uDD86 icon \"Alternate Pencil\""?: PrimitiveOverrideProps<FlexProps>;
    Vector4169565?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type JunkTableRowProps = React.PropsWithChildren<Partial<FlexProps> & {
    junk?: any;
    width?: String;
} & {
    overrides?: JunkTableRowOverridesProps | undefined | null;
}>;
export default function JunkTableRow(props: JunkTableRowProps): React.ReactElement;
