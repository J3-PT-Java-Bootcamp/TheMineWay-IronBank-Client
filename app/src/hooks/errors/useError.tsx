import { Col, notification, Row } from "antd";

export type Error = {
    statusCode: number;
}

export function useError() {

    return {
        showError: (error: Error) => {
            notification.error({
                message: "Error",
                description: (
                    <Row>
                        <Col>
                            <p>{"S'ha roto algo"}</p>
                        </Col>
                        <Col>
                            <img
                                src={`https://http.cat/${error.statusCode}`}
                                alt="error_image"
                                style={{
                                    width: '100%'
                                }}
                            />
                        </Col>
                    </Row>
                ),
            });
        },
        showCustomError: (code: string) => {
            notification.error({
                message: "Error",
                description: "An error has occurred",
            });
        },
    }
}