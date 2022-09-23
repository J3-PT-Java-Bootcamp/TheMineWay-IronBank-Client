import { Badge, Button, Card, Col, Row } from "antd";
import { CSSProperties } from "react";
import './UtilityCard.css';

type Action = {
    onClick?: () => void;
    openPath?: string;
    text: string;
    icon?: JSX.Element;
}

type Props = {
    highlight?: {
        mode?: 'ribbon' | 'badge';
        text: string;
        color?: string;
    };
    style?: CSSProperties;
    actions?: Action[];
    bannerUrl?: string;
}

export default function UtilityCard(props: Props) {

    const BrandWrapper = (p: { children: JSX.Element | JSX.Element[] }) => {

        if (props.highlight) {
            if (props.highlight.mode === 'badge') {
                return (
                    <Badge
                        count={props.highlight.text}
                        color={props.highlight.color ?? 'gold'}
                    >
                        {p.children}
                    </Badge>
                );
            }

            return (
                <Badge.Ribbon
                    text={props.highlight.text}
                    color={props.highlight.color ?? 'gold'}
                >
                    {p.children}
                </Badge.Ribbon>
            );
        }

        return (
            <>
                {p.children}
            </>
        );
    }

    return (
        <div
            className="utility-card-wrapper"
            style={props.style}
        >
            <BrandWrapper>
                <Card
                    hoverable
                    bodyStyle={{
                        margin: 0,
                        padding: 0,
                    }}
                >
                    <Row>
                        {
                            props.bannerUrl && (
                                <Col
                                    xs={24}
                                    md={16}
                                >
                                    <img
                                        className="utility-card-banner"
                                        style={{
                                            height: `${(Math.floor((props.actions?.length ?? 1) + 1) * 3)}em`
                                        }}
                                        src={props.bannerUrl}
                                        alt={'action_' + props.bannerUrl}
                                    />
                                </Col>
                            )
                        }
                        {
                            props.actions && (
                                <Col
                                    xs={24}
                                    md={8}
                                >
                                    <Row
                                        gutter={[3, 8]}
                                        justify='end'
                                        align='middle'
                                        style={{
                                            padding: '1em',
                                            height: '100%',
                                        }}
                                    >
                                        {
                                            props.actions?.map((action, i) => (
                                                <Col
                                                    key={'utility_card_action_' + i}
                                                    span={24}
                                                >
                                                    <Button
                                                        block
                                                        icon={action.icon}
                                                        type='primary'
                                                        onClick={() => {
                                                            if (action.onClick) action.onClick();
                                                        }}
                                                    >
                                                        {action.text}
                                                    </Button>
                                                </Col>
                                            ))
                                        }
                                    </Row>
                                </Col>
                            )
                        }
                    </Row>
                </Card>
            </BrandWrapper>
        </div >
    );
}