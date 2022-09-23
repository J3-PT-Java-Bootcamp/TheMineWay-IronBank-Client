import { Button, ButtonProps } from "antd"

type Props = Omit<ButtonProps, 'htmlType'>;

export default function SubmitButton(props: Props) {
    return (
        <Button
            {...props}
            htmlType="submit"
        />
    );
}