import { useEffect , useState } from "react";

export default function useOnScreen(ref) {
    const [isIntersecting, setIntersecting] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting);
                if(entry.intersectionRatio >= 0.3) {
                    observer.unobserve(ref.current);
                }
            },
            {
                threshold: 0.3,
            }
        )
        observer.observe(ref.current)
        // Remove the observer as soon as the component is unmounted
        return () => { observer.disconnect() }
    }, [])

    return isIntersecting
}