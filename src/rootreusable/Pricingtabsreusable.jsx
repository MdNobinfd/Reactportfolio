import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { Button } from "react-bootstrap";

const Pricingtabsreusable = (props) => {
  return (
    <>
    <div className="pricing_sheet">
    <div className="pricing_sheet_heading  justify-content-between align-items-center">
        <div className="pricing_head_left">
            <h3>Make Your Single Page</h3>
            <span>Elementor</span>
        </div>
        <div className="pricing_head_right">
            <span>$30.00</span>
        </div>
    </div>
    <div className="pricing_sheet_discription">
    <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>
    </div>
    <div className="pricing_sheet_meddle justify-content-between">
        <div className="pricing_sheet_meddle_left">
            <ul>
                <li> <span><FaCheck /></span> 1 Page with Elementor</li>
                <li> <span><FaCheck /></span> Design Customization</li>
                <li> <span><FaCheck /></span> Responsive Design</li>
                <li> <span><FaCheck /></span> Content Upload</li>
                <li> <span><FaCheck /></span> Design Customization</li>
                <li> <span><FaCheck /></span> 2 Plugins/Extensions</li>
            </ul>
         </div>
        <div className="pricing_sheet_meddle_left">
            <ul>
                <li> <span><FaCheck /></span> multipage Elementor</li>
                <li> <span><FaCheck /></span> Design Figma</li>
                <li> <span><FaCheck /></span> MAintaine Design</li>
                <li> <span><FaCheck /></span> Content Upload</li>
                <li> <span><FaCheck /></span> Design With XD</li>
                <li> <span><FaCheck /></span> 8 Plugins/Extensions</li>
            </ul>
        </div>
    </div>
    <div className="pricing_sheet_button">
        <Button>ORDER NOW <span><FaArrowRight /></span></Button>
    </div>
</div>
    </>
  )
}

export default Pricingtabsreusable