import React from "react"
import {Link} from "react-router-dom"
import "../App.css"
export const Header = () => {
    return (
        <>
        <div className="header-simple d-flex-row border-radius-none padding-none margin-none text-white p-l">
	
        <div className="heading2 w-100 font" ><Link to={"/"}>  Instant Quiz</Link></div>
	<div className="d-flex w-100 justify-content-end">
		<Link to={"/explore"}>
        <div  className="heading-3 margin-8 btn font-color-white p-r">
        	Explore
        </div></Link>
	</div>
</div>
</>
    )
}