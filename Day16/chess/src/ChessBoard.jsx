import React from 'react'
import './ChessBoard.css'

const ChessBoard = () => {
    return (
      <div className="board">
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
    );
}

function Row(){
    return(
        <div className="row">
            <div className="place"></div>
            <div className="place"></div>
            <div className="place"></div>
            <div className="place"></div>
            <div className="place"></div>
            <div className="place"></div>
            <div className="place"></div>
            <div className="place"></div>
        </div>
    )
}

export default ChessBoard
