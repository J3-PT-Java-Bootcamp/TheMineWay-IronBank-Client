import './VerticalMiddleAlign.css';

type Props = {
    children: JSX.Element | JSX.Element[];
}

export default function VerticalMiddleAlign(props: Props) {
    return (
        <div
            className='vertical-middle-align'
        >
            {props.children}
        </div>
    );
}