import ContainerGrid from "../ContainerGrid";
import TagIcon from "../TagIcon";
import { TbAutomation } from "react-icons/tb";
import { FaWordpress } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoIosGitPullRequest } from "react-icons/io";
import { DiJavascript } from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa6";
import { BsLaptop } from "react-icons/bs";

function SlideTags() {

    let tagsIcons = [
        {
            title:"Automação",
            color:"#fff",
            component:TbAutomation
        },
        {
            title:"Dev",
            color:"#fff",
            component:BsLaptop
        },
        {
            title:"Frameworks",
            color:"#fff",
            component:FaWordpress
        },
        {
            title:"Frontend",
            color:"#fff",
            component:FaReact
        },
        {
            title:"SQL",
            color:"#fff",
            component:FaDatabase
        },
        {
            title:"Javascript",
            color:"#fff",
            component:DiJavascript
        },
        {
            title:"css3",
            color:"#fff",
            component:FaCss3Alt
        },
        {
            title:"BPM",
            color:"#fff",
            component:IoIosGitPullRequest
        },
        {
            title:"Github",
            color:"#fff",
            component:FaGithub
        },
        {
            title:"Programação",
            color:"#fff",
            component:IoCodeSlashOutline
        },
    ]

    return (
        <div className="bg-purple-primary h-28 w-full p-6  " > 
        <ContainerGrid className="flex flex-row overflow-hidden " >
            <div className="flex w-max gap-4 animate-slide">
                { tagsIcons.map(({title, color, component}, index) =>(
                    <TagIcon
                        key={index}
                        title={title}
                        color={color}
                        icon={component}
                    />
                )) }
            </div>

        </ContainerGrid>
        </div>
    );
}

export default SlideTags;