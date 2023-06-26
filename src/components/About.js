import React from 'react'

export default function About(props) {


    return (

        <div className="container my-2" >
            <h2>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item"  >
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#343a40', color: props.mode === 'light' ? 'black' : '#fff' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#343a40', color: props.mode === 'light' ? 'black' : '#fff' }}>
                        <div className="accordion-body">
                            TextUtils is a free text analyzer where you can perform numerous function on your texts like doing it Uppercase, LowerCase, Copying it,Hearing it. You can also download your texts in a form of textfile.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#343a40', color: props.mode === 'light' ? 'black' : '#fff' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Bowser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#343a40', color: props.mode === 'light' ? 'black' : '#fff' }}>
                        <div className="accordion-body">
                            It is compatible on all devices,browsers. You can use it from anywhere , at anytime.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#343a40', color: props.mode === 'light' ? 'black' : '#fff' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Feel Free to Contribute</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#343a40', color: props.mode === 'light' ? 'black' : '#fff' }} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            If you want add any functions to this site you can share your opinion with the owner. I'll revert back.
                        </div>
                    </div>
                </div>
            </div>


        </div >

    )
}
