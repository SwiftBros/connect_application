// function JobsPageHeader() {
// 	return (
// 		<div>
// 			<div className="text-center">
// 				<h1>Job Board</h1>
// 				<div className="d-flex justify-content-center mr-3">
// 					<Form className="form-inline">
// 						<Form.Control type="text" placeholder="Search" />
// 						<Button className="ml-1 mr-3" variant="outline-success">Search</Button>
// 					</Form>
// 					<Button onClick={self.toggleJobForm}variant="primary">Post a Job</Button>
// 				</div>
// 			</div>
//
// 			<div id="jobForm" ref="jobFormRef">
// 				<Container className="mt-5">
// 					<Row>
// 						<Col xs={4}>
// 						</Col>
// 						<Col s={4}>
// 							<Form onSubmit={event => self.onCreateMessage(event, self.authUser)}>
// 								<Form.Group controlId="formJobTitle">
// 									<Form.Label>Job Title</Form.Label>
// 									<Form.Control
// 										type="text"
// 										name="jobTitle"
// 										placeholder="Enter a job title"
// 										value={jobTitle}
// 										onChange={self.onChangeText}
// 									>
// 									</Form.Control>
// 								</Form.Group>
//
// 								<Form.Group controlId="formJobLocation">
// 									<Form.Label>Job Location</Form.Label>
// 									<Form.Control
// 										type="text"
// 										name="jobLocation"
// 										placeholder="Where is this job located?"
// 										value={jobLocation}
// 										onChange={self.onChangeText}
// 									>
// 									</Form.Control>
// 								</Form.Group>
//
// 								<Form.Group controlId="formJobSummary">
// 									<Form.Label>Job Summary</Form.Label>
// 									<Form.Control
// 										type="text"
// 										name="jobSummary"
// 										placeholder="Provide a short summary"
// 										value={jobSummary}
// 										onChange={self.onChangeText}
// 									>
// 									</Form.Control>
// 								</Form.Group>
//
// 								<Form.Group controlId="formJobDescription">
// 									<Form.Label>Job Description</Form.Label>
// 									<Form.Control
// 										as="textarea"
// 										rows="8"
// 										name="jobDescription"
// 										placeholder="Provide the job description, requirements, etc."
// 										value={jobDescription}
// 										onChange={self.onChangeText}
// 									>
// 									</Form.Control>
// 								</Form.Group>
//
// 								<Form.Group controlId="formPayRate">
// 									<Form.Label>Pay Rate ($)</Form.Label>
// 									<Form.Control
// 										type="text"
// 										name="payRate"
// 										placeholder="Enter the pay rate"
// 										value={payRate}
// 										onChange={self.onChangeText}
// 									>
// 									</Form.Control>
// 									<br />
// 									<div style={{float: 'right'}}>
// 										<Button type="submit" variant="success" className="ml-1">
// 											Post Job
// 										</Button>
// 									</div>
// 								</Form.Group>
// 							</Form>
// 						</Col>
// 						<Col xs={4}>
// 						</Col>
// 					</Row>
// 				</Container>
// 			</div>
// 			<hr />
// 		</div>
//
//
// 	)
// }

<Form onSubmit={event => self.onCreateMessage(event, self.authUser)}>
	<Form.Group controlId="formJobTitle">
		<Form.Label>Job Title</Form.Label>
		<Form.Control
			type="text"
			name="jobTitle"
			placeholder="Enter a job title"
			value={jobTitle}
			onChange={self.onChangeText}
		>
		</Form.Control>
	</Form.Group>

	<Form.Group controlId="formJobLocation">
		<Form.Label>Job Location</Form.Label>
		<Form.Control
			type="text"
			name="jobLocation"
			placeholder="Where is this job located?"
			value={jobLocation}
			onChange={self.onChangeText}
		>
		</Form.Control>
	</Form.Group>

	<Form.Group controlId="formJobSummary">
		<Form.Label>Job Summary</Form.Label>
		<Form.Control
			type="text"
			name="jobSummary"
			placeholder="Provide a short summary"
			value={jobSummary}
			onChange={self.onChangeText}
		>
		</Form.Control>
	</Form.Group>

	<Form.Group controlId="formJobDescription">
		<Form.Label>Job Description</Form.Label>
		<Form.Control
			as="textarea"
			rows="8"
			name="jobDescription"
			placeholder="Provide the job description, requirements, etc."
			value={jobDescription}
			onChange={self.onChangeText}
		>
		</Form.Control>
	</Form.Group>

	<Form.Group controlId="formPayRate">
		<Form.Label>Pay Rate ($)</Form.Label>
		<Form.Control
			type="text"
			name="payRate"
			placeholder="Enter the pay rate"
			value={payRate}
			onChange={self.onChangeText}
		>
		</Form.Control>
		<br />
		<div style={{float: 'right'}}>
			<Button type="submit" variant="success" className="ml-1">
				Post Job
			</Button>
		</div>
	</Form.Group>
</Form>
