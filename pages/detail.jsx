import React from 'react';
import Navbarr from './component/navbarr';
import { useRouter } from 'next/router';
import { Col, Image, Row } from 'react-bootstrap';

const detail = () => {
    const router = useRouter();
    const datas = router.query;

  return (
    <>
      <Navbarr />
      <div>
        <h6 className='title'>{datas.title}</h6>
        <p className='penulis'>Penulis: {datas.author}</p>
        <Row>
          <Col sm="6">
            <Image src={datas.image} className="image"/>
          </Col>
          <Col sm="4">
            <p className='content'>{datas.content}</p>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default detail