import React from "react"
function Others(){
    const widthStyle ={
        width: "75%"
    };
    return(
        <div class="container-fluid">

                    {/* <!-- Page Heading --> */}
                    <h1 class="h3 mb-1 text-gray-800">Other Utilities</h1>
                    <p class="mb-4">Bootstrap's default utility classes can be found on the official <a
                            href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
                        below were created to extend this theme past the default utility classes built into Bootstrap's
                        framework.</p>

                    {/* <!-- Content Row --> */}
                    <div class="row">

                        <div class="col-lg-6">

                            {/* <!-- Overflow Hidden --> */}
                            <div class="card mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Overflow Hidden Utilty</h6>
                                </div>
                                <div class="card-body">
                                    Use <code>.o-hidden</code> to set the overflow property of any element to hidden.
                                </div>
                            </div>

                            {/* <!-- Progress Small --> */}
                            <div class="card mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Progress Small Utility</h6>
                                </div>
                                <div class="card-body">
                                    <div class="mb-1 small">Normal Progress Bar</div>
                                    <div class="progress mb-4">
                                        <div class="progress-bar" role="progressbar" style={widthStyle}
                                            aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="mb-1 small">Small Progress Bar</div>
                                    <div class="progress progress-sm mb-2">
                                        <div class="progress-bar" role="progressbar" style={widthStyle}
                                            aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    Use the <code>.progress-sm</code> class along with <code>.progress</code>
                                </div>
                            </div>

                            {/* <!-- Dropdown No Arrow --> */}
                            <div class="card mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Dropdown - No Arrow</h6>
                                </div>
                                <div class="card-body">
                                    <div class="dropdown no-arrow mb-4">
                                        <button class="btn btn-secondary dropdown-toggle" type="button"
                                            id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                            Dropdown (no arrow)
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                    Add the <code>.no-arrow</code> class alongside the <code>.dropdown</code>
                                </div>
                            </div>

                        </div>

                        <div class="col-lg-6">

                            {/* <!-- Roitation Utilities --> */}
                            <div class="card">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Rotation Utilities</h6>
                                </div>
                                <div class="card-body text-center">
                                    <div class="bg-primary text-white p-3 rotate-15 d-inline-block my-4">.rotate-15
                                    </div>
                                    <hr/>
                                    <div class="bg-primary text-white p-3 rotate-n-15 d-inline-block my-4">.rotate-n-15
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
    )
}

export default Others