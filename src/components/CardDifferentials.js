import { TbCodeDots } from "react-icons/tb";
import { DiAtom } from "react-icons/di";
import { GrPersonalComputer } from "react-icons/gr";
import { IoCodeSlashOutline } from "react-icons/io5";
import { twMerge } from 'tailwind-merge'

function CardDifferentials({title, subtitle, children,className, ref}) {
    const defaultClass = 'max-w-sm h-auto p-8 bg-gray-100 mb-8 backface-hidden transform rotate-y-180'
    const cobinedClass = twMerge(defaultClass, className)

    const tagsIcon = [
        {component:TbCodeDots,label:'Desenvolvimento'},
        // {component:DiAtom,label:'Framework'},
        // {component:GrPersonalComputer,label:'Front-end'},
        // {component:IoCodeSlashOutline,label:'Framework'},
    ]
    /**
     * primeira div o height é de h-52 
     */
    return (
        <div
        className={cobinedClass}
        ref={ref}
        >
            <div className="flex flex-col items-start max-w-card-difeerence justify-start" >
                <div className="mb-4" >

                    {children}
                </div>
                {/* {tagsIcon.map(({component, label}, index)=>{
                    const IconComponent = component 
                    return(
                        <IconComponent
                            label={label}
                            key={index}
                            color="#030E15"
                            size="24"
                            className="mb-4"
                        />
                    )
                })} */}
                <h5 className="mb-4 text-xl text-gray-900" >{title}</h5>
                <p className="text-base text-gray-600" >{subtitle}</p>
            </div>
        </div>
    );
}

export default CardDifferentials;