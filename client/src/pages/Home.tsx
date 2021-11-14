import React from 'react';
import { withTranslation } from "react-i18next";

import { Footer } from '@components/Footer';
import { MainNavbar } from '@components/MainNavbar';
import { useTitle } from '@hooks/title.hook';

import { ITranslateProps } from '@interfaces/Components';
import {SocialNetworks} from "@components/SocialNetworks";
import {Accordion} from "@components/Accordion";
import {Welcome} from "@components/Welcome";

const HomeComponent = withTranslation()((props: ITranslateProps) => {
    useTitle('Home');

    return (
        <>
            <MainNavbar />
            <Welcome />
            <section className='about-coin'>
                <div className='container'>
                    <div className='about-coin__content'>
                        <div className='title-line' />
                        <h2>{ props.t('about_coin_title') }</h2>
                        <p>{ props.t('about_coin_content') }</p>
                        <div className='about-coin__bottom'>
                            <div className='title-line__short' />
                            <SocialNetworks />
                        </div>
                    </div>
                    <img src={require('@assets/imgs/about.svg').default} />
                </div>
            </section>
            <section className='functions'>
                <div className='container'>
                    <div className='functions__content'>
                        <div className='title-line' />
                        <h2>{ props.t('functions_title') }</h2>
                        <div className='functions__steps'>
                            <div className='functions__step'>
                                <img src={require('@assets/imgs/functions/1.svg').default} />
                                <h3>{ props.t('functions_subtitle_1') }</h3>
                                <p>{ props.t('functions_subcontent_1') }</p>
                            </div>
                            <div className='functions__step'>
                                <img src={require('@assets/imgs/functions/2.svg').default} />
                                <h3>{ props.t('functions_subtitle_2') }</h3>
                                <p>{ props.t('functions_subcontent_2') }</p>
                            </div>
                            <div className='functions__step'>
                                <img src={require('@assets/imgs/functions/3.svg').default} />
                                <h3>{ props.t('functions_subtitle_3') }</h3>
                                <p>{ props.t('functions_subcontent_3') }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='tokenomics'>
                <div className='container'>
                    <div className='tokenomics__content'>
                        <div className='title-line' />
                        <h2>{ props.t('tokenomics_title') }</h2>
                        <p>{ props.t('tokenomics_content_p1') }</p>
                        <div className='tokenomics__main-percentages'>
                            <div className='tokenomics__main-percentage'>
                                <span>60%</span>
                                <p>{ props.t('tokenomics_main_percentage_1') }</p>
                            </div>
                            <div className='tokenomics__main-percentage'>
                                <span>10%</span>
                                <p>{ props.t('tokenomics_main_percentage_2') }</p>
                            </div>
                            <div className='tokenomics__main-percentage'>
                                <span>10%</span>
                                <p>{ props.t('tokenomics_main_percentage_3') }</p>
                            </div>
                        </div>
                        <p>{ props.t('tokenomics_content_p2') }</p>
                        <div className='tokenomics__secondary-percentages'>
                            <div className='tokenomics__secondary-percentage'>
                                <span>2%</span>
                                <p>{ props.t('tokenomics_secondary_percentage_1') }</p>
                            </div>
                            <div className='tokenomics__secondary-percentage'>
                                <span>2%</span>
                                <p>{ props.t('tokenomics_secondary_percentage_2') }</p>
                            </div>
                            <div className='tokenomics__secondary-percentage'>
                                <span>2%</span>
                                <p>{ props.t('tokenomics_secondary_percentage_3') }</p>
                            </div>
                            <div className='tokenomics__secondary-percentage'>
                                <span>2%</span>
                                <p>{ props.t('tokenomics_secondary_percentage_4') }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='skg'>
                <div className='container'>
                    <div className='skg__content'>
                        <div className='title-line' />
                        <h2>{ props.t('skg_title') }</h2>
                        <img src={require('@assets/imgs/game_screenshot.svg').default} />
                        <span>{ props.t('skg_hint') }</span>
                    </div>
                </div>
            </section>
            <section className='links'>
                <div className='container'>
                    <div className='links__content'>
                        <div className='title-line' />
                        <h2>{ props.t('links_title') }</h2>
                        <span>{ props.t('links_hint') }</span>
                        <div className='links__items'>
                            <img src={require('@assets/imgs/links/uniswap.png').default} />
                            <img src={require('@assets/imgs/links/pancakeswap.png').default} />
                            <img src={require('@assets/imgs/links/coingecko.png').default} />
                        </div>
                    </div>
                </div>
            </section>
            <section className='road-map'>
                <div className='container'>
                    <div className='road-map__content'>
                        <div className='title-line' />
                        <h2>{ props.t('road_map_title') }</h2>
                        <div className='road-map__items'>
                            <div className='road-map__col'>
                                <Accordion title={ props.t('road_map_4Q_2021_title') } items={props.t('road_map_4Q_2021_list').split(';')} />
                                <Accordion title={ props.t('road_map_1Q_2022_title') } items={props.t('road_map_1Q_2022_list').split(';')} />
                            </div>
                            <div className='road-map__col'>
                                <Accordion title={ props.t('road_map_2Q_2022_title') } items={props.t('road_map_2Q_2022_list').split(';')} />
                                <Accordion title={ props.t('road_map_3Q_2022_title') } items={props.t('road_map_3Q_2022_list').split(';')} />
                            </div>
                            <div className='road-map__col'>
                                <Accordion title={ props.t('road_map_4Q_2022_title') } items={props.t('road_map_4Q_2022_list').split(';')} />
                                <Accordion title={ props.t('road_map_1Q_2023_title') } items={props.t('road_map_1Q_2023_list').split(';')} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
});

export const Home = HomeComponent;