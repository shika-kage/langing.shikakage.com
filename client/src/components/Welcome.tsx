import React from 'react';
import { withTranslation } from "react-i18next";

import { ITranslateProps } from '@interfaces/Components';

export const Welcome = withTranslation()((props: ITranslateProps) => (
    <section className='welcome'>
        <div className='container'>
            <div className='welcome__content'>
                <div className='welcome__info'>
                    <span>{ props.t('welcome_info_block') }</span>
                    <span>0xC80aBF95701973a58e2a5098B7177594D4fD73e3</span>
                </div>
                <img src={require('@assets/imgs/welcome_coin.svg').default} />
            </div>
        </div>
    </section>
));