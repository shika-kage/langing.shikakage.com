import React from 'react';
import { withTranslation } from "react-i18next";

import { ITranslateProps } from '@interfaces/Components';

export const Welcome = withTranslation()((props: ITranslateProps) => (
    <section className='welcome'>
        <div className='container'>
            <div className='welcome__content'>
                <div className='welcome__info'>
                    <span>{ props.t('welcome_info_block') }</span>
                    <br/>
                    <span>Shika Kage (Shika):</span>
                    <span>0xc80abf95701973a58e2a5098b7177594d4fd73e3</span>
                    <br/>
                    <span>META SHIKA (MSHIKA):</span>
                    <span>0x4Fa85A86482D25d0Ef5a8af917D68C0e9Bb73DDB</span>
                </div>
                <img src={require('@assets/imgs/welcome_coin.svg').default} />
            </div>
        </div>
    </section>
));