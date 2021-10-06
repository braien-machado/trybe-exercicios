import React from "react";

class Pokemon extends React.Component {
  render() {
    const pokeInfo = this.props.info;
    const averageWeight = pokeInfo.averageWeight;
    return (
      <div className='pokemon'>
        <div className='info'>
          <a href={ pokeInfo.moreInfo } target='_blank' rel='noreferrer'><h3>{ pokeInfo.name }</h3></a>
          <p>{ pokeInfo.type }</p>
          <p>{ `Average weight: ${averageWeight.value.toFixed(1)} ${averageWeight.measurementUnit}` }</p>
        </div>
        <img src={ pokeInfo.image } alt={pokeInfo.name} ></img>
      </div>
    )
  }
}

export default Pokemon;
