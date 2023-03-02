import React, { useState } from "react";
import { Heading,Input, Button, Center, Flex, Box, Spacer} from "@chakra-ui/react";
import {addTodo, deleteAll, deleteTodo} from '../actions/index'
import { useDispatch, useSelector } from "react-redux";
import { DeleteIcon } from "@chakra-ui/icons";

const ToDo = () =>{
    const [input, setInput] = useState('')
    const getInput = (event) => {
        setInput(event.target.value)
    }
    console.log(input)
    const dispatch = useDispatch();
    const list = useSelector((state)=>state.todoReducer.list);
    return(<>
     <Heading mb={'1%'} > Suraj's ToDo Web App </Heading>
     <Center>
     <Input width={'30%'} placeholder='Add your new todo' borderWidth={'5px'} size={'lg'} 
     value={input}
     onChange={getInput}
     />
     <Button onClick={()=>dispatch(addTodo(input),setInput(''))} size={'lg'} borderWidth={'5px'} ml={'1%'} bg={'whatsapp.500'} fontWeight={'extrabold'} >Add</Button>
     </Center>
     { list.map((el)=>
     <Center mt={'1%'} key={el.id} >
     <Flex minWidth='max-content' alignItems='center' gap='2' borderWidth={'3px'} width={'30%'}>
     <Box p='2'>
     <Heading size='md'>{el.todo}</Heading>
     </Box>
     <Spacer />
     <Button onClick={()=>dispatch(deleteTodo(el.id))} colorScheme='red'><DeleteIcon/></Button>
     </Flex>
     </Center>
     )
     }
          <Button mt={'1%'} onClick={()=>dispatch(deleteAll())} colorScheme='red'>Delete All Todos</Button>
    </>)
}
export default ToDo;