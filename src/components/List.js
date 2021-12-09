import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteClotheAsync } from '../actions/actionClothes';
import { Card, Button } from 'react-bootstrap'
import styled from 'styled-components';

const CartContainer = styled.div`
    display: flex; 
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
`

export const List = () => {

    const dispatch = useDispatch();

    const { clothes } = useSelector(store => store.clothe);
    //console.log(clothes)

    return (
        <>
        <CartContainer>
            
                    {


                        clothes.map((art,i) => (
                            <Card key={i}  style={{ width: '18rem', margin: '1rem' }}>
                              
                              <Card.Img variant="top" src={art.url} />
                              
                              <Card.Body className="text-center">
                                <Card.Title className="TitleCard">{art.nombre}</Card.Title>
                                <Card.Text clasName="TxtCard">
                                <p className="textCard">R$ {art.precio} <br/> {art.descripcion}</p>
                                </Card.Text>
                   
                                <Button
                                  
                                  className="btn btn-success"
                                  style={{ backgroundColor: "#d9d2e9", color: "black", borderColor: "#d9d2e9" }}
                                >Agregar
                                </Button>
                                <input
                                    value="Delete"
                                    type="button"
                                    className="btn btn-outline-dark"
                                    onClick={() => dispatch(deleteClotheAsync(art.nombre))}
                                />
                              </Card.Body>
                            </Card>
                          ))
                    }
        </CartContainer>

        </>
    )
}
