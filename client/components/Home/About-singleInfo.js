import React from 'react'

const Info = (props) => {
    return (
      <div id="singleInfo" className="flex-row">
      	<img src="./assets/icon-bitcoin.png" />
        <div style={{color: '#0059D8', fontWeight: 'bold'}}>{props.info.name}</div>
        <div>{props.info.price}</div>
        <div>{props.info.price2}</div>
        <div>{props.info.otherinfo}</div>
        <div style={{color: 'lightgreen'}}>{props.info.percent}</div>
      </div>
    )
}

// const mapState = state => {}
// export default connect(mapState)(FAQ)

export default Info
