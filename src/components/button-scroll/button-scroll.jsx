import React , {useEffect , useState} from "react";

//styling
import "./button-scroll.scss";

//react-icons
import {AiOutlineArrowUp} from "react-icons/ai";




const ScrollUp= () => {

    const [scroll , setScroll] = useState(false);

    const handleScroll = ()=> {
        const offset=window.scrollY;
        if(offset > 500 ){
          setScroll(true);
        }
        else{
          setScroll(false);
        }
      }
    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
      })

    return (

     scroll?   (<div className="scroll-up" onClick={()=>  window.scrollTo(0,0)}>
            <AiOutlineArrowUp className="icon-up"></AiOutlineArrowUp>
        </div>) : null 
    )
}

export default ScrollUp;