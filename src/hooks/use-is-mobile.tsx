import {useEffect, useState} from "react"

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)") // sm en Tailwind
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    
    setIsMobile(mediaQuery.matches)
    
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])
  
  return isMobile
}
