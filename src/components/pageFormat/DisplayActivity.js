import React from "react";
import { connect } from "react-redux";
import { CLEAR_SELECTED_ACTIVITY } from "../../actionTypes";
import ImageLoad from "../hooks/ImageLoad";
import BlurryImage from "../../assets/blurry image small.jpg";
import NextActivity from "../generatorButtons/NextActivity";
import Fade from 'react-reveal/Fade';

function DisplayActivity(props) {
  const handleClick = () => {
    props.clearSelectedActivity();
  };

  if (props.activity.length === 0) {
    return null;
  } else {
    return (
      <>
        <p className="category-title">{props.category}</p>
        <NextActivity />

        <p className="activity-title">{props.activity[0].name.toUpperCase()}</p>
      <Fade right>
        <div className="card-wrapper">
          <div className="card">
            <ImageLoad
              src={props.activity[0].image}
              placeholder={BlurryImage}
              alt={props.activity[0].alt}
              className="activity-image"
            />
            <Fade bottom>
            <div className="container">
              <p className="description">{props.activity[0].description}</p>
              <form
                action={props.activity[0].url}
                target="_blank"
                rel="noreferrer "
              >
                <button className="take-me-there">Take Me There!</button>
              </form>
            </div>
         </Fade>
          </div>
       
        </div>
</Fade>
        <button className="go-back-btn" onClick={(e) => handleClick(e)}>
          Go Back
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  activity: state.activities.activity,
  category: state.activities.category,
});

const mapDispatchToProps = (dispatch) => ({
  clearSelectedActivity: () => dispatch({ type: CLEAR_SELECTED_ACTIVITY }),
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayActivity);
