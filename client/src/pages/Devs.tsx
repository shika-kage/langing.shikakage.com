import React from 'react';
import { withTranslation } from "react-i18next";

import { Footer } from '@components/Footer';
import { MainNavbar } from '@components/MainNavbar';
import { useTitle } from '@hooks/title.hook';

import { ITranslateProps } from '@interfaces/Components';
import { Welcome } from '@components/Welcome';

const DevsComponent = withTranslation()((props: ITranslateProps) => {
    useTitle('Developers');

    return (
        <>
            <MainNavbar />
            <Welcome />
            <section className='devs'>
                <div className='container'>
                    <div className='devs__content'>
                        <h2>{ props.t('devs_title') }</h2>
                    </div>
                    <div className='devs__items'>
                        <div className='devs__col'>
                            <div className='devs__item'>
                                <img src={require('@assets/imgs/devs/marina.svg').default} />
                                <div className='devs__info'>
                                    <div className='title-line__full' />
                                    <h3>Marina
                                        <a href='https://twitter.com/MarinaKage'>
                                            <img src={require('@assets/imgs/sn/twitter.svg').default} alt='twitter' />
                                        </a>
                                    </h3>
                                    <span>{ props.t('devs_marina_hint') }</span>
                                </div>
                            </div>
                            <div className='devs__item'>
                                <img src={require('@assets/imgs/devs/tim.svg').default} />
                                <div className='devs__info'>
                                    <div className='title-line__full' />
                                    <h3>Tim</h3>
                                    <span>{ props.t('devs_tim_hint') }</span>
                                </div>
                            </div>
                        </div>
                        <div className='devs__col'>
                            <div className='devs__item'>
                                <img src={require('@assets/imgs/devs/nastya.svg').default} />
                                <div className='devs__info'>
                                    <div className='title-line__full' />
                                    <h3>Nastya
                                        <a href='https://twitter.com/nastya_fauner'>
                                            <img src={require('@assets/imgs/sn/twitter.svg').default} alt='twitter' />
                                        </a>
                                    </h3>
                                    <span>{ props.t('devs_nastya_hint') }</span>
                                </div>
                            </div>
                            <div className='devs__item'>
                                <img src={require('@assets/imgs/devs/andrey.svg').default} />
                                <div className='devs__info'>
                                    <div className='title-line__full' />
                                    <h3>Andrey
                                        <a href='https://twitter.com/JustAndrey_'>
                                            <img src={require('@assets/imgs/sn/twitter.svg').default} alt='twitter' />
                                        </a>
                                    </h3>
                                    <span>{ props.t('devs_andrey_hint') }</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
});

export const Devs = DevsComponent;