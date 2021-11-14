import React from 'react';

export const SocialNetworks: React.FC = () => (
    <div className='social-networks'>
        <a href='https://t.me/ShikaKage'>
            <img src={require('@assets/imgs/sn/telegram.svg').default} alt='telegram' />
        </a>
        <a href='https://twitter.com/Shika_Kage'>
            <img src={require('@assets/imgs/sn/twitter.svg').default} alt='twitter' />
        </a>
        <a href='https://shikakage.medium.com/'>
            <img src={require('@assets/imgs/sn/medium.svg').default} alt='medium' />
        </a>
        <a href='https://discord.com/invite/P7HcmFvJrx'>
            <img src={require('@assets/imgs/sn/discord.svg').default} alt='discord' />
        </a>
    </div>
);