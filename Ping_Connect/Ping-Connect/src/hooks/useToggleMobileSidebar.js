import { useState } from "react"

const useToggleMobileSidebar=()=>{
    const [mobileSidebar,setMobileSidebar]=useState(false)
    return {mobileSidebar,setMobileSidebar}
}
export default useToggleMobileSidebar