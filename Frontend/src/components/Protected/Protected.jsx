import { storeContext } from '@/Context/Store';
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';


const Protected = ({Component}) => {
  const navigate = useNavigate();
  const {token}=useContext(storeContext)

  useEffect(() => {
    if (!token) {
      if (window.location.pathname === "/") return;
      toast("You are not logged in, please login to continue");
      navigate("/");
    } else {
      toast({ description: "You are logged in successfully" });
    }
  }, []);
  return <Component />;
}

export default Protected