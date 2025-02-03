function TitleParagrap({title, children}) {
    return (
        <div className="flex flex-col @laptop:flex-row justify-between items-center" >
            <div className="max-w-72" >
                <h4 className="font-semibold text-2xl text-gray-900 font-poppins mb-7" >
                    {title}
                </h4>
            </div>
            <div className="w-full max-w-96 flex items-center justify-center @laptop:items-start @laptop:justify-end" >
                {children}
            </div>
        </div>
    );
}

export default TitleParagrap;