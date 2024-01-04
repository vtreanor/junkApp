/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type JunkCreateFormInputValues = {
    header?: string;
    body?: string;
    image?: string;
    price?: string;
    date?: string;
};
export declare type JunkCreateFormValidationValues = {
    header?: ValidationFunction<string>;
    body?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    price?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JunkCreateFormOverridesProps = {
    JunkCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    header?: PrimitiveOverrideProps<TextFieldProps>;
    body?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type JunkCreateFormProps = React.PropsWithChildren<{
    overrides?: JunkCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: JunkCreateFormInputValues) => JunkCreateFormInputValues;
    onSuccess?: (fields: JunkCreateFormInputValues) => void;
    onError?: (fields: JunkCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: JunkCreateFormInputValues) => JunkCreateFormInputValues;
    onValidate?: JunkCreateFormValidationValues;
} & React.CSSProperties>;
export default function JunkCreateForm(props: JunkCreateFormProps): React.ReactElement;
