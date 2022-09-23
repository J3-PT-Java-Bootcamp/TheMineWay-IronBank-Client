import { Button, ButtonProps } from "antd";

type Props = ButtonProps;

export default function OkButton(props: Props) {

    return (
        <Button
            {...props}
        >
            {props.children ?? "Ok"}
        </Button>
    );
}