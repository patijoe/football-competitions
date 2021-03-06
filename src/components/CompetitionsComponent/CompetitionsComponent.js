import React from 'react';
import { Link } from 'react-router-dom';

import FooterComponent from '../FooterComponent';

import { ROUTER_RESULTS_LINK, ROUTER_STANDINGS_LINK } from '../../constants/router/constantsRoutes';

const availableCompetitions = [ 2000, 2001, 2002, 2003, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2021 ];
class CompetitionsComponent extends React.Component {
  render() {
    const { competitions } = this.props;

    return (
      <div>
        <div className="app">
          <div className="competitions-container">
            <h1 className="competitions-title">Competitions</h1>
            <ul className="competitions-list">
              {competitions &&
                competitions.filter(item => availableCompetitions.indexOf(item.id) !== -1).map(competition => {
                  return (
                    <li className="competitions-item" key={competition.id}>
                      <div className="competitions-item-container">
                        <div className="competitions-item-info">
                          <div className="competitions-link-block competitions-link-block-name">
                            <h2 className="competitions-link-block-title">Name</h2>
                            <h3 className="competitions-link-block-name">{competition.name}</h3>
                          </div>
                          <div className="competitions-link-block competitions-link-block-country">
                            <h2 className="competitions-link-block-title">Country</h2>
                            <h2 className="competitions-link-block-country">{competition.area.name}</h2>
                          </div>
                        </div>
                        <div className="competitions-link-container">
                          <Link className="competitions-link competitions-link-standings" to={ROUTER_STANDINGS_LINK(`${competition.id}`)}>
                            Standings
                          </Link>
                          <Link className="competitions-link competitions-link-results" to={ROUTER_RESULTS_LINK(`${competition.id}`)}>
                            Results
                          </Link>
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
          <FooterComponent />
        </div>
      </div>
    );
  }
}

export default CompetitionsComponent;
