import { Form, Input } from 'antd';
import { AiOutlineUser } from 'react-icons/ai';
import { useProcessCommonFormProps } from '../../../hooks/form/useProcessCommonFormProps';
import { IFormProps } from '../IFormProps';

type Props = IFormProps<string>;

export default function LoginFormItem(props: Props) {

    const itemProps = useProcessCommonFormProps('login', props);

    return (
        <Form.Item
            {...itemProps.formItem}
            label="Login"
        >
            <Input
                type='text'
                maxLength={20}
                prefix={<AiOutlineUser />}
                {...itemProps.dataInput}
            />
        </Form.Item>
    );
}