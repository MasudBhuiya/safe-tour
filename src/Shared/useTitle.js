import { useEffect } from "react";

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Safe Tour | ${title}`;
    },[title])
}

export default useTitle;