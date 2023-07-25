
interface HeaderProps {
    children: string
}
export const Headers = (props: HeaderProps) => {

    
    return (
            <div>
              <h2>{props.children} </h2>  
            </div>
    );
}