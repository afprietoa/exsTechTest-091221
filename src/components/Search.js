import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { searchAsyn } from '../actions/actionClothes';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormStyles = styled.form`
    margin-left: 200px;
    color: white;
    
`

export const Search = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues:{
            search: ''
        },
        validationSchema: Yup.object({
          search: Yup.string().required()
        }),
        onSubmit: ({search}) => {
            dispatch(searchAsyn(search))
           // console.log(search)
        }
    })

    return (
        <div>
            <FormStyles onSubmit={formik.handleSubmit}>
               <input 
               name="search" 
               onChange={formik.handleChange}
               className="inputSearch" />
               <button type="submit" className="btn btn-outline-dark">Search</button>
            </FormStyles>
        </div>
    )
}
