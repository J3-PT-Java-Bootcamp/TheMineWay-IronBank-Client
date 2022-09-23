import { useProcessCommonFormProps } from "../../../hooks/form/useProcessCommonFormProps";
import { IFormProps } from "../IFormProps";
import PasswordFormItem from "./PasswordFormItem";

type Props = IFormProps<string>;

export default function NewPasswordFormItem(props: Props) {

    const itemProps = useProcessCommonFormProps('newPassword', props);

    return (
        <PasswordFormItem
            formItem={{...itemProps.formItem}}
            dataInput={{...itemProps.dataInput}}
            showPasswordStrength
        />
    );
}