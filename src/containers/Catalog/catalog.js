import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

// import { Button } from 'react-bootstrap';
import { FlexRow ,Button } from '../../components/CommonComponents';
import Imag1  from '../../shared/hp.jpg';
import Imag2  from '../../shared/hp2.jpg';
import Imag3  from '../../shared/hp5.jpg';
import Imag4  from '../../shared/hp4.jpg';
import Imag5  from '../../shared/hp6.jpg';
import Imag6  from '../../shared/hp7.jpg';
import Imag7  from '../../shared/hp8.jpg';



const CardTitle = styled.h3`
    text-align:center;
    
`;
const CardText = styled.h5`
    text-align:center;
    font-weight:0;
`;
const CardImage = styled.img`
align-items: center;
justify-content: center;
margin-left: auto;
margin-right: auto;
display: flex
`;

export const Catalog = () => {
    return (
      <>
        <FlexRow>
        <Card style={{ width: '18rem' }}>
          <CardImage variant="top" src={ Imag1}  />
            <Card.Body>
              <CardTitle>Harry potter Book 01</CardTitle>
              <CardText>
              Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard
              </CardText>
              <Button  variant="outline-primary">More Details</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <CardImage variant="top" src={ Imag2}  />
            <Card.Body>
              <CardTitle>Harry potter Book 02</CardTitle>
              <CardText>
              Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard
              </CardText>
              <Button  variant="outline-primary">More Details</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <CardImage variant="top" src={ Imag3}  />
            <Card.Body>
              <CardTitle>Harry potter Book 03</CardTitle>
              <CardText>
              Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard
              </CardText>
              <Button  variant="outline-primary">More Details</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <CardImage variant="top" src={ Imag4}  />
            <Card.Body>
              <CardTitle>Harry potter Book 04</CardTitle>
              <CardText>
              Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard
              </CardText>
              <Button  variant="outline-primary">More Details</Button>
          </Card.Body>
        </Card>

</FlexRow>
<FlexRow>
           
<Card style={{ width: '18rem' }}>
          <CardImage variant="top" src={ Imag5}  />
            <Card.Body>
              <CardTitle>Harry potter Book 05</CardTitle>
              <CardText>
              Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard
              </CardText>
              <Button  variant="outline-primary">More Details</Button>
          </Card.Body>
        </Card>
  <Card style={{ width: '18rem' }}>
          <CardImage variant="top" src={ Imag6}  />
            <Card.Body>
              <CardTitle>Harry potter Book 06</CardTitle>
              <CardText>
              Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard
              </CardText>
              <Button  variant="outline-primary">More Details</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <CardImage variant="top" src={ Imag7}  />
            <Card.Body>
              <CardTitle>Harry potter Book 07</CardTitle>
              <CardText>
              Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard
              </CardText>
              <Button  variant="outline-primary">More Details</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <CardImage variant="top" src={ Imag1}  />
            <Card.Body>
              <CardTitle>Harry potter Book 08</CardTitle>
              <CardText>
              Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard
              </CardText>
              <Button  variant="outline-primary">More Details</Button>
          </Card.Body>
        </Card>

</FlexRow>
</>
        
      );
 };
 
 export default Catalog;