import { Form, Input } from "antd";
import { AiOutlineMail } from "react-icons/ai";
import { useProcessCommonFormProps } from "../../../hooks/form/useProcessCommonFormProps";
import { IFormProps } from "../IFormProps";

type Props = IFormProps<string>;

export default function EmailFormItem(props: Props) {

    const itemProps = useProcessCommonFormProps('email', props);

    return (
        <Form.Item
            {...itemProps.formItem}
        >
            <Input
                type='email'
                prefix={<AiOutlineMail/>}
                maxLength={128}
                {...itemProps.dataInput}
            />
        </Form.Item>
    );
}