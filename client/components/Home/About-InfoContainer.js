import React from 'react'
import Info from './About-singleInfo'

const dummyInfo = [{name: 'Bitcoin1', price: '$117,193,515,285', price2: '$6,905.15', otherinfo: '16,971,900 BCT', percent: '0.92%'},
				{name: 'Bitcoin2', price: '$117,193,515,285', price2: '$6,905.15', otherinfo: '16,971,900 BCT', percent: '0.92%'},
				{name: 'Bitcoin3', price: '$117,193,515,285', price2: '$6,905.15', otherinfo: '16,971,900 BCT', percent: '0.92%'},
				{name: 'Bitcoin4', price: '$117,193,515,285', price2: '$6,905.15', otherinfo: '16,971,900 BCT', percent: '0.92%'},
				{name: 'Bitcoin5', price: '$117,193,515,285', price2: '$6,905.15', otherinfo: '16,971,900 BCT', percent: '0.92%'},
				{name: 'Bitcoin6', price: '$117,193,515,285', price2: '$6,905.15', otherinfo: '16,971,900 BCT', percent: '0.92%'},
				{name: 'Bitcoin7', price: '$117,193,515,285', price2: '$6,905.15', otherinfo: '16,971,900 BCT', percent: '0.92%'},
				{name: 'Bitcoin8', price: '$117,193,515,285', price2: '$6,905.15', otherinfo: '16,971,900 BCT', percent: '0.92%'},
				{name: 'Bitcoin9', price: '$117,193,515,285', price2: '$6,905.15', otherinfo: '16,971,900 BCT', percent: '0.92%'},
				{name: 'Bitcoin10', price: '$117,193,515,285', price2: '$6,905.15', otherinfo: '16,971,900 BCT', percent: '0.92%'},
				{name: 'Bitcoin11', price: '$117,193,515,285', price2: '$6,905.15', otherinfo: '16,971,900 BCT', percent: '0.92%'},
				{name: 'Bitcoin12', price: '$117,193,515,285', price2: '$6,905.15', otherinfo: '16,971,900 BCT', percent: '0.92%'},
				{name: 'Bitcoin13', price: '$117,193,515,285', price2: '$6,905.15', otherinfo: '16,971,900 BCT', percent: '0.92%'},
				{name: 'Bitcoin14', price: '$117,193,515,285', price2: '$6,905.15', otherinfo: '16,971,900 BCT', percent: '0.92%'},
				{name: 'Bitcoin15', price: '$117,193,515,285', price2: '$6,905.15', otherinfo: '16,971,900 BCT', percent: '0.92%'},
				{name: 'Bitcoin16', price: '$117,193,515,285', price2: '$6,905.15', otherinfo: '16,971,900 BCT', percent: '0.92%'},
				{name: 'Bitcoin17', price: '$117,193,515,285', price2: '$6,905.15', otherinfo: '16,971,900 BCT', percent: '0.92%'},
				{name: 'Bitcoin18', price: '$117,193,515,285', price2: '$6,905.15', otherinfo: '16,971,900 BCT', percent: '0.92%'},
				{name: 'Bitcoin19', price: '$117,193,515,285', price2: '$6,905.15', otherinfo: '16,971,900 BCT', percent: '0.92%'},
				{name: 'Bitcoin20', price: '$117,193,515,285', price2: '$6,905.15', otherinfo: '16,971,900 BCT', percent: '0.92%'},
				{name: 'Bitcoin21', price: '$117,193,515,285', price2: '$6,905.15', otherinfo: '16,971,900 BCT', percent: '0.92%'},
				{name: 'Bitcoin22', price: '$117,193,515,285', price2: '$6,905.15', otherinfo: '16,971,900 BCT', percent: '0.92%'}]


class InfoBox extends React.Component {
constructor(props) {
	super(props)
	this.state = {pageNum: 0}
	this.nextPage = this.nextPage.bind(this)
	this.prevPage = this.prevPage.bind(this)
}

nextPage() {
	this.setState((prevState) => {
		let newPageNum = (prevState.pageNum + 1) % Math.ceil(dummyInfo.length / 10)
		return {pageNum: newPageNum}
	})
}

prevPage() {
	this.setState((prevState) => {
		let newPageNum = ((prevState.pageNum - 1) === -1 ? Math.ceil(dummyInfo.length / 10) - 1 : (prevState.pageNum - 1)) % Math.ceil(dummyInfo.length / 10)
		return {pageNum: newPageNum}
	})
}

render() {
	let filteredInfo = dummyInfo.slice(this.state.pageNum * 10, (this.state.pageNum) * 10 + 10),
		notFirstPage = this.state.pageNum > 0,
		notLastPage = this.state.pageNum < Math.ceil(dummyInfo.length / 10) - 1
	return (
      <div id="infoContainer">
        {
			filteredInfo.map(info => {
				return <Info key={info.name} info={info} />
			})
        }
	        { notFirstPage && <button type="submit" id="prev-btn" onClick={this.prevPage}>Previous 10</button> }
	        { notLastPage && <button type="submit" id="next-btn" onClick={this.nextPage}>Next 10</button>}
      </div>
    )
}
}

// const mapState = state => {}
// export default connect(mapState)(About)

export default InfoBox
