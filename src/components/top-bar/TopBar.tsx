import './style.css'
import { FiFacebook } from 'react-icons/fi';
import { FiPhoneCall } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';

const TopBar: React.FC = () => {
    return (
        <div style={{ backgroundColor: "#EEEEEE" }}>
            <div className="container d-flex  py-1 me-5">
                <a id='fbPageReference' className=' mx-5 px-5' href='https://www.facebook.com/SaylaniMassTraining' target="_blank">
                    <span id='fbLogo'><FiFacebook /></span>
                    SaylaniMassTraining
                </a>
                <a className='mx-5 px-5 phoneNumber'>
                    <span id="phoneLogo"><FiPhoneCall /></span>
                    +9265493232</a>
                <a className='mx-5 px-5 location' href='https://l.facebook.com/l.php?u=https%3A%2F%2Fgoo.gl%2Fmaps%2FPkKb4HVpUvRiybXj9%3Ffbclid%3DIwAR2PHPnK-l8Z1ZT4NHjicDRdvpLBRwV4dRs69waY2kjokgmW4Y1nK0C9Z6g&h=AT36C7BMLAMn4yv6Q48ksbBWHlu1hv3n_4NJ9P2SpqjgWy8wmv-Op5S-cUDAP88nGDYvdxOgyUHLTN6aZDBTeblMutpfbXrNA3qlwzUa98yycYr2-CZIs3YhAUS9G__VXizX&__tn__=-UK-R&c[0]=AT3MwgXa7gTETKxaDL70Fez7edjAZtjanwNi3GtL_XdVEnqUncm3fpwXN4P3ug0XoIXcx4FVLBCZCweOTg8uCjBoGnlhGTD-8qun2-TxKha75ogc4HGXoltbY74musuvYcOwyPYcdea-9LiCVJ7Wy9Aw5w98zz_DGtyoczSGDbTYAj_fdBkwpXt8Vl0q8GG6gJOwh-nUZBe71Q' target="_blank">
                    <span id="locations"><GrLocation /></span>
                    2<sup>nd</sup> Floor, Mumtaz Mobile Mall, Gulshan Chowrangi
                </a>
            </div>
        </div>
    );
}

export default TopBar;
