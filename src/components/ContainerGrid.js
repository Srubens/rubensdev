import { twMerge } from 'tailwind-merge'

function ContainerGrid({children,className}) {
    const defaultClass = 'w-full max-w-grid mx-auto px-3'
    const cobinedClass = twMerge(defaultClass, className)
    return (
        <div className={cobinedClass} >
            {children}
        </div>
    );
}

export default ContainerGrid;