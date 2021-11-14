import React, { useState } from 'react';

import { IDefaultAccordionProps } from '@interfaces/Components';

export const Accordion: React.FC<IDefaultAccordionProps> = (props: IDefaultAccordionProps) => {

    const [isOpened, setIsOpened] = useState(true);

    return (
        <div className='gradient-border' onClick={() => setIsOpened(!isOpened)}>
            <div className='accordion'>
                <div className='accordion__header'>
                    <div className='accordion__header-left'>
                        <div className='title-line__accordion' />
                        <div className='accordion__title'>{props.title}</div>
                    </div>
                    <img className={isOpened ? 'accordion__opened' : ''} src={require('@assets/imgs/icons/arrow_up.svg').default} />
                </div>
                { isOpened
                    ? <div className='accordion__content'>
                        <ul>
                            { props.items.map((v: string) => <li key={v}>● {v}</li>) }
                        </ul>
                      </div>
                    : null }
            </div>
        </div>
    );
};