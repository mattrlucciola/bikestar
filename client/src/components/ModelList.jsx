import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StateCard from './state/StateCard';
import TrailCard from './trail/TrailCard';
export default function ModelItemsList({model, search}){
    const [modelItemsArr, setModelItemsArr] = useState([]);
    const buildModelItemsArr = async () => {
        let query = `/api/${model}s/`
        try {
            let response = await axios.get(query);
            setModelItemsArr([...response.data]);
        }
        catch (error) {console.log('ERROR', error)}
    }
    useEffect(() => {
        buildModelItemsArr();
    },[model])
    
    // console.log(trails, model);
    console.log(model, modelItemsArr);
    
    // let modelItemsArr = model==='trail' ? trails : cities;

    return(
        <div className={`${model}-list`} >
            {model}
            {modelItemsArr.map((modelItem, idx) => {
                let regex = new RegExp(`^${search}`, 'i')
                if (model === 'trail'){
                    if (!!modelItem.name.match(regex) || !!modelItem.state.match(regex) || !!modelItem.city.match(regex)){
                        let trail = modelItem;
                        return <TrailCard trailObj={trail} key={`${model}-${idx}`} />
                    }
                } else if (model === 'state') {
                    if (!!modelItem.name.match(regex) || !!modelItem.state.match(regex)){
                        let state = modelItem;
                        return <StateCard stateObj={state} key={`${model}-${idx}`} />
                    }
                }
            })}
        </div>
    )
}