import React from 'react';
import {Col, Row} from "react-bootstrap";

const ContactItem = ({item}) => {
    return (
        <div>
            <Row className={'mt-2'}>
                <Col lg={2}>
                    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV0zscYTnOxutaPDaZ9Un0Ak-y0yR8jw40qA&s'} alt={''} width={50}/>
                </Col>
                <Col lg={10}>
                    <div>
                        {item.name}
                    </div>
                    <div>
                        {item.phone}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ContactItem;