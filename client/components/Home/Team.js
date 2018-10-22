import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Founder from './Founder'

const founders = [	{	image: 'founder_bill.jpg',
						name: 'Bill Xing',
						title: 'Co-Founder,CIO',
						description: 'Bill is the original founder and financial engineering expert behind Panda\'s analytics and algorithms. Bill holds a master\'s in financial engineering from University of Illinois at Urbana-Champaign.',
						icon: ["ai-linkedin", "ai-twitter", "ai-dribbble-square", "ai-facebook"]},
					{	image: 'founder_bill.jpg',
						name: 'A. Handa',
						title: 'Advisor',
						description: 'Bill is the original founder and financial engineering expert behind Panda\'s analytics and algorithms. Bill holds a master\'s in financial engineering from University of Illinois at Urbana-Champaign.',
						icon: ["ai-github", "ai-twitter", "ai-instagram", "ai-behance-square"]},
					{	image: 'founder_bill.jpg',
						name: 'Vladimir Jelisavcic',
						title: 'Director',
						description: 'Bill is the original founder and financial engineering expert behind Panda\'s analytics and algorithms. Bill holds a master\'s in financial engineering from University of Illinois at Urbana-Champaign.',
						icon: ["ai-medium", "ai-twitter"]},
					{	image: 'founder_bill.jpg',
						name: 'James Larkin',
						title: 'Director',
						description: 'Bill is the original founder and financial engineering expert behind Panda\'s analytics and algorithms. Bill holds a master\'s in financial engineering from University of Illinois at Urbana-Champaign.',
						icon: ["ai-medium", "ai-twitter"]}]

const Team = () => {
    return (
		<div id="team" className="section">
			<Row className="top">
				<Col md={6}>
					<h1>Team/Advisors</h1>
					<p>This is the team behind Panda Analytics</p>
					<p className="learn-more">Learn more</p>
				</Col>
				<Col md={6} className="flex-row">
					<Col md={3} className="col-md-offset-1">
						<h2>40</h2>
						<p>Years of investment experience</p>
					</Col>
					<Col md={3} className="col-md-offset-1">
						<h2>15</h2>
						<p>Years of software experience</p>
					</Col>
					<Col md={3} className="col-md-offset-1">
						<h2>2</h2>
						<p>Years of cryptocurrency experience</p>
					</Col>
				</Col>
			</Row>
			<Row id="founders-container" className="bottom">
				{
					founders.map(founder => <Founder key={founder.name} info={founder} />)
				}
			</Row>
		</div>
    )
}

// const mapState = state => {}
// export default connect(mapState)(Team)

export default Team
