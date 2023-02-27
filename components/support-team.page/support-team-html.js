import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import ProgressBar from "components/progressbar/progressbar";
import { callGetApi } from "utils/api";
import { asPrice } from "utils/text";

export default function CausesHtml(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isLoadingTeamList, setIsLoadingTeamList] = useState(false);
  const [isLoadingDonated, setIsLoadingDonated] = useState(false);
  const [teamList, setTeamList] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(0);
  const [teamDonatedAmountList, setTeamDonatedAmountList] = useState({});
  const [donateAmount, setDonateAmount] = useState(0);
  const [unableButton, setUnableButton] = useState(false);
  const [teamListDict, setTeamListDict] = useState({});

  const handleAddCart = () => {
    dispatch({
      type: "ADD_CART",
      payload: {
        product: { ...teamListDict[selectedTeam], price: donateAmount },
        quantity: 1,
        amount: donateAmount
      },
    });
    setTimeout(() => {
      dispatch({
        type: 'OPEN_SIDE_CART',
      })
    }, 1000)
  }

  const handleTeamOnChange = (event) => {
    setSelectedTeam(event.target.value);
  }
  const onSuccessGetTeamList = (data) => {
    setIsLoadingTeamList(false);
    if (data && data.data && data.data.length > 0) {
      let teamDict = {};
      setTeamList(data.data.map((team) => {
        let dict = {
          id: team.id,
          key: team.title.toLowerCase().replace(' ', '-'),
          title: team.title,
          image: team.image,
        };
        teamDict[team.id] = dict;
        return dict;
      }));
      setTeamListDict(teamDict);
      setSelectedTeam(data.data[0].id);
    }
  }

  const onFailGetTeamList = () => {
    setIsLoadingTeamList(false);
  }

  const loadTeamList = () => {
    setIsLoadingTeamList(true);
    callGetApi("team/get_team_list", onSuccessGetTeamList, onFailGetTeamList);
  }

  const onSuccessGetTeamDonatedAmountList = (data) => {
    setIsLoadingDonated(false);
    if (data && data.data) {
      let teamDonationData = {};
      data.data.map((teamDonation) => {
        teamDonationData[teamDonation.product_id] = teamDonation;
      })
      setTeamDonatedAmountList(teamDonationData);
    }
  }

  const onFailGetTeamDonatedAmountList = () => {
    setIsLoadingDonated(false);
  }

  const loadTeamDonatedAmountList = () => {
    setIsLoadingDonated(true);
    callGetApi("team/get_team_donated_amount", onSuccessGetTeamDonatedAmountList, onFailGetTeamDonatedAmountList);
  }

  const handleDonateAmount = (event) => {
    if (selectedTeam && parseInt(event.target.value) > 0) {
      setUnableButton(true);
    } else {
      setUnableButton(false);
    }
    setDonateAmount(parseInt(event.target.value));
  }

  useEffect(() => {
    loadTeamList();
    loadTeamDonatedAmountList();
  }, [])

  return (
    <>
      <div className="inner-pages page-support-team" style={{ background: "#F9F9F9" }}>
        <div className="inner-single-blog">
          <div className="inner-wrapper">
            <div className="row">
              <div className="col-sm-7">
                <img src="images/support-team.png" />
              </div>
              <div className="col-sm-5">
                <div className="blog-info">
                  <h2>Choose Your Team!</h2>
                  <p>
                    That’s right, get your Game On! The high-stakes virtual tournament is back and this time we are helping foster children in need!
                    <br />
                    <br />
                    Boost your team by gaining extra bonus points throughout the games for being in the fundraising lead as your team competes for the ultimate win, and of course Game On! trophies and bragging rights.
                    Winning team will choose which Together We Rise program all the money goes toward.
                  </p>
                  <div className="row input-field">
                    <div className="col-md-10">
                      <label>Select Your Team</label>
                      <br />
                      <select className="col-12" value={selectedTeam} onChange={handleTeamOnChange}>
                        {teamList && teamList.map((team) => <option value={team.id} key={team.key}>{team.title}</option>)}
                      </select>
                    </div>
                  </div>
                  <br />
                  <div className="row input-field">
                    <div className="col-md-10">
                      <label>Enter Donation Amount</label>
                      <div className="input-group prefix">
                        <span className="input-group-addon">$</span>
                        <input className="col-12" type="number" name="input" value={donateAmount} onChange={handleDonateAmount} />
                      </div>
                    </div>
                  </div>
                  <div className="btn-area">
                    <button
                      onClick={() => handleAddCart()}
                      className="btn btn-primary btn-support-team"
                      disabled={!unableButton}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inner-donation-leaderboard">
          <div className="inner-wrapper">
            <h2>Donation Leaderboard</h2>
            <div className="donation-content">
              {teamList && teamList.map((team) =>
                <div key={"leadership_" + team.id} className="row team-details">
                  <div className="col-sm-4 team-name">
                    <h5>{team.title}</h5>
                    <h5 className="mobile-team-amount">{teamDonatedAmountList[team.id] ? asPrice(teamDonatedAmountList[team.id].sum) : "$0"}</h5>
                  </div>
                  <div className="col-sm-6">
                    <div className="row team-progress">
                      <div className="col-sm-10 team-progress-bar">
                        <ProgressBar width={100} percent={((teamDonatedAmountList[team.id] && teamDonatedAmountList[team.id].sum ? teamDonatedAmountList[team.id].sum : 0) / 1000) * 100} />
                      </div>
                      <div className="col-sm-2">
                        <h5 className="desktop-team-amount">{teamDonatedAmountList[team.id] ? asPrice(teamDonatedAmountList[team.id].sum) : "$0"}</h5>
                      </div>
                    </div>
                  </div>
                </div>)
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}