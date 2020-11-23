import React from "react"
import { Button } from "../ButtonElements"
import "./HeroSection.css"

function HeroSection() {
    return (
        <div className="hero-container">
            <h1>Travel More</h1>
            <p>Plan your next trip today</p>
            <div className="hero-btns">
                <Button>Get Started</Button>

            </div>

        </div>
    )
}

export default HeroSection
