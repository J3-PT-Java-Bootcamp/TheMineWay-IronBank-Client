type Props = {
    children: JSX.Element | JSX.Element[];
}

export default function Container(props: Props) {
    return (
        <div
            className="container"
        >
            <div>
                {props.children}
            </div>
        </div>
    );
}