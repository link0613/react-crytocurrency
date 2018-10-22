import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Icon } from 'antd'
// import 'ant-design-icons/dist/anticons.min.css'

const Founder = (props) => {
    return (
      <Col md={3} id="singleFounder">
		<img src={'./assets/' + props.info.image} />
		<div>
	        <h4>{props.info.name}</h4>
	        <p>{props.info.title}</p>
	    </div>
	    <div>
	        <p>{props.info.description}</p>
	        <div className="icon-container">
	        	{
	        		props.info.icon.map(icon => {
	        			return <i key={icon} className={icon} style={{fontSize: "20px"}} />
	        		})
	        	}
	        </div>
        </div>
      </Col>
    )
}

// const mapState = state => {}
// export default connect(mapState)(FAQ)

export default Founder
