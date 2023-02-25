import React from "react";
import { Heading,Input } from "@chakra-ui/react";

const ToDo = () =>{
    return(<>
     <Heading mb={'1%'} > Suraj's ToDo Web App </Heading>
     <Input width={'50%'} placeholder='Add your new todo' borderWidth={'5px'} size={'lg'} />
    </>)
}
export default ToDo;