"use client"
import ContainerGrid from "@/components/ContainerGrid";
import Image from "next/image";
// import Link from "next/link";
import logo from '@/assets/logo.png'
import { Link } from "react-scroll";

function Header({sectionRefs}) {
    const itensLink = [
        'Inicio',
        'Quem sou',
        'Projetos',
    ]

    const scrollToSection = (index) => {
        console.log('clicou')
        sectionRefs[index]?.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header className=" p-4 @tablet:p-2 bg-gray-900 @laptop:fixed @laptop:z-10 w-full" >
            <ContainerGrid className="flex flex-col items-center @laptop:flex-row @laptop:justify-between @laptop:items-center " >
                <div>
                    <Link href="/"
                    
                    >
                        <Image
                            src={logo}
                            alt="logo"
                        />
                    </Link>
                </div>
                <div className="w-auto @laptop:w-header-grid" >
                    <nav className="flex gap-12 flex-col @laptop:justify-end @laptop:flex-row opacity-0 @laptop:opacity-100" >
                        {itensLink.map((link, index) =>(
                            <li key={index}
                             onClick={() => scrollToSection(index)}
                            >
                                <Link href="#"
                                to={`section-${index}`}
                                smooth={true}
                                duration={1000}
                                >
                                    {link}
                                </Link>
                            </li>

                        ))}
                    </nav>
                </div>
            </ContainerGrid>
        </header>
    );
}

export default Header;