
interface PageTitleProps {
    children: string
}
export const PageTitle = (props: PageTitleProps)=>{

    return (
        <div  style={{margin: "3vh", }}><h2> {props.children}</h2> </div>
    )
}