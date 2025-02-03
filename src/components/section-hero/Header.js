import ContainerGrid from "@/components/ContainerGrid";
import Image from "next/image";
import Link from "next/link";
import logo from '@/assets/logo.png'

function Header() {
    const itensLink = [
        'Quem sou',
        'Projetos',
        'Contato',
    ]
    return (
        <header className="p-8" >
            <ContainerGrid className="flex flex-col items-center @laptop:flex-row @laptop:justify-between @laptop:items-center" >
                <div>
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="logo"
                        />
                    </Link>
                </div>
                <div className="w-auto @laptop:w-header-grid" >
                    <nav className="flex gap-12 flex-col @laptop:justify-end @laptop:flex-row opacity-0 @laptop:opacity-100" >
                        {itensLink.map((link, index) =>(
                            <li key={index}>
                                <Link href="#">
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