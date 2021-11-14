import React from 'react';
import { withTranslation } from "react-i18next";

import { ITranslateProps } from '@interfaces/Components';

export const Welcome = withTranslation()((props: ITranslateProps) => (
    <section className='welcome'>
        <div className='container'>
            <div className='welcome__content'>
                <div className='welcome__info'>
                    <span>{ props.t('welcome_info_block') }</span>
                    <span>0xC1D8b45E9cdA7b16B1d2BCFab5AEa5DB4176F29B</span>
                </div>
                <img src={require('@assets/imgs/welcome_coin.svg').default} />
            </div>
        </div>
    </section>
));