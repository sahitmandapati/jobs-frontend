import { useState } from "react";

export default function useAccountType(){

    const [accountType, setAccountType] = useState(JSON.parse(sessionStorage.getItem('accountType')))

    const saveAccountType = userAccountType => {
        sessionStorage.setItem('accountType', JSON.stringify(userAccountType));
        setAccountType(userAccountType);
      };
    
      return {
        setAccountType: saveAccountType,
        accountType
      }
}