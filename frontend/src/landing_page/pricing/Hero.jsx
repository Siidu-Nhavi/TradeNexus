import React from 'react';

function Hero() {
  return (
    <div className="container text-center my-5">
      {/* Heading Section */}
      <div className="row py-5 mt-5">
        <h1 className="fs-3 fw-semibold">Charges</h1>
        <p className="fs-5 fw-normal mt-2 text-muted">
          List of all charges and taxes
        </p>
      </div>

      {/* Cards Section */}
      <div className="row py-5 mt-5">
        <div className="col-12 col-md-4 p-4">
          <img src="/Assets/pricingEquity.svg" className="mb-3" alt="Equity Pricing" />
          <h1 className="fs-5 fw-semibold">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
          </p>
        </div>

        <div className="col-12 col-md-4 p-4">
          <img src="/Assets/intradayTrades.svg" className="mb-3" alt="Intraday Trades" />
          <h1 className="fs-5 fw-semibold">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>

        <div className="col-12 col-md-4 p-4">
          <img src="/Assets/pricingEquity.svg" className="mb-3" alt="Mutual Funds" />
          <h1 className="fs-5 fw-semibold">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
