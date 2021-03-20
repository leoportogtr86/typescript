import React from 'react'

interface TitleValorProps {

    title: string
    numero: number

}

export default (props: TitleValorProps)=>{


    return (


        <div>

            <h1>{props.title} número {props.numero}</h1>


        </div>
    )
}