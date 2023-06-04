import React from "react";
import style from "./referral.module.css"

const Referral = () => {
    return (
        <div className={style.container}>
            <p>
                UI/UX {">"}{""} Refer & Earn
            </p>

            <div className={style.MainDiv1}>
                <div>
                    <div className={style.Box1}>
                        <p>Referral Earning</p>
                        <h2>₹ 2,500</h2>
                    </div>
                    <div className={style.Box2}>
                        <p>Total Referrals</p>
                        <h2>7</h2>
                    </div>
                    <div className={style.Box3}>
                        <p>Wallet Balance</p>
                        <h2>₹ 500</h2>
                    </div>
                    <div className={style.Box4}>
                        <p>Withdraw Balance</p>
                    </div>
                </div>

                <div className={style.ReferralCode}>
                    <h3>Your Referral Code</h3>
                    <div>
                        <h4>&emsp;EDCH54</h4>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Referral;