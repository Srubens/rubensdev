import Image from "next/image";
import ContainerGrid from "../ContainerGrid";
import logo from '@/assets/logo.png'

function Footer() {
    return (
        <div className="p-12" >
            <ContainerGrid className="flex flex-col @laptop:flex-row justify-between items-center gap-2" >
                <div className="mb-2" >
                    <Image
                        src={logo}
                        alt={logo}
                        className="w-full"
                    />
                </div>
                <div className="flex @laptop:justify-end text-center @laptop:text-left" >
                    <p className="text-sm" >
                    Copyrith 2025 &copy; - Todos os direitos reservado.
                    </p>
                </div>
            </ContainerGrid>
        </div>
    );
}

export default Footer;