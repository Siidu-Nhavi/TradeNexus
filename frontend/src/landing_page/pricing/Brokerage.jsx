import React from 'react';

function Brokerage() {
    return (
        <div className="container my-5">
            {/* Heading */}
            <div className="row text-center mb-5">
                <div className="col">
                    <h1 className="fs-3 fw-semibold">Commodity Brokerage Charges</h1>
                    <p className="fs-5 text-muted mt-2">
                        Detailed breakdown of brokerage, fees, and taxes
                    </p>
                </div>
            </div>

            {/* Table Section */}
            <div className="row">
                <div className="col-12 text-center">
                    <table className="table table-bordered table-hover align-middle">
                        <thead className="table-light">
                            <tr>
                                <th scope="col">Charges</th>
                                <th scope="col">Commodity Futures</th>
                                <th scope="col">Commodity Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Brokerage</td>
                                <td>0.03% or ₹20/executed order (whichever is lower)</td>
                                <td>₹20/executed order</td>
                            </tr>
                            <tr>
                                <td>STT/CTT</td>
                                <td>0.01% on sell side (Non‑Agri)</td>
                                <td>0.05% on sell side</td>
                            </tr>
                            <tr>
                                <td>Transaction charges</td>
                                <td>MCX: 0.0021%, NSE: 0.0001%</td>
                                <td>MCX: 0.0418%, NSE: 0.001%</td>
                            </tr>
                            <tr>
                                <td>GST</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            </tr>
                            <tr>
                                <td>SEBI charges</td>
                                <td>Agri: ₹1/crore, Non‑Agri: ₹10/crore</td>
                                <td>₹10/crore</td>
                            </tr>
                            <tr>
                                <td>Stamp charges</td>
                                <td>0.002% or ₹200/crore on buy side</td>
                                <td>0.003% or ₹300/crore on buy side</td>
                            </tr>
                        </tbody>
                    </table>
                    < a href="" style={{textDecoration:"none", textAlign:"center"}}>Calculate your costs upfront </a>using our brokerage calculator.
                </div>
            </div>
        </div>
    );
}

export default Brokerage;
