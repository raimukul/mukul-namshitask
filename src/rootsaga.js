import {all,takeLatest, call, put, fork} from 'redux-saga/effects'
import axios from 'axios'

function* onFetchProduct(){
    yield takeLatest("ADD_TO_PRODUCT_START", function* (){
        const {data} = yield axios.get('https://fakestoreapi.com/products')
        yield console.log(data);
        yield put({type: 'ADD_TO_PRODUCTS_SUCCESS', payload: data});
    })
}


function* productImportSaga(){
    yield all([call(onFetchProduct)])
}

export default function* rootsaga(){
    yield all([fork(productImportSaga)])
}