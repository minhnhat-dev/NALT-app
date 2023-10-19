"use client";

import React from 'react'
import Image from 'next/image'
import {ItemList,
    ItemStyled,
    ItemInfo,
    ItemName,
    ItemDay,
    ItemValue} from "./Item.styled"

type ItemProps = {
    image: string,
    name: string,
    day:string,
    value:string
}

const Item =({image, name , day , value} :ItemProps)=>{
    return (
        <ItemList>
            <ItemStyled>
               <Image src={image} alt={name} width={30} height={30}/>
                <ItemInfo>
                    <ItemName>{name}</ItemName>
                    <ItemDay>{day}</ItemDay>
                </ItemInfo>
               <ItemValue>{value}</ItemValue>
            </ItemStyled>
        </ItemList>
    )
}

export default Item
