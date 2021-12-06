import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {sampleAction} from '../actions/templateActions'

function Sample() {

    const count = useSelector(state => state.templateReducer.count)
    const dispatch = useDispatch()

    //componentDidMount if dependency list is empty
    useEffect(() => {

        //component did unmount used as a cleanup function
        // return () => {
        //     cleanup
        // }
    }, [])

    return (
        <>
            <h1>Redux Template</h1>

            <h3>{count}</h3>
            <button onClick={()=>dispatch(sampleAction(3))}>Click to increment/change global state</button>
        </>
    )
}

export default Sample
