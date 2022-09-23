import { Form, Input } from "antd";
import { AiOutlineMobile } from "react-icons/ai";
import { useProcessCommonFormProps } from "../../hooks/form/useProcessCommonFormProps";
import { IFormProps } from "./IFormProps";

type Props = IFormProps<string>;

export default function TwoFactorAuthCodeFormItem(props: Props) {

    const itemProps = useProcessCommonFormProps('twoFactorAuthCode', props)

    return (
        <Form.Item
            {...itemProps.formItem}
        >
            <Input
                type='text'
                maxLength={6}
                minLength={6}
                prefix={<AiOutlineMobile />}
                {...itemProps.dataInput}
            />
        </Form.Item>
    );
}