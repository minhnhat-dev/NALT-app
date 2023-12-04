'use client'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Home from "../page";

function testPage() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  //client
  useEffect(() => {
   localStorage.getItem('user') && setIsClient(true)
  })

  //server
  if (!isClient) {
    return router.replace('/login')
  }

  return (<div><Home/></div>)
}

export default testPage;
