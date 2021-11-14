import React from 'react';

export const SocialNetworks: React.FC = () => (
    <div className='social-networks'>
        <img src={require('@assets/imgs/sn/telegram.svg').default} alt='telegram' />
        <img src={require('@assets/imgs/sn/twitter.svg').default} alt='twitter' />
        <img src={require('@assets/imgs/sn/medium.svg').default} alt='medium' />
        <img src={require('@assets/imgs/sn/discord.svg').default} alt='discord' />
    </div>
);