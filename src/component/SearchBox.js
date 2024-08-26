import React, {useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";

const SearchBox = () => {

    let [keyword, setKeyword] = useState('');
    let dispatch = useDispatch();
    const search = (e) => {
        e.preventDefault();
        dispatch({type: 'SEARCH', payload:{keyword}});
    }

    return (
        <Form onSubmit={search}>
        <Row className={'mt-4'}>
            <Col lg={10}>
                <Form.Control type={'text'} placeholder={'이름'} onChange={(event)=>setKeyword(event.target.value)}/>
            </Col>
            <Col lg={2}>
                <Button type={'submit'}>찾기</Button>
            </Col>
        </Row>
        </Form>
    );
};

export default SearchBox;