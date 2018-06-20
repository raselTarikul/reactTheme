/**
 * Data Table
 */
import React from 'react';
import MUIDataTable from "mui-datatables";
import { connect } from 'react-redux';


// redux action
import {
	getAccounst,
} from 'Actions';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

// intl messages
import IntlMessages from 'Util/IntlMessages';

class AccountListPage extends React.Component {
	componentDidMount() {
		this.props.fatchAccounst();
	  }
	render() {
	
		const columns = ["body", "id", "title", "userId"];
		const data = this.props.accounsts.accounsts;
		const options = {
			filterType: 'dropdown',
			responsive: 'stacked'
		};
		return (
			<div className="data-table-wrapper">
				<RctCollapsibleCard heading="Data Table" fullBlock>
					<MUIDataTable
						title={"Account list"}
						data={data}
						columns={columns}
						options={options}
					/>
				</RctCollapsibleCard>
			</div>
		);
	}
}
const mapDispatchToProps = dispatch => {
    return {
        fatchAccounst: () => dispatch(getAccounst()),

    }
};

const mapStateToProps = ({ accounts }) => {
    return {

        accounsts: accounts,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountListPage);
