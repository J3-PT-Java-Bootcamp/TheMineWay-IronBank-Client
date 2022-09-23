import { Form, Input } from "antd";
import { useProcessCommonFormProps } from "../../hooks/form/useProcessCommonFormProps";
import { IFormProps } from "./IFormProps";


type Props = IFormProps<string>;

export default function ColorFormItem(props: Props) {

    const itemProps = useProcessCommonFormProps('color', props)

    return (
        <Form.Item
            {...itemProps.formItem}
        >
            <Input
                type='color'
                maxLength={6}
                minLength={6}
                {...itemProps.dataInput}
            />
        </Form.Item>
    );
}