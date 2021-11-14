import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import { ITranslateProps } from '@/interfaces/Components';
import { LanguageDropDown } from '@components/LanguageDropDown';
import Documentation from '../assets/docs/documentation.pdf';

export const MainNavbar = withTranslation()((props: ITranslateProps) => {

    const [currentResize, setCurrentResize] = useState<number>(document.body.clientWidth);

    const toggleMobileMenu = (): void => {
        let navbarPane = document.querySelector<HTMLElement>('.menu__side').style.display;
        if(!navbarPane) navbarPane = 'none';
        (navbarPane !== 'none') ? closeMobileMenu() : openMobileMenu()
    };

    const openMobileMenu = (): void => {
        document.querySelector<HTMLElement>('.menu__side').style.display = 'flex';
        document.querySelector<HTMLElement>('.menu__controller').style.content = `url('${require("@assets/imgs/icons/close").default}')`;
    };

    const closeMobileMenu = (): void => {
        if(currentResize < 841) {
            document.querySelector<HTMLElement>('.menu__side').style.display = 'none';
            document.querySelector<HTMLElement>('.menu__controller').style.content = `url('${require("@assets/imgs/icons/open_menu").default}')`;
        }
    };

    useEffect(() => {
        (currentResize > 840) ? openMobileMenu() : closeMobileMenu()
    }, [currentResize]);

    const resetSubMenu = (e: any): void => setCurrentResize(e.target.innerWidth);

    useEffect(() => {
        window.removeEventListener('resize', resetSubMenu);
        window.addEventListener('resize', resetSubMenu);
    }, []);

    return (
        <menu>
            <div className='menu__container'>
                <div className='brand'>
                    <img src={require('@assets/imgs/logo.png').default} alt='logo' />
                </div>
                <div className='menu__side'>
                    <ul className='links'>
                        <li><Link to='/'>{ props.t('menu_item_home') }</Link></li>
                        <li><a href={Documentation}>{ props.t('menu_item_litepaper') }</a></li>
                        <li className='link_dropped'>
                            <span>{ props.t('menu_item_token') }</span>
                            <img src={require('@assets/imgs/icons/arrow_up.svg').default} />
                            <ul className='sub_links'>
                                <li>{ props.t('menu_sub_item_token_about_coin') }</li>
                                <li>{ props.t('menu_sub_item_token_tokenomics') }</li>
                            </ul>
                        </li>
                        <li className='link_dropped'>
                            <span>{ props.t('menu_item_community') }</span>
                            <img src={require('@assets/imgs/icons/arrow_up.svg').default} />
                            <ul className='sub_links'>
                                <li><Link to="/devs">{ props.t('menu_sub_item_community_devs') }</Link></li>
                                <li><a href='https://t.me/ShikaKage'>{ props.t('menu_sub_item_community_telegram') }</a></li>
                                <li><a href='https://twitter.com/Shika_Kage'>{ props.t('menu_sub_item_community_twitter') }</a></li>
                            </ul>
                        </li>
                        <li>{ props.t('menu_item_skg') }</li>
                    </ul>
                    <LanguageDropDown />
                </div>
                <div className='menu__controller' onClick={toggleMobileMenu} />
            </div>
        </menu>
    );
});