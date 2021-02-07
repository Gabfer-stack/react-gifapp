import React from 'react'
import { useFetchGif } from '../hooks/useFetchGif'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGif(category);


    return (
        <>
            {loading && <p className="loading">Loading</p> }
            <h3 className="animate__animated animate__jello">{category}</h3>
            <div className="card-grid">
                    {
                        images.map((img) => (
                            <GifGridItem 
                                key={img.id}
                                {...img}
                            />
                        ))
                    }
            </div>
        </>
    )
}
