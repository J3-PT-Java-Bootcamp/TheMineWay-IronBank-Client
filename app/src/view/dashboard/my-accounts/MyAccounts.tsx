import { Col, Row } from "antd";
import { AccountType } from "../../../hooks/api/accounts/useMyAccounts";
import AccountCard from "./AccountCard";

export default function MyAccounts() {

    const accoutnTypes = [AccountType.checking, AccountType.credit, AccountType.savings, AccountType.studentChecking];

    return (
        <Row
            gutter={[6, 6]}
        >
            {
                accoutnTypes.map((accountType) => (
                    <Col
                        span={24}
                    >
                        <AccountCard
                            accountType={accountType}
                        />
                    </Col>
                ))
            }
        </Row>
    );
}