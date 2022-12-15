import { useEffect , useState } from "react";

export default function useOnScreen(ref) {
    const [isIntersecting, setIntersecting] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting);
                console.log(entry.intersectionRatio)
                if(entry.intersectionRatio >= 0.5) {
                    observer.unobserve(ref.current);
                }
            },
            {
                threshold: 0.5,
            }
        )
        observer.observe(ref.current)
        // Remove the observer as soon as the component is unmounted
        return () => { observer.disconnect() }
    }, [])

    return isIntersecting
}