import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '@mui/material/Button';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import AccountBoxSharpIcon from '@mui/icons-material/AccountBoxSharp';
import WorkSharpIcon from '@mui/icons-material/WorkSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import './Nav.css';
const Nav=()=>{
    return(
        <>
        <nav>
            <ul>
                <li>
                <Button className='btn-common iconBtn'><span className='title'>Home</span> <span className= 'icon d-flex align-items-center justify-content-center'><HomeSharpIcon/></span></Button>
                </li>
                <li>
                <Button className='btn-common iconBtn'><span className='title'>About</span> <span className= 'icon d-flex align-items-center justify-content-center'><AccountBoxSharpIcon/></span></Button>
                </li>
                <li>
                <Button className='btn-common iconBtn'><span className='title'>Portfolio</span> <span className= 'icon d-flex align-items-center justify-content-center'><WorkSharpIcon/></span></Button>
                </li>
                <li>
                <Button className='btn-common iconBtn'><span className='title'>Contact</span> <span className= 'icon d-flex align-items-center justify-content-center'><EmailSharpIcon/></span></Button>
                </li>
                <li>
                <Button className='btn-common iconBtn'><span className='title'>Blog</span> <span className= 'icon d-flex align-items-center justify-content-center'><QuestionAnswerIcon/></span></Button>
                </li>
            </ul>
        </nav>
        </>
    )
}
export default Nav;