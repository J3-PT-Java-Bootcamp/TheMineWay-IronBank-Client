import { Form, Input } from "antd";
import { AiOutlineUser } from "react-icons/ai";
import { useProcessCommonFormProps } from "../../../hooks/form/useProcessCommonFormProps";
import { IFormProps } from "../IFormProps";

type Props = IFormProps<string>;

export default function LastNameFormItem(props: Props) {

    const itemProps = useProcessCommonFormProps('lastName', props);

    return (
        <Form.Item
            {...itemProps.formItem}
        >
            <Input
                type='text'
                prefix={<AiOutlineUser/>}
                maxLength={50}
                {...itemProps.dataInput}
            />
        </Form.Item>
    );
}