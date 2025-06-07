export default function Buttons(props){
    return(
        <button value={props.value}  onClick={props.onClick} className={props.className}>{props.value}  </button>
    )
}