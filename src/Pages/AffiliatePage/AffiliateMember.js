import React from "react";
import af1 from "../../Assest/Image/af1.jpg";
import { Alert } from 'react-bootstrap';

const affiliateData = [
    {
        name: "Azharul Islam",
        referralNumber: "7921",
        affiliateImage: af1,
      },
     
];

const AffiliateMember = () => {
  return (
    <div className="pb-5 pt-4">
      <div className="container">
        {
            affiliateData.length > 0?<div className="row">
            {
                affiliateData.map(data => <div className="col-md-4" key={data.referralNumber}>
                    <div className="p-4 my-3">
                        <div className="card">
                            <img src={data.affiliateImage} className="card-img-top" alt="" />
                            <div className = "card-body text-center">
                                <h4 className="card-title">{data.name} </h4>
                                <p><b>Referral Number: {data.referralNumber}</b></p>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div> : <Alert variant="danger">Affiliate Marketer Not Found</Alert>
        }
      </div>
    </div>
  );
};

export default AffiliateMember;
