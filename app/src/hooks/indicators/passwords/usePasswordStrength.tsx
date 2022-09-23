import { Progress } from "antd";
import { passwordStrength, Result as PasswordStrengthResult } from 'check-password-strength';
import { useEffect, useState } from "react";

type Options = {
    password: string;
}

export function usePasswordStrength(options: Options) {

    const [strengthResult, setStrengthResult] = useState<PasswordStrengthResult<string>>();

    useEffect(() => {
        setStrengthResult(passwordStrength(options.password));
    }, [options.password]);

    const barStatus: ("exception" | "normal" | "success" | "active")[] = [
        "exception",
        "exception",
        "normal",
        "success"
    ];

    return {
        StrengthIndicator: () => (
            <Progress
                percent={Math.ceil((strengthResult?.id ?? 0) * 33.3)}
                showInfo={false}
                status={barStatus[strengthResult?.id ?? 0]}
            />
        )
    }
}