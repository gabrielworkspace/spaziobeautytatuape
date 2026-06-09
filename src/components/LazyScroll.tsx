import { useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

interface LazyScrollProps {
    children: ReactNode;
    minHeight?: string;
}

export default function LazyScroll({ children, minHeight = '50vh' }: LazyScrollProps) {
    const [hasIntersected, setHasIntersected] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (hasIntersected) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasIntersected(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px 0px', threshold: 0 } // Load a bit before it enters the viewport
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [hasIntersected]);

    return (
        <div ref={ref} style={{ minHeight: hasIntersected ? 'auto' : minHeight }}>
            {hasIntersected ? children : null}
        </div>
    );
}
