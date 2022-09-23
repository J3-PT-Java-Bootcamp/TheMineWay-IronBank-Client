import { Card, Col, Row, Space, Tag } from "antd";
import { formatDistance } from "date-fns";
import useMyAccounts, { AccountType } from "../../../hooks/api/accounts/useMyAccounts"

type Props = {
    accountType: AccountType;
}

export type AccountModel = {
    id: number;
    balance: {
        currency: 'EUR';
        amount: number;
    };
    primaryOwner: {
        id: number;
    };
    createdAt: Date;
    updatedAt: Date;
}

export default function AccountCard(props: Props) {

    const { OnFetchFinished } = useMyAccounts(props.accountType);

    const getAccountTypeTag = () => {
        switch (props.accountType) {
            case AccountType.checking: return <Tag color="purple">Checking</Tag>;
            case AccountType.credit: return <Tag color="cyan">Credit</Tag>;
            case AccountType.savings: return <Tag color="orange">Savings</Tag>;
            case AccountType.studentChecking: return <Tag color="blue">Student checking</Tag>;
        }
    }

    return (
        <OnFetchFinished
            render={(result) => (
                <>
                    {
                        result.data.map((account, i) => (
                            <Col
                                key={`${i}-${props.accountType}`}
                                xs={24}
                                md={12}
                            >
                                <Card
                                    hoverable
                                    title={(
                                        <Space>
                                            <Tag
                                                color={account.balance.amount >= 0 ? 'green' : 'red'}
                                            >
                                                {account.balance.amount} {account.balance.currency}
                                            </Tag>
                                            {getAccountTypeTag()}
                                        </Space>
                                    )}
                                    extra={(
                                        <>
                                            {`Last activity ${formatDistance(new Date(account.updatedAt), new Date(Date.now()))} ago`}
                                        </>
                                    )}
                                >
                                    <p>Account ID: <b>{account.id}</b></p>
                                </Card>
                            </Col>
                        ))
                    }
                </>
            )}
        />
    );
}