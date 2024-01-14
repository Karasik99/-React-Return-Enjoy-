import './style.scss';
import { HeaderLinks } from '../Header/Header';
import FactionButton from '../Utils/FactionButton/FactionButton';
import * as data from '../../FactionButtons.json';

function Faction({ value, setValue }) {
    const FactionCards = Array.from(data);

    return (
        <section id='factions' className="factions">
            <div className="content-wrapper">
                <div className="factions__content">
                    <nav className="factions__nav">
                        <ul className="factions__sidebar-menu">
                            {HeaderLinks.map((item) => {
                                return (
                                    <li key={item.name + 'keys'} className="header__sidebar-item">
                                        <a href={item.id} className="header__sidebar-link">
                                            {item.name}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    <h2 className="factions__title">Factions</h2>

                    <div className="factions__cards">
                        {FactionCards.map((item) => {
                            return (
                                <FactionButton key={item.id+'key'}
                                    value={value}
                                    setValue={setValue}
                                    name={item.name}
                                    image={item.image}
                                    buttonimg={item.buttonimg}
                                    id={item.id}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faction;
