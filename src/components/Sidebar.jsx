import {
    Home,
    KeyboardVoice,
    Receipt,
    MusicNote,
    TipsAndUpdates,
    ArticleOutlined,
    LocalMoviesOutlined,

    LiveTv,
    CreditCard,
    Message,
    Tune,
    LocationOn
} from '@mui/icons-material'
import {useNavigate} from 'react-router-dom'
import {useState} from "react";


const Sidebar = () => {

    // keeping track of active page
    const [active, setActive] = useState(0)
    const nav = useNavigate()







    return (
        <>
            <div className="is-flex is-flex-direction-column is-justify-content-start rightmenu p-3 my-3 ">


                <div className={`dashboard__menu ${active === 0 && 'dashboardActive'}`} onClick={() => {
                    nav('/admin');
                    setActive(0)
                }}>

                    <Home/>
                    <h3>داشبورد</h3>
                </div>

                <div className={`dashboard__menu ${active === 1&& 'dashboardActive'}`} onClick={() => {
                    nav('/admin/blogs');
                    setActive(1)
                }}>

                    <Receipt/>
                    <h3>بلاگ</h3>
                </div>













                <div className={`dashboard__menu ${active === 8 && 'dashboardActive'}`} onClick={() => {
                    nav('/admin/site-settings');
                    setActive(8)
                }}>
                    <Tune/>
                    <h3> تنظیمات</h3>
                </div>

                <div className={`dashboard__menu ${active === 9 && 'dashboardActive'}`} onClick={() => {
                    nav('/admin/about');
                    setActive(9)
                }}>
                    <TipsAndUpdates/>
                    <h3> راهنمای پنل</h3>
                </div>


            </div>

        </>
    )
}
export default Sidebar;