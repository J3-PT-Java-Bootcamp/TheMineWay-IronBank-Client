import { Checkbox, CheckboxProps, Form } from "antd";
import { IFormProps } from "./IFormProps";

type Props = IFormProps<boolean, CheckboxProps> & {
    label?: string;
};

export default function CheckboxFormItem(props: Props) {
    return (
        <Form.Item
            {...props.formItem}
            valuePropName={props.formItem?.valuePropName ?? 'checked'}
        >
            <Checkbox
                {...props.dataInput}
            >
                {props.label}
            </Checkbox>
        </Form.Item>
    );
}