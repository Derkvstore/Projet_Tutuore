import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast";
import { get_User_Information } from '../apiCalls/acceuille'
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../redux/userSlice";


function Protected_Route ( {children} ) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let {userInfo} = useSelector(state => state.userReducer)
    let { pathname } = useLocation();

    const getUserInformation = async () => {
        let response = null;
        try {
            response = await get_User_Information();    
            if(response.success){
                dispatch(setUserInfo(response.user));
                localStorage.setItem('likesTab', JSON.stringify(response.user.liked));
                localStorage.setItem('dislikesTab', JSON.stringify(response.user.disliked));
            } else{
                localStorage.removeItem('token'); 
                toast.error(response.message);
                navigate('/login');
            }
        } 
        catch (error) {
            console.log(error)
            localStorage.removeItem('token'); 
            navigate('/login');
        }
    }

    useEffect( () => {
        if(pathname !== '/profil')
            window.scrollTo(0,0);
    }, [pathname]);

    useEffect( () => {
        if(localStorage.getItem('token')) {
            getUserInformation()
            console.log('User connecter : ');
        } else {
            toast.error('Veillez vous connecter pour acceder à cette resource');
            navigate('/login');
        }
    }, []);

    return (
        <div> 
            { userInfo && children }
        </div>
    );
}

export default Protected_Route;