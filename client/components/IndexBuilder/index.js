import React from 'react'
// import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, DropdownButton, MenuItem } from 'react-bootstrap'
import IndexBuilderChart from './IndexBuilderChart'
import Slider from '../Slider'
import { openModal } from '../../store'
import { DatePicker } from 'antd'
import { Layout, Menu, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
import moment from 'moment'



const { RangePicker } = DatePicker

class IndexBuilder extends React.Component {
	constructor(props) {
		super(props)
		this.state = {	slider1: 0,
						slider2: 0.1,
						slider3: 0,
						statisticalMethod: 'medium',
						numDays: "7",
						startDate: moment(),
						endDate: moment(),
						upperBound: 0.3,
						lowerBound: 0.01,
						rebalancingFrequency: 30,
						initialInvestment: 1000,
						algorithm: "Consensus algorithms"
					}
		this.slider1Change = this.slider1Change.bind(this)
		this.slider2Change = this.slider2Change.bind(this)
		this.slider3Change = this.slider3Change.bind(this)
		this.onDatesChange = this.onDatesChange.bind(this)
		this.upperBoundChange = this.upperBoundChange.bind(this)
		this.lowerBoundChange = this.lowerBoundChange.bind(this)
		this.rebalancingChange = this.rebalancingChange.bind(this)
		this.investmentChange = this.investmentChange.bind(this)
		this.algorithmChange = this.algorithmChange.bind(this)
	}

	slider1Change(event, value) {
		event.preventDefault()
		this.setState({slider1: value})
	}

	slider2Change(event, value) {
		event.preventDefault()
		this.setState({slider2: value})
	}

	slider3Change(event, value) {
		event.preventDefault()
		this.setState({slider3: value})
	}

	statisticalMethodChange(event) {
		this.setState({statisticalMethod: event.target.value})
	}

	numDaysChange(event) {
		this.setState({numDays: event.target.value})
	}


	upperBoundChange(event) {
    this.setState({
      upperBound: event.target.value.replace(/[^0-9.]/gi, '')
    })
	}

	lowerBoundChange(event) {
    this.setState({
      lowerBound: event.target.value.replace(/[^0-9.]/gi, '')
    })
	}

	rebalancingChange(event) {
    this.setState({
      rebalancingFrequency: event.target.value.replace(/[^0-9]/gi, '')
    })
	}

	investmentChange(event) {
    this.setState({
      initialInvestment: event.target.value.replace(/[^0-9]/gi, '')
    })
	}

	onDatesChange(date, dateString) {
	this.setState({
      startDate: dateString[0],
      endDate: dateString[1]
    })
	}

	algorithmChange(event) {
		console.log(event)
    this.setState({algorithm: event.target.name})
	}

	render() {
		return (
			<div style={{height: '100vh', paddingTop: 80}}> 
					<Layout className="indexBuilderLayout">
						<Sider className="indexBuilderSider">
							<div className="input-field">
								<h4>Capture the Market Without Making Individual Bets</h4>
								<div>
									<p>Pick the number of top assets based on market cap to include in your index</p>
									<Slider  min={0} max={50} radius={this.state.slider1} onChange={this.slider1Change} step={1}/>
									<div className="slider-label-container"><div>1</div><div>25</div><div>50</div></div>
								</div>
								<div>
									<p>Reduce the effect of pumping and dumping with statistical methods.</p>
									<div className="checkboxContainer">
											<input id="pd-median" type="radio" value="medium" checked={this.state.statisticalMethod === "medium"} onChange={this.statisticalMethodChange.bind(this)} />
											<label htmlFor="pd-median">Median</label>
											<input id="pd-mean" type="radio" value="mean" checked={this.state.statisticalMethod === "mean"} onChange={this.statisticalMethodChange.bind(this)} />
											<label htmlFor="pd-mean">Mean</label>
									</div>
								</div>
								<div>
									<p>Number of days used for calculating median/mean value</p>
									<div className="checkboxContainer">
											<input id="seven" type="radio" value="7" checked={this.state.numDays === "7"} onChange={this.numDaysChange.bind(this)} />
											<label htmlFor="seven">1 week</label>
											<input id="thirty" type="radio" value="30" checked={this.state.numDays === "30"} onChange={this.numDaysChange.bind(this)} />
											<label htmlFor="thirty">30 days</label>
											<input id="sixty" type="radio" value="60" checked={this.state.numDays === "60"} onChange={this.numDaysChange.bind(this)} />
											<label htmlFor="sixty">60 days</label>
											<input id="ninety" type="radio" value="90" checked={this.state.numDays === "90"} onChange={this.numDaysChange.bind(this)} />
											<label htmlFor="ninety">90 days</label>
									</div>
								</div>
							</div>
							<div className="input-field">
								<h4>Promote Diversification Further</h4>
								<div>
									<p>Hard coding the upper bound</p>
									<input className="text-input" type="text" value={this.state.upperBound} placeholder="Input" onChange={this.upperBoundChange.bind(this)} />
								</div>
								<div>
									<p>Hard coding the lower bound</p>
									<input className="text-input" type="text" value={this.state.lowerBound} placeholder="Input" onChange={this.lowerBoundChange.bind(this)} />
								</div>
							</div>
							<div className="input-field">
								<h4>Catch Up With Rebalancing In An Evolving Market</h4>
								<div>
									<p>Select the rebalancing frequency (days)</p>
									<form>
										<input className="text-input" type="text" value={this.state.rebalancingFrequency} placeholder="Input" onChange={this.rebalancingChange.bind(this)} />
									</form>
								</div>
								<div>
									<h4>Technology Matters</h4>
									<DropdownButton title={this.state.algorithm} id="dropdown-size-medium">
										<MenuItem eventKey="1" name="PoW" onClick={this.algorithmChange.bind(this)}>PoW</MenuItem>
										<MenuItem eventKey="2" name="PoW/PoS" onClick={this.algorithmChange.bind(this)}>PoW/PoS</MenuItem>
										<MenuItem eventKey="3" name="Other" onClick={this.algorithmChange.bind(this)}>Other</MenuItem>
									</DropdownButton>
								</div>
							</div>
							<div className="input-field">
								<h4>Practical Matters</h4>
								<div>
									<p>Transaction Cost (%)</p>
									<Slider  min={0.1} max={5} radius={this.state.slider2} onChange={this.slider2Change} step={0.1} />
									<div className="slider-label-container"><div>0.1</div><div>2.5</div><div>5%</div></div>
								</div>
								<div>
									<p>Initial Investment (USD)</p>
									<form>
										<input className="text-input" type="text" value={'$' + this.state.initialInvestment} placeholder="$" onChange={this.investmentChange.bind(this)} />
									</form>
								</div>
							</div>
							<div className="input-field calendar-box">
								<h4>Backtest to Prove the Idea</h4>
								<div>
									<p>Pick the date range</p>
									<RangePicker
										onChange={this.onDatesChange}
										format="YYYY/MM/DD"
										ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
										defaultValue={[moment(), moment().endOf('month')]}
									/>
								</div>
							</div>
							<div className="input-field">
								<h4>Customize the Benchmark</h4>
								<p>60% BTC, 40% ETH</p>
								<Slider  min={0} max={50} radius={this.state.slider3} onChange={this.slider3Change} step={1}/>
								<div className="slider-label-container"><div>0%</div><div>50</div><div>100%</div></div>
							</div>
						</Sider>
						<Content>
							<IndexBuilderChart />
						</Content> 
					</Layout> 
			</div>
		)
		return (
			<div>
				<div className="switchpage-container">
					<Link to="/toolkit"><button type="submit" className="start-btn">GO TO INVESTMENT TOOLKIT</button></Link>
				</div>
				<div id="index-builder" >
				    <Row>
						<Col lg={4} className="input-container">
							<div className="input-field">
								<h4>Capture the Market Without Making Individual Bets</h4>
								<div>
									<p>Pick the number of top assets based on market cap to include in your index</p>
									<Slider  min={0} max={50} radius={this.state.slider1} onChange={this.slider1Change} step={1}/>
									<div className="slider-label-container"><div>1</div><div>25</div><div>50</div></div>
								</div>
								<div>
									<p>Reduce the effect of pumping and dumping with statistical methods.</p>
									<div className="checkboxContainer">
											<input id="pd-median" type="radio" value="medium" checked={this.state.statisticalMethod === "medium"} onChange={this.statisticalMethodChange.bind(this)} />
											<label htmlFor="pd-median">Median</label>
											<input id="pd-mean" type="radio" value="mean" checked={this.state.statisticalMethod === "mean"} onChange={this.statisticalMethodChange.bind(this)} />
											<label htmlFor="pd-mean">Mean</label>
									</div>
								</div>
								<div>
									<p>Number of days used for calculating median/mean value</p>
									<div className="checkboxContainer">
											<input id="seven" type="radio" value="7" checked={this.state.numDays === "7"} onChange={this.numDaysChange.bind(this)} />
											<label htmlFor="seven">1 week</label>
											<input id="thirty" type="radio" value="30" checked={this.state.numDays === "30"} onChange={this.numDaysChange.bind(this)} />
											<label htmlFor="thirty">30 days</label>
											<input id="sixty" type="radio" value="60" checked={this.state.numDays === "60"} onChange={this.numDaysChange.bind(this)} />
											<label htmlFor="sixty">60 days</label>
											<input id="ninety" type="radio" value="90" checked={this.state.numDays === "90"} onChange={this.numDaysChange.bind(this)} />
											<label htmlFor="ninety">90 days</label>
									</div>
								</div>
							</div>
						</Col>
						<Col lg={4} className="input-container">
							<div className="input-field">
								<h4>Promote Diversification Further</h4>
								<div>
									<p>Hard coding the upper bound</p>
									<input className="text-input" type="text" value={this.state.upperBound} placeholder="Input" onChange={this.upperBoundChange.bind(this)} />
								</div>
								<div>
									<p>Hard coding the lower bound</p>
									<input className="text-input" type="text" value={this.state.lowerBound} placeholder="Input" onChange={this.lowerBoundChange.bind(this)} />
								</div>
							</div>
						</Col>
						<Col lg={4} className="input-container">
							<div className="input-field">
								<h4>Catch Up With Rebalancing In An Evolving Market</h4>
								<div>
									<p>Select the rebalancing frequency (days)</p>
									<form>
										<input className="text-input" type="text" value={this.state.rebalancingFrequency} placeholder="Input" onChange={this.rebalancingChange.bind(this)} />
									</form>
								</div>
								<div>
									<h4>Technology Matters</h4>
									<DropdownButton title={this.state.algorithm} id="dropdown-size-medium">
								      <MenuItem eventKey="1" name="PoW" onClick={this.algorithmChange.bind(this)}>PoW</MenuItem>
								      <MenuItem eventKey="2" name="PoW/PoS" onClick={this.algorithmChange.bind(this)}>PoW/PoS</MenuItem>
								      <MenuItem eventKey="3" name="Other" onClick={this.algorithmChange.bind(this)}>Other</MenuItem>
									</DropdownButton>
								</div>
							</div>
						</Col>
				    </Row>
				    <Row>
						<Col lg={4} className="input-container">
							<div className="input-field">
								<h4>Practical Matters</h4>
								<div>
									<p>Transaction Cost (%)</p>
									<Slider  min={0.1} max={5} radius={this.state.slider2} onChange={this.slider2Change} step={0.1} />
									<div className="slider-label-container"><div>0.1</div><div>2.5</div><div>5%</div></div>
								</div>
								<div>
									<p>Initial Investment (USD)</p>
									<form>
										<input className="text-input" type="text" value={'$' + this.state.initialInvestment} placeholder="$" onChange={this.investmentChange.bind(this)} />
									</form>
								</div>
							</div>
						</Col>
						<Col lg={4} className="input-container">
							<div className="input-field calendar-box">
								<h4>Backtest to Prove the Idea</h4>
								<div>
									<p>Pick the date range</p>
									<RangePicker
										onChange={this.onDatesChange}
										format="YYYY/MM/DD"
										ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
										defaultValue={[moment(), moment().endOf('month')]}
									/>
								</div>
							</div>
						</Col>
						<Col lg={4} className="input-container">
							<div className="input-field">
								<h4>Customize the Benchmark</h4>
								<p>60% BTC, 40% ETH</p>
								<Slider  min={0} max={50} radius={this.state.slider3} onChange={this.slider3Change} step={1}/>
								<div className="slider-label-container"><div>0%</div><div>50</div><div>100%</div></div>
							</div>
						</Col>
				    </Row>
				    <div id="execute-container">
						<button type="submit" className="start-btn" onClick={this.props.openModal}>EXECUTE</button>
				    </div>
					<IndexBuilderChart />
				</div>
			</div>
		)
	}
}

const mapState = state => ({})

const mapDispatch = dispatch => {
    return {
        openModal: () => dispatch(openModal())
    }
}

export default connect(mapState, mapDispatch)(IndexBuilder)
