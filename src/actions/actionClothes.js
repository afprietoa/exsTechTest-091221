import  {typesClothes} from '../types/types';
import { db } from "../firebase/firebaseConfig";
import { addDoc,collection,getDocs,query,where,doc,deleteDoc} from "@firebase/firestore";

//SEARCH

export const searchAsyn = (clothe) => {

    return async(dispatch) => {
       
        const clotheCollections = collection(db,"clothes");
        const q = query(clotheCollections,where("nombre","==",clothe))
        const datos = await getDocs(q);
        //console.log(datos)
        const prenda = [];
        datos.forEach((docu) => {
            prenda.push(docu.data())
        }) 
        console.log(prenda)
        dispatch(searchSync(prenda))
    }
}


export const searchSync = (clothe) => {
    return{
        type: typesClothes.search,
        payload: clothe
    }
}

//DELETE

export const deleteClotheAsync = (name) =>{
    return async(dispatch) => {

        const estCollection = collection(db,"clothes");
        const q = query(estCollection,where("nombre","==",name))
       
        const datos = await getDocs(q);
        datos.forEach((docu) => {
            deleteDoc(doc(db,"clothes",docu.id));
        })
        dispatch(deleteSync(name));
    }
}

export const deleteSync = (name) => {
    return{
        type: typesClothes.delete,
        payload: name
    }
}


//READ

export const listClotheAsync = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "clothes"));
        const prenda = [];
        querySnapshot.forEach((doc) => {
            prenda.push({
                ...doc.data()
            })
        });
        dispatch(listSync(prenda));
    }
}

export const listSync = (clothes) => {
    return {
        type: typesClothes.list,
        payload: clothes
    }
}


//CREATE

export const registerClotheAsync = (newClothe) => {

    return(dispatch) => {

        addDoc(collection(db,"clothes"),newClothe)
        .then(resp => {
            dispatch(registerClotheSync(newClothe))
            dispatch(listClotheAsync())
        })
        .catch(error => {
            console.log(error);
        })
    }
 }

export const registerClotheSync = (clothe) => {
    return{
        type: typesClothes.register,
        payload: clothe
    }

}