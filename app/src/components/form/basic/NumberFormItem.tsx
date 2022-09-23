import { Form, Input } from "antd";
import { AiOutlineNumber } from "react-icons/ai";
import { useProcessCommonFormProps } from "../../../hooks/form/useProcessCommonFormProps";
import { IFormProps } from "../IFormProps";

type Props = IFormProps<string>;

export default function NumberFormItem(props: Props) {

    const itemProps = useProcessCommonFormProps('number', props);

    return (
        <Form.Item
            {...itemProps.formItem}
        >
            <Input
                type='number'
                prefix={<AiOutlineNumber/>}
                maxLength={128}
                {...itemProps.dataInput}
            />
        </Form.Item>
    );
}