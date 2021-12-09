import React, {useEffect} from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { registerClotheAsync } from '../actions/actionClothes';
import { useDispatch } from 'react-redux';
import { fileUpload } from '../helpers/FileUpload';
import { List } from './List';
import { listClotheAsync } from '../actions/actionClothes';

const Input = styled.input`
    background-color: #252827;
    color: withe;
`

export const Clothes = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listClotheAsync())
     }, [ dispatch])

    const formik = useFormik({
        initialValues: {
            url: "",
            nombre: "",
            precio: 0,
            descripcion: ""
        },
        onSubmit: (data) => {
            dispatch(registerClotheAsync(data))
        },

    })

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChanged = (e) => {
        const file = e.target.files[0];
        fileUpload(file)
            .then(response => {
                formik.initialValues.url = response
                console.log(response);
            })
            .catch(error => {
                console.log(error.message);
            })
    }


 

    return (
        <div>
            <div className="container mt-5">

                <hr />
                <div className="row">

                    <div div className="col-9">
                        <h3 className="text-center"> Clothes </h3>

                        <form className="form-group" onSubmit={formik.handleSubmit}>
                            <input
                                id="fileSelector"
                                type="file"
                                className="form-control "
                                placeholder="url image"
                                name="url"
                                style={{ display: 'none' }}
                                onChange={handleFileChanged}
                                required />

                            <button
                                className="btn btn-dark"
                                onClick={handlePictureClick}
                                type="button">Imagen</button>

                            <input
                                type="text"
                                className="form-control mt-2"
                                name="nombre"
                                autoComplete="off"
                                placeholder="name"
                                onChange={formik.handleChange}
                                required />

                            <input
                                type="text"
                                className="form-control mt-2"
                                name="precio"
                                autoComplete="off"
                                placeholder="price"
                                onChange={formik.handleChange}
                                required />

                            <textarea
                                className="form-control mt-2"
                                autoComplete="off"
                                name="descripcion"
                                placeholder="description"
                                onChange={formik.handleChange}
                                required
                            ></textarea>

                            <div className="d-grid gap-2 mx-auto mt-2">
                                <Input
                                    value="Save"
                                    type="submit"
                                    className="btn btn-outline-dark"
                                />
                            </div>
                        </form>
                    </div>
                        <List/>
                </div>
            </div>
        </div>
    )
}
