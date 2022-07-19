import {Link} from "react-router-dom"
import "../App.css"
export const Header = () => {

    const {user,isLogin} ={user:'saniy',isLogin:true}
    return (
        <div class="header-simple d-flex-row border-radius-none padding-none margin-none text-white p-l">
	
               <div className="heading2 w-100 font" > Instant Quiz</div>
	<div class="d-flex w-100 justify-content-end">
		<div  class="heading-3 margin-8 btn font-color-white p-r">
        	Explore
        </div>
	</div>
</div>
    )
}