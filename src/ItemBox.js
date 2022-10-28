import "./ItemBox.css"

/*
What is in an ItemBox?
Project Name:
Date:
Summary:
Short Description:
*/

function ItemBox(props){
    return(
        <div className = "ItemBox-Layout">
            <div className = "ItemBox-Container">
                <div className = "ProjectName">
                    {props.ProjectName}
                </div>
                <div className = "Date">
                    {props.Date}
                </div>
                <div className = "Summary">
                    {props.Summary}
                </div>
                <div className = "ShortDescription">
                    {props.ShortDescription}
                </div>
            </div>
        </div>
    )
}

const project1 = {
    ProjectName: "Discord Bot",
    Date: "06/2022 - 06/2022",
    Summary: "A short project to get used to interacting with APIs, Scalable Databases, and SQL.",
    ShortDescription: ["1","2"]
}



export default ItemBox;

export {project1}