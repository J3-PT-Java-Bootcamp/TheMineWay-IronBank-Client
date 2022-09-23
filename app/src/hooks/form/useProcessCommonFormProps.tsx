import { IFormProps } from "../../components/form/IFormProps";

export function useProcessCommonFormProps<T>(id: string, props: IFormProps<T>): IFormProps<T> {

    return {
        ...props,
        formItem: {
            ...props.formItem,
            label: props.formItem?.label === null || typeof props.formItem?.label === 'string' ? props.formItem?.label : id,
        },
    }
}