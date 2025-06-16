function Button(props){
    return(
        <div className="flex items-center justify-center border border-white rounded-lg w-50 h-8 hover:scale-[1.05]">
            <a href={props.href} className="text-white text-xl font-kanit" download={props.download}> {props.nome}</a>
        </div>
    )
}
export default Button;