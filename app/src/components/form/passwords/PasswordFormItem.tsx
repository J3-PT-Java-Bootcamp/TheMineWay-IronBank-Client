import { Form, Input } from 'antd';
import { IFormProps } from '../IFormProps';
import { MdPassword } from 'react-icons/md';
import { useProcessCommonFormProps } from '../../../hooks/form/useProcessCommonFormProps';
import { usePasswordStrength } from '../../../hooks/indicators/passwords/usePasswordStrength';
import { useState } from 'react';

type Props = IFormProps<string> & {
    showPasswordStrength?: boolean;
};

export default function PasswordFormItem(props: Props) {

    const itemProps = useProcessCommonFormProps('password', props);

    const [currentValue, setCurrentValue] = useState<string>('');

    const { StrengthIndicator } = usePasswordStrength({
        password: currentValue,
    });

    return (
        <>
            <Form.Item
                {...itemProps.formItem}
            >
                <Input.Password
                    type='password'
                    maxLength={128}
                    prefix={<MdPassword />}
                    onChange={(e) => {
                        setCurrentValue(e.target.value);
                        if (itemProps.dataInput?.onChange) itemProps.dataInput.onChange(e);
                    }}
                    {...itemProps.dataInput}
                />
            </Form.Item>
            {
                props.showPasswordStrength && <StrengthIndicator />
            }
        </>
    );
}