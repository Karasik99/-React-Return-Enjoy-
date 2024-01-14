import React from 'react';
import './style.scss';

function Questions() {
    const QuestionsLink = [{name:'Colobarations',id:"#colobarations"},{name:'FAQ',id:"#faq"},{name:"Team",id:"#team"}];

    return (
        <section id='faq' className="questions">
            <div className="content-wrapper">
                <nav className="questions__nav">
                    <ul className="questions__sidebar-menu">
                        {QuestionsLink.map((item) => {
                            return (
                                <li key={item.id+'key'} className="questions__sidebar-item">
                                    <a href={item.id} className="questions__sidebar-link">
                                        {item.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
            <div className="questions__content">
                <h3 className="questions__title">HAVE ANY QUESTIONS?</h3>
                <div className="questions__table">
                    <div className="questions__section questions__section-1">
                        <div className="questions__section questions__section-settings">
                            <h4 className="questions__section-title">How many?</h4>
                            <p className="questions__section-text">
                                Our genesis land NFT collection will comprise 5555 NFTs.
                            </p>
                        </div>
                        <div className="questions__section questions__section-2">
                            <div>
                                <img src="/images/icons/table-icon-1.png" alt="" />
                            </div>
                            <div>
                                <img src="/images/icons/table-icon-2.png" alt="" />
                            </div>
                            <div>
                                <img src="/images/icons/table-icon-3.png" alt="" />
                            </div>
                        </div>
                        <div className="questions__section questions__section-settings">
                            <h4 className="questions__section-title">How DO I Get Dusklist?</h4>
                            <p className="questions__section-text">
                                Get engaged and active with the community. The earlier you are and
                                more sGet engaged and active with the community. The earlier you are
                                and more support you bring, the higher your chances.upport you
                                bring, the higher your chances.
                            </p>
                        </div>
                        <div className="questions__section questions__section-6">
                            <h4 className="questions__section-title">HOW MUCH?</h4>
                            <p className="questions__section-text">
                                Each genesis land NFT will be priced at 0.12eth + gas fees.
                            </p>
                        </div>
                    </div>

                    <div className="questions__section questions__section-3">
                        <div className="questions__section questions__section-6">
                            <h4 className="questions__section-title">WHEN mint?</h4>
                            <p className="questions__section-text">
                                We are targeting a release in mid May.
                            </p>
                        </div>
                        <div className="questions__section questions__section-6">
                            <h4 className="questions__section-title">Maximum mintable?</h4>
                            <p className="questions__section-text">
                                For Dusklist: 1 per wallet. For public sale: 2 per transaction.
                            </p>
                        </div>
                        <div className="questions__section questions__section-6">
                            <h4 className="questions__section-title">When is staking?</h4>
                            <p className="questions__section-text">
                                Staking with the EON Corporation will go live in the month after
                                mint.
                            </p>
                        </div>
                        <div className="questions__section questions__section-4 questions__section-2">
                            <div>
                                <img src="/images/icons/table-icon-4.png" alt="" />
                            </div>
                            <div>
                                <img src="/images/icons/table-icon-5.png" alt="" />
                            </div>
                            <div>
                                <img src="/images/icons/table-icon-6.png" alt="" />
                            </div>
                            <div>
                                <img
                                    className="questions__icon-1"
                                    src="/images/icons/table-icon-5.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="questions__icon-2"
                                    src="/images/icons/table-icon-5.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="questions__section questions__section-5">
                        <div className="questions__section questions__section-settings">
                            <h4 className="questions__section-title">Which blockchain?</h4>
                            <p className="questions__section-text">
                                Dusktopia will be built on the Ethereum blockchain.
                            </p>
                        </div>
                        <div className="questions__section questions__section-7">
                            <h4 className="questions__section-title">What is the utility?</h4>
                            <p className="questions__section-text">
                                Owning a genesis land NFT sets you up for the rest of our ecosystem.
                                The land collection is the foundation of Dusktopia - holders will be
                                rewarded in the short term through the staking mechanism. In the
                                long term, they will be able to build on that genesis land with
                                various properties and avatars we will be releasing.
                            </p>
                        </div>
                        <div className="questions__section questions__section-settings">
                            <h4 className="questions__section-title">Future mints?</h4>
                            <p className="questions__section-text">
                                Immediately after mint, we are planning for a limited secondary land
                                release for holders, claimable with $DAWN. Subsequently, we will
                                release a Properties collection, as well as PFP avatars which will
                                serve as your in-game role.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Questions;
