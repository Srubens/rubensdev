function MiniTag({ title, icon: Icon }) { 
    return (
        <div className="max-w-mini-card h-14 gap-2 flex items-center justify-center bg-white px-4 py-3 border-2 rounded-full border-gray-500 mb-4">
            <div className="w-8 h-8 bg-purple-primary flex items-center justify-center rounded-3xl text-white text-xl">
                {Icon && <Icon />}  
            </div>
            <h5 className="text-gray-900 uppercase">{title}</h5>
        </div>
    );
}

export default MiniTag;
