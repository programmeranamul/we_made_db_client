import React, {useState} from 'react';
import { sellerDetailList } from './SellerInitalData';
import buyerAvatar from "../../Images/buyerAvatar.png";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const SellerList = () => {
    const [sellerDetails, setSellerDetails] = useState(sellerDetailList);
    const buyerAutyh = useSelector((state) => state.buyerAuthReducer);
    const history = useHistory();
    if (buyerAutyh.user.type !== "Seller") {
      history.replace("/buyer/1");
    }
    return (
        <div>
            <div className="container">
                {
                    sellerDetails.length > 0 ? <div className="mt-5">
                    <h5 className="mb-4 pb-2">
                      <b>Our Buyers (Marketing Qualified Leads) are waiting for you</b>
                    </h5>
                    <div className="row">
                      {sellerDetails.map((item) => (
                        <div className="col-md-4 col-sm-6 p-4">
                          <div className="card p-4 rounded-9 text-center">
                            <img
                              className="w-75px buyerCardLogo"
                              src={buyerAvatar}
                              alt=""
                            />
                            <h5 className="fw-700">{item.name}</h5>
                            <p className="m-0">
                              <b>{item.profession}</b>
                            </p>
                            <p className="m-0 fw-600">{item.location}</p>
                            <p className="m-0 fw-600">{item.size}</p>
                            <p className="m-0 fw-600">{item.schedule}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div> : <h5 className="mb-4 pb-2 ">
                      <b>No Seller Found !!</b>
                    </h5>
                }
            </div>
        </div>
    );
};

export default SellerList;