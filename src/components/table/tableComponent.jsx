import React, { Component } from 'react';
import './style.scss';

class Table extends Component {
	click(i) {
		this.props.notify(i);
	}

	render() {
		let { drivers, limit } = this.props;

		if(!drivers) {
			return null 
		} else {
			 return (
			 	<div className="driver-lists">
				 	<table>
						<thead>
							<tr>
								<th>Id</th>
								<th>Name</th>
								<th>Phone</th>
								<th>Email</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{
								drivers.map((driver, i) => {
									if(i < limit) {
										return (
											<tr key={i}>
												<td data-th="Id">{driver.id}</td>
												<td data-th="Name">{driver.name}</td>
												<td data-th="Phone">{driver.phone}</td>
												<td data-th="Email">{driver.email}</td>
												<td data-th="Action">
													{
														driver.suspended ? <button onClick={this.click.bind(this, i)}>Notify</button> : '-'
													}
												</td>
											</tr>
										);
									} else {
										return null
									}
								})
							}
						</tbody>
					</table>
			 	</div>
			);
		}
	}

}

export default Table;