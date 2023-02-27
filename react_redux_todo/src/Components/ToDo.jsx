import React, { useState } from "react";
import { Heading,Input, Button, Center} from "@chakra-ui/react";
import {addTodo} from '../actions/index'
import { useDispatch } from "react-redux";

const ToDo = () =>{
    const [input, setInput] = useState('')
    const getInput = (event) => {
        setInput(event.target.value)
    }
    console.log(input)
    const dispatch = useDispatch();
    return(<>
     <Heading mb={'1%'} > Suraj's ToDo Web App </Heading>
     <Center>
     <Input width={'30%'} placeholder='Add your new todo' borderWidth={'5px'} size={'lg'} 
     value={input}
     onChange={getInput}
     />
     <Button onClick={()=>dispatch(addTodo(input),setInput(''))} size={'lg'} borderWidth={'5px'} ml={'1%'} bg={'whatsapp.500'} fontWeight={'extrabold'} >Add</Button>
     </Center>
    </>)
}
export default ToDo;