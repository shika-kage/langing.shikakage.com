import React, { useState } from 'react';
import { connect } from 'react-redux';

import { availableTranslations, i18n } from '@/utils/i18n';
import { setLangCode } from '@/store/actions/app';
import { AppState } from '@/store/types/app';
import { RootState } from "@/store/reducers";

const mapDispatch: any = {
    setLangCode
};

type Props = AppState & typeof mapDispatch;

export const LanguageDropDownComponent: React.FC<Props> = ({ setLangCode, currentLangCode }: Props) => {

    const [isDropDown, setIsDropDown] = useState(false);

    const toggleDropDown = () => setIsDropDown(!isDropDown);

    const onLangChosen = (langCode: string) => {
        setLangCode(langCode as any);
        setIsDropDown(false);
        i18n.changeLanguage(langCode);
    };

    return (
        <div className={`custom-dd ${isDropDown ? 'active' : ''}`}>
            <div className='custom-dd__selected' onClick={toggleDropDown}>
                <span>{currentLangCode.toUpperCase()}</span>
                <img src={require('@assets/imgs/icons/arrow_up.svg').default} />
            </div>
            <div className={`custom-dd__list ${!isDropDown ? 'hide' : ''}`}>
                {...availableTranslations.filter(item => item != currentLangCode).map(item => (
                    <div key={item} onClick={() => onLangChosen(item)}>{item.toUpperCase()}</div>))}
            </div>
        </div>
    );
};

export const LanguageDropDown = connect<AppState, typeof mapDispatch>((state: RootState) => ({
    currentLangCode: state.app.currentLangCode
}), mapDispatch)(LanguageDropDownComponent);