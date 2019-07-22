import React from "react";

//create your first component
export class Nav extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<ul className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top nav nav-pills nav-fill">
					<li className="nav-item">
						<a className="nav-link active" href="#">
							Active
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Much longer nav link
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Link
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link disabled"
							href="#"
							tabIndex="-1"
							aria-disabled="true">
							Disabled
						</a>
					</li>
				</ul>
			</div>
		);
	}
}
