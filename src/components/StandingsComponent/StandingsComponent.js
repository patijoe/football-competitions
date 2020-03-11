import React from 'react';
import { Link } from 'react-router-dom';
import FooterComponent from '../FooterComponent';
import StandingsTableComponent from '../StandingsTableComponent';

import { getStandings } from '../../services/request';
import { ROUTER_PATH } from '../../constants/router/constantsRoutes';

class StandingsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      standings: [],
      competition: {},
      isListable: false
    };
  }

  componentDidMount = async () => {
    const { match: { params: { id } } } = this.props;
    this.getStandingsFetch(id);
  };

  getStandingsFetch(id) {
    getStandings(id).then(data => {
      this.setState({
        standings: data.standings,
        competition: data.competition
      });
    });
  }

  hasTable(standing) {
    return (standing && standing.stage === 'REGULAR_SEASON') || (standing && standing.stage === 'GROUP_STAGE');
  }

  render() {
    const { competition, standings } = this.state;
    return (
      <div className="app">
        <div className="standings-container">
          <Link className="back-button" to={ROUTER_PATH}>
            VOLVER
          </Link>
          <div className="standing-container-header">
            <h1 className="standings-title">{`Standings ${competition.name}`}</h1>
          </div>
          <div className="standings-tables">{standings && this.hasTable(standings[0]) ? standings.filter(item => item.type === 'TOTAL').map(team => <StandingsTableComponent team={team} />) : ''}</div>
        </div>
        <FooterComponent />
      </div>
    );
  }
}

export default StandingsComponent;
