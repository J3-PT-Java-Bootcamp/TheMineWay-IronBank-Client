import { FormItemProps, InputProps } from "antd";

export class IFormProps<T = any, K = InputProps> {
    formItem?: FormItemProps<T>;
    dataInput?: K;
}