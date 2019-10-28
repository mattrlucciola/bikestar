import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';

import StateCard from './state/StateCard';
import TrailCard from './trail/TrailCard';

export default function ModelItemsList({model, search}){
    const [modelItemsArr, setModelItemsArr] = useState([]);
    const [cardList, setCardList] = useState([]);

    useEffect(() => {
        const buildModelItemsArr = async () => {
            let query = `/api/${model}s/`;
            try {
                let response = await axios.get(query);
                setModelItemsArr([...response.data[`${model}s`]]);
            }
            catch (error) {console.log('ERROR', error)}
        }
        buildModelItemsArr();
    },[model])
    useEffect(() => {
        const buildCardList = () => {
            let localCardList = modelItemsArr.map((modelItem, idx) => {
                let regex = new RegExp(`^${search}`, 'i')
                if (model === 'trail'){
                    if (!!modelItem.name.match(regex) || !!modelItem.state.match(regex) || !!modelItem.city.match(regex)){
                        let trail = modelItem;
                        console.log(trail);
                        
                        return <TrailCard trailObj={trail} key={`${model}-${idx}`} />
                    }
                } else if (model === 'state') {
                    if (!!modelItem.city.match(regex) || !!modelItem.state.match(regex)){
                        let state = modelItem;
                        return <StateCard stateObj={state} key={`${model}-${idx}`} />
                    }
                }
                return ''
            })
            setCardList([...localCardList])
        }
        buildCardList()
    },[modelItemsArr, search])
    return(
        <div className={`${model}-list`} >
            {(model === 'trail') && <Link to='/trails/new'>Create New Trail</Link>}
            <div className="model-title">{model === 'trail' ? 'Trail': "State"}s</div>
            <div className="card-list">{cardList}</div>
        </div>
    )
}