import React,{ useState } from "react";

export default LeadDialog({handleClose, show}){
    const [member, setMember] = useState("");

    const sendConfirm = () => handleClose(true,member);
    const sendCancel = () => handleClose(false, null);
    
}