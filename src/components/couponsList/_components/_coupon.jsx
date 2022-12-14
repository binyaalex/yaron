import React from 'react'
import { useTranslation } from 'react-i18next'

import papa from '../../../assets/images/papa.png'

const Coupon = ({ title, discountType, discountValue, subTitle, image, backgroundColor = '#0d47a1', style }) => {
    const isTypePercent = discountType === 'percent' ? '%' : discountType
    const { t } = useTranslation()

    return (
        <div
            className="caseback-box"
            style={{
                // backgroundImage: `url(${couponCover})`,
                // backgroundColor,
                // width: '363px',
                ...style
            }}
        >
            <div className="caseback-boxInner">
                <div className='caseback-text'>
                    <h4 className="casebackBox-Title">
                        {title}
                    </h4>
                    <h5 className="casebackBox-offer">
                        <span>{discountValue}{isTypePercent} </span> {t("Discount")}
                    </h5>
                    <h6 className="casebackBox-subTitle">
                        {subTitle}
                    </h6>
                    <button>לרכישה</button>
                </div>
                <div className='caseback-image'>
                    <img src={papa} alt="papa jones" />
                </div>
                
            </div>
        </div>
    );
}

export default Coupon