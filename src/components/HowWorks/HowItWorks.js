import React from "react";
import FriendSvg from "./svg/friend.svg";
import courseSvg from "./svg/course.svg";
import rateSvg from "./svg/rate.svg";
import offerSvg from "./svg/offer.svg";
import walletSvg from "./svg/wallet.svg";
import style from "./HowItWork.module.css";

const HowItWorks = () => {

    const data = [
        {
            image: FriendSvg,
            title: "Invite your Friends",
            description: "Share the link tutedude.com with your friends",
        },
        {
            image: courseSvg,
            title: "Friend purchases any course",
            description: "Using your REFERRAL CODE in the payments page",
        },
        {
            image: rateSvg,
            title: "You get ₹ 200 as referral money",
            description: "On total purchase the friend makes, into your wallet",
        },
        {
            image: offerSvg,
            title: "Your Friend gets ₹ 200 Off ",
            description:
                "On his overall fee on successful purchase using your referral code",
        },
        {
            image: walletSvg,
            title: "Transfer money from wallet",
            description:
                "When the wallet balance reaches ₹200 or more, you can withdraw it",
        },
    ];

    return (
        <div className={style.container}>
            <h2>How does it work ?</h2>
            <div className={style.MapDiv}>
                {data.map((element, ind) => (
                    <div key={ind}>
                        <img src={element.image} alt={element.image} />
                        <div className={style.titleDiv}>
                            <h2>{element.title}</h2>
                            <p>{element.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <footer className={style.footer}>
                <p>Friend Who Enrolled</p>
                <p>Terms & Conditions</p>
            </footer>

        </div>
    )
};


export default HowItWorks;