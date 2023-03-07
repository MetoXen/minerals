import { useState } from 'react'

const MineralInfo = ({ mineral, func }) => {

    const [hover, setHover] = useState(false)


    return (
    <div className="MineralInfo">
        <div className="mineralinfo_close" onClick={() => func(mineral.name)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>

            {hover ?
                <img src={require('../img/icons/cancelFILL1.png')} /> :
                <img src={require('../img/icons/cancelFILL0.png')} />}
        </div>
            <div className="mineralinfo_name">{mineral.name}</div>
            <img className="mineralinfo_image" src={require(`../img/${mineral.Image}`)} alt={mineral.Image} />
            <div className="mineralinfo_notes">{mineral.notes}</div>
            {mineral.link && <div className="mineralinfo_link"><span>link: </span><a href={mineral.link}>
                {mineral.name}</a></div>}
    </div>

    )
}

export default MineralInfo

