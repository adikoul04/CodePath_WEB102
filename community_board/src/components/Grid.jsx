import React from "react";
import Card from './Card'

const Grid = () => {
    return (
        <div className="Grid">
            <table>
                <tr>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </tr>
                <tr>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </tr>
                <tr>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </tr>
            </table>
        </div>
    )
}

export default Grid;