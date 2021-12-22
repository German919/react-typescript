import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';
interface useProductArgs {
    product : Product,
    onChange? : (args:onChangeArgs)=> void,
    value?:number, 
    initialValues?: InitialValues
}

export const useProduct = ({onChange, product, value=0, initialValues}:useProductArgs) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    const isMonted = useRef(false);
 
    const increaseBy = (value: number) => {
        
        let newCounter = Math.max(counter + value, 0);

        if(initialValues?.maxCount){
            newCounter = Math.min(newCounter, initialValues?.maxCount)
        }

        setCounter(newCounter);
        onChange && onChange({count:newCounter, product});
        
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    useEffect(()=>{
        if(!isMonted.current) return;

        setCounter(value)
    },[value])

    useEffect(()=>{
        isMonted.current = true;
    },[]);
   
    return {
        counter,
        increaseBy,
        isMaxCountReached : !!initialValues?.count && initialValues?.maxCount === counter,
        maxCount: initialValues?.maxCount,
        reset
    }
}
