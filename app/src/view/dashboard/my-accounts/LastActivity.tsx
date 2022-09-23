import { formatDistance } from "date-fns";
import { useEffect, useState } from "react";

type Props = {
    updatedAt: Date;
}

export default function LastActivity(props: Props) {

    const [, setC] = useState<Date>(new Date());

    useEffect(() => {
        setInterval(() => setC(new Date()), 5000);
    }, []);

    return (
        <p>
            {`Last activity ${formatDistance(new Date(props.updatedAt), new Date(Date.now()))} ago`}
        </p>
    )
}