/**
 * Data Table
 */
import React from 'react';
import MUIDataTable from "mui-datatables";
import Button from '@material-ui/core/Button';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';


class Transaction extends React.Component {
	render() {
		const columns = ["Name", "Title", "Location", "Age", "Salary"];
		const data = [
			["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000"],
			["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"]
		];
		const options = {
			filterType: 'dropdown',
			responsive: 'stacked'
		};
		return (
			<div className="data-table-wrapper">
				<RctCollapsibleCard heading="Transaction history" fullBlock>
					<MUIDataTable
						title={"Transactions"}
						data={data}
						columns={columns}
						options={options}
					/>
				</RctCollapsibleCard>
        <hr />
        <Button variant="raised" color="primary" className="text-white">Add New</Button>
			</div>
		);
	}
}

export default Transaction;