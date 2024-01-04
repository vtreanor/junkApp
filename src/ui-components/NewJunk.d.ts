/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NewJunkInputValues = {
    header?: string;
    body?: string;
    image?: string;
    price?: string;
    date?: string;
};
export declare type NewJunkValidationValues = {
    header?: ValidationFunction<string>;
    body?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    price?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewJunkOverridesProps = {
    NewJunkGrid?: PrimitiveOverrideProps<GridProps>;
    header?: PrimitiveOverrideProps<TextFieldProps>;
    body?: PrimitiveOverrideProps<TextAreaFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NewJunkProps = React.PropsWithChildren<{
    overrides?: NewJunkOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NewJunkInputValues) => NewJunkInputValues;
    onSuccess?: (fields: NewJunkInputValues) => void;
    onError?: (fields: NewJunkInputValues, errorMessage: string) => void;
    onChange?: (fields: NewJunkInputValues) => NewJunkInputValues;
    onValidate?: NewJunkValidationValues;
} & React.CSSProperties>;
export default function NewJunk(props: NewJunkProps): React.ReactElement;
