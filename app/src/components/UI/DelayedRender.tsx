import { useEffect, useState } from "react";

type Props = {
    delay?: number;
    children: JSX.Element | JSX.Element[];
}

export default function DelayedRender(props: Props) {

    const [render, setRender] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setRender(true);
        }, props.delay ?? 100);

        // eslint-disable-next-line
    }, []);

    if(!render) return null;

    return (
        <div>
            {props.children}
        </div>
    );
}