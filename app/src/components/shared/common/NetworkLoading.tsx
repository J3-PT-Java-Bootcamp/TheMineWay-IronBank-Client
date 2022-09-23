import Loading from "../common/Loading";

type Props = {
    url?: string;
}

export default function NetworkLoading(props: Props) {
    return (
        <>
            <Loading/>
        </>
    );
}