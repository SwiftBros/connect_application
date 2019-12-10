// var self = this;
//
// function PostAJob() {
// 	const [show, setShow] = React.useState(false);
//
// 	const handleClose = () => setShow(false);
// 	const handleShow = () => setShow(true);
//
// 	return (
// 		<>
// 			<Button className="ml-3" variant="primary" onClick={handleShow}>Create a job posting</Button>
//
// 			<Modal show={show} onHide={handleClose}>
// 				<Modal.Header closeButton>
// 					<Modal.Title>Create a Job Posting</Modal.Title>
// 				</Modal.Header>
// 				<Modal.Body>
//
// 				</Modal.Body>
// 			</Modal>
// 		</>
// 	);
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
			<Button variant="secondary" onClick={handleClose}>
				Close
			</Button>
			<Button type="submit" variant="success" className="ml-1">
				Post Job
			</Button>
		</div>
	</Form.Group>
</Form>
