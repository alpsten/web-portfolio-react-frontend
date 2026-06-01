import type { ReactNode } from "react";

export default function SectionCard({ children, after }: { children: ReactNode; after?: ReactNode }) {
    return (
        <div className="slide">
            <div className="container">{children}</div>
            {after}
        </div>
    );
}
