import React from 'react';
import { Link } from 'react-router-dom';
import { SocialNetworks } from '@components/SocialNetworks';
import { withTranslation } from 'react-i18next';
import { ITranslateProps } from '@/interfaces/Components';
import Documentation from "@assets/docs/documentation.pdf";

export const Footer = withTranslation()((props: ITranslateProps) => (
    <>
        <footer>
            <div className='container'>
                <div className='pre-footer__content'>
                    <ul>
                        <li>
                            <Link to='/'>{ props.t('menu_item_home') }</Link>
                        </li>
                        <li>
                            <a href={Documentation}>{ props.t('footer_link_litepaper') }</a>
                        </li>
                        <li>
                            <Link to="/">{ props.t('footer_link_poocoin_chart') }</Link>
                        </li>
                        <li>
                            <Link to="/">{ props.t('footer_link_docs') }</Link>
                        </li>
                    </ul>
                    <ul className='footer__links'>
                        <li>
                            <Link to="/">{ props.t('footer_link_platform_skg') }</Link>
                        </li>
                        <li>
                            <Link to="/">{ props.t('footer_link_buy_sk') }</Link>
                        </li>
                        <li>
                            <Link to="/">{ props.t('footer_link_privacy_policy') }</Link>
                        </li>
                    </ul>
                    <div className='footer__community'>
                        <h4>{ props.t('footer_community_title') }</h4>
                        <p>{ props.t('footer_community_desc') }</p>
                        <SocialNetworks />
                    </div>
                </div>
                <div className='footer__content'>{ props.t('footer_text') }</div>
            </div>
        </footer>
        <a className='cg-link' href="https://coinhunt.cc/coin/768028677" target="_blank" rel="noreferrer">
            <img src="https://api.cnhnt.cc/public/getEmbedImage/768028677" alt="Shika Kage" />
        </a>
    </>
));