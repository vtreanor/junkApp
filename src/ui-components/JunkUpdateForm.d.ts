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
export declare type JunkUpdateFormInputValues = {
    header?: string;
    body?: string;
    image?: string;
    price?: string;
    date?: string;
};
export declare type JunkUpdateFormValidationValues = {
    header?: ValidationFunction<string>;
    body?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    price?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JunkUpdateFormOverridesProps = {
    JunkUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    header?: PrimitiveOverrideProps<TextFieldProps>;
    body?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type JunkUpdateFormProps = React.PropsWithChildren<{
    overrides?: JunkUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    junk?: any;
    onSubmit?: (fields: JunkUpdateFormInputValues) => JunkUpdateFormInputValues;
    onSuccess?: (fields: JunkUpdateFormInputValues) => void;
    onError?: (fields: JunkUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JunkUpdateFormInputValues) => JunkUpdateFormInputValues;
    onValidate?: JunkUpdateFormValidationValues;
} & React.CSSProperties>;
export default function JunkUpdateForm(props: JunkUpdateFormProps): React.ReactElement;
