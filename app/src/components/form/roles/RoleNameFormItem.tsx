import { Form, Input } from "antd";
import { useProcessCommonFormProps } from "../../../hooks/form/useProcessCommonFormProps";
import { IFormProps } from "../IFormProps";

type Props = IFormProps<string>;

export default function RoleNameFormItem(props: Props) {

    const itemProps = useProcessCommonFormProps('roleName', props)

    return (
        <Form.Item
            {...itemProps.formItem}
        >
            <Input
                type='text'
                maxLength={25}
                minLength={2}
                {...itemProps.dataInput}
            />
        </Form.Item>
    );
}