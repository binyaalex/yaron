import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { getMerchants } from "../../redux/actions-exporter";

import hotBenefit1 from '../../assets/images/hotBenefit1.png'

export default function HotBenefitList(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const merchants = useSelector((state) => state.merchant.merchants);
  const hotBenefitsArr = [
    {
        title: "עידן אלתרמן",
        price: 79,
        image: hotBenefit1,
        category: "סטנדאפ",
    },
    {
      title: "עידן אלתרמן",
      price: 79,
      image: hotBenefit1,
      category: "סטנדאפ",
    },
    {
      title: "עידן אלתרמן",
      price: 79,
      image: hotBenefit1,
      category: "סטנדאפ",
    },
    {
      title: "עידן אלתרמן",
      price: 79,
      image: hotBenefit1,
      category: "סטנדאפ",
    },
    {
      title: "עידן אלתרמן",
      price: 79,
      image: hotBenefit1,
      category: "סטנדאפ",
    },
    {
      title: "עידן אלתרמן",
      price: 79,
      image: hotBenefit1,
      category: "סטנדאפ",
    },
  ]
  useEffect(() => {
    dispatch(getMerchants());
  }, [dispatch]); // eslint-disable-line

  const merchantCategoriesArr = [
    {
      title: t("ClothingAndFashionAccessories"),
      id: 1,
    },
    {
      title: t("footwear"),
      id: 2,
    },
    {
      title: t("HygieneCareAndBeauty"),
      id: 3,
    },
    {
      title: t("bookstoresAndSports"),
      id: 4,
    },
    {
      title: t("toysAndGames"),
      id: 5,
    },
    {
      title: t("foodAndCafes"),
      id: 6,
    },
    {
      title: t("housewares"),
      id: 7,
    },
    {
      title: t("electricalProductStores"),
      id: 8,
    },
  ];

  return (
    <>
      <div className="row align-items-center">
        <div className="col-7">
          <h6 className="module-heading__title">ההטבות החמות</h6>
        </div>
        <div
          className="col-5 text-right isLink"
          onClick={() => {
            navigate("/allvendors");
          }}
        >
          {props.isAllVendors ? (
            <div className="module-heading__link">{t("allStores")}</div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* <Tabs
        defaultSelectedIndex={0}
        className="categoriesSliderTabs"
        // onChange={handleChange}
      >
        <Tab value="all" label={t("all")}>
          All
        </Tab>
        {merchantCategoriesArr.length > 0 &&
          merchantCategoriesArr.map((category) => (
            <Tab value={category.id} label={category.title}>
              {category.title}
            </Tab>
          ))}
      </Tabs> */}

      <ScrollingCarousel>
        <ul className="categoryList">
          {hotBenefitsArr.length > 0
            ? hotBenefitsArr.map((item) => (
                <>
                  <li
                    // onClick={() => {
                    //   navigate(`/vendor/${item.id}`, {
                    //     state: { id: item.id },
                    //   });
                    // }}
                    className="hotBenefit isLink"
                  >
                    <div className="hotBenefitImg">
                      <img
                        src={item.image}
                        alt="My Awesome"
                      />
                      <div className="hotBenefitCategory">{item.category}</div>
                    </div>
                    <div className="hotBenefitContent">
                      <h6 className="hotBenefitTitle">{item.title}</h6>
                      <h6 className="hotBenefitPrice">{item.price} ₪</h6>
                    </div>
                  </li>
                </>
              ))
            : t("No merchants")}
        </ul>
      </ScrollingCarousel>
    </>
  );
}
