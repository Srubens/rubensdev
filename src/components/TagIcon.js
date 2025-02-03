import { TbCodeDots } from "react-icons/tb";
import { DiAtom } from "react-icons/di";
import { GrPersonalComputer } from "react-icons/gr";
import { IoCodeSlashOutline } from "react-icons/io5";
function TagIcon({title, color, icon:Icon}) {

    const tagsIcons = [
        {component:TbCodeDots,label:'Desenvolvimento'},
        // {component:DiAtom,label:'Framework'},
        // {component:GrPersonalComputer,label:'Front-end'},
        // {component:IoCodeSlashOutline,label:'Framework'},
    ]

    return (
        <div className="w-full" >

            <div className="max-w-tag-icon h-14 py-4 px-8 bg-white/10 flex flex-row items-center justify-center gap-2 text-white " >
                    {Icon && <Icon color={color} />}  
                    {/* {tagsIcons.map(({component, label}, index) =>{
                        const IconComponent = component
                        return(
                            <IconComponent 
                            color={color} 
                            size={24} 
                            key={index}
                            label={label}
                            />
                        )
                    })} */}
                <h4 className="uppercase" >{title}</h4>
            </div>
        </div>
    );
}

export default TagIcon;