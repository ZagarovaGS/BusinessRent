import header_logo2 from './header_img/header_logo2.jpeg';
import phone_logo from './header_img/phone_icon.png';
import './header.css';

export default function Header(){
    return (
        <>
        <div className='header'>
            <div className='header_logo'>
               <img className='header_logo_img' src={header_logo2}   alt='logo' />
            </div>
            <ul className='header_menu'>
                <li className='header_menu_item'>
                    <a className='main_link' href='main_screen'>Главная</a>
                </li>
                <li className='header_menu_item'>
                    <a className='flats_link' href='#'>Квартиры</a>
                </li>
                <li className='header_menu_item'>
                    <a className='contact_link' href='#'>Контакты</a>
                </li>
            </ul>
            <ul className='header_call'>
                <li className='header_phone'>
                    <img className='phone_icon' src={phone_logo} width={20} height={20}/>
                </li>
                <li className='header_phone'>
                    <a href="tel: + 79274057106">+7(927)405-71-06</a> 
                </li>              
            </ul>
        </div>
        </>
    )
}