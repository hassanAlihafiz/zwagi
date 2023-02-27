import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch,useSelector } from "react-redux";
import { callGetApi } from "utils/api";
import { options } from "less";

export default function RegisterTeamHtml(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(1);
  const [teams, setTeams] = useState({});
  const [teamSize, setTeamSize] = useState(5);
  const [selectedTeam, setSelectedTeam] = useState(6);
  const [teamAmount, setTeamAmount] = useState(500);
  const [teamName, setTeamName] = useState('');
  const [got, setGOT] = useState(1);
  const [errors, setErrors] = useState([]);

  let tshirtInit = []//[...Array(teamSize).keys()].map(() => 1);
  const [tshirts, setTshirts] = useState(tshirtInit);

  const handleSelectTeamSize = (teamSize_, teamId_) => {
    setTeamSize(teamSize_);
    setSelectedTeam(teamId_);
    //tshirtInit = [...Array(teamSize_).keys()].map(() => 1);
    //setTshirts(tshirtInit);
  };

  const handleTeamName = (event) => {
    setErrors([]);
    setTeamName(event.target.value);
  }

  const handleGOT = (event) => {
    setGOT(event.target.value);
  }

  useEffect(() => {
    getTeams();
    window.scroll(0, 0);
    clearCart();
  }, []);

  const getTeams = () => {
    callGetApi(`team/get_team_product`, onGetTeams, onFailTeams);
  }

  const onGetTeams = (data) => {
    const result = data.data;
    let team_products = {};

    if (result && result["team_products"]) {
      result["team_products"].map((team_product) => {
        team_products[team_product.id] = team_product;
      });
    }
    setTeams(team_products);
  };
  const onFailTeams = () => {

  };

  const changeTshirtSize = (event) => {
    tshirtInit = [...tshirts];
    tshirtInit[parseInt(event.target.id)] = parseInt(event.target.value);
    //setTshirts(tshirtInit);
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  }

 

  const updateTeamDetails =()=>{
    dispatch({
      type: 'UPDATE_TEAM_DETAILS',
      payload: {
        team_name: teamName,
        team_size: teamSize,
        got_before:got
      }
    })    
  }

  const handleCompleteRegistration = () => {
    let errors = [];
    if (!teamName) errors.push("team_name.required");
    if (errors.length > 0) {
      setErrors(errors);
      return;
    }
    clearCart();
    addToCart();
    updateTeamDetails();
    router.push("/checkout?page=registerteam");
  };

  const addToCart = () => {
    // let products = tshirts.reduce((acc, size) => {
    //   if (acc[size]) {
    //     acc[size].quantity += 1;
    //   } else {
    //     acc[size] = {
    //       ...variants[size],
    //       quantity: 1,
    //       title: variants[size].description,
    //     };
    //   }
    //   return acc;
    // }, []);

    // products.map((product) => {
    //   dispatch({
    //     type: "ADD_CART",
    //     payload: {
    //       product,
    //       quantity: product.quantity,
    //       size: product.variant,
    //     },
    //   });
    // });
    dispatch({
      type: "ADD_CART",
      payload: {
        product: teams[selectedTeam],
        quantity: 1,
        amount: teams[selectedTeam].price
      },
    });
  };

  return (
    <>
      <div
        className="inner-pages page-register-team"
        style={{ background: "#F9F9F9" }}
      >
        <div className="inner-wrapper">
          <div className="inner-head">
            <h3>Game On Tournament Registration</h3>
            <p>Please fill out the information below to register your team!</p>
          </div>
          <div className="inner-content">
            <div className="section-team-size">
              <p>Team Size</p>
              <div className="team-cards row">
                <a
                  className={`col-sm-6 team-card ${
                    isActive === 1 ? "active" : ""
                    }`}
                  onClick={() => {
                    setIsActive(1);
                    handleSelectTeamSize(5, 6);
                  }}
                >
                  <h1>5</h1>
                  <p>Team of 5</p>
                  <h5>$500</h5>
                </a>
                <a
                  className={`col-sm-6 team-card ${
                    isActive === 2 ? "active" : ""
                    }`}
                  onClick={() => {
                    setIsActive(2);
                    handleSelectTeamSize(10, 7);
                  }}
                >
                  <h1>10</h1>
                  <p>Team of 10</p>
                  <h5>$1000</h5>
                </a>
              </div>
            </div>
            <div className="section-team-information">
              <p>Team Information</p>
              <div className="input-fields row">
                <div className="input-field checkout-wrapper col-sm-10">
                  <label>Unique Team Name *</label>
                  <input type="text" 
                  className={`${
                    errors.indexOf("team_name.required") >= 0 ? "input-error" : ""
                    }`} 
                  value={teamName} 
                  onChange={handleTeamName}/>
                  {errors.indexOf("team_name.required") >= 0 && (
                    <p className="valid-error">Please input team name</p>
                  )}
                </div>
              </div>
              <div className="input-fields row">
                {/* <div className="input-field col-sm-10">
                  <label>Team Shirt Size</label>
                  {tshirts &&
                    tshirts.map((val, index) => (
                      <select
                        key={index}
                        id={index}
                        onChange={changeTshirtSize}
                        value={val}
                      >
                        <option key="sm" value="1">
                          SM
                        </option>
                        <option key="m" value="2">
                          M
                        </option>
                        <option key="l" value="3">
                          L
                        </option>
                        <option key="xl" value="4">
                          XL
                        </option>
                        <option key="2xl" value="5">
                          2XL
                        </option>
                        <option key="3xl" value="6">
                          3XL
                        </option>
                      </select>
                    ))}
                </div> */}
                <div className="input-field col-sm-10">
                  <label>Have you participated in the GOT before?</label>
                  <select value={got} onChange={handleGOT}>
                    <option key="yes" value="1">
                      Yes
                    </option>
                    <option key="no" value="2">
                      No
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <a
              className="btn-complete-registration"
              onClick={handleCompleteRegistration}
            >
              COMPLETE REGISTRATION
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .valid-error {
          color: #ff6969!important;
          font-size: 14px!important;
        }
      `}</style>
    </>
  );
}
