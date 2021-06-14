import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import classes from "./ContactData.module.css";
import fetchData from "../../axios/axiosBaseConfig";
import Loader from "../../Loader/Loader";
class ContactData extends Component {
  state = {
    name: "",
    email: "",
    adress: "",
    phone: "",
    serverAccepted: false,
  };
  contactPageRef = React.createRef();
  handleChangeNumberInput = (e) => {
    this.setState({ phone: e.target.value.slice(0, 10) });
  };
  handleChangeNameInput = (e) => {
    if (e.target.value) {
      this.setState({
        name:
          e.target.value.charAt(0).toUpperCase() + e.target.value.substring(1),
      });
    } else {
      this.setState({ name: "" });
    }
  };
  componentDidMount() {
    this.contactPageRef.current.scrollIntoView({ behavior: "smooth" });
  }

  handleSubmitForm = (e) => {
    e.preventDefault();
    const { name, email, adress, phone } = this.state;
    if (!(name && email && adress && phone)) {
      alert("To make an order please fill in all necessary fields");
      return;
    }
    this.setState({ serverAccepted: true });
    const order = {
      ingrediants: this.props.ings,
      price: Number(this.props.price),
      customer: {
        name,
        email,
        adress,
        phone,
      },
      deliveryMethod: "fastest",
    };

    fetchData
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ serverAccepted: false });
      })
      .catch((error) => {
        this.setState({ serverAccepted: false });
      });
    this.setState({ name: "", email: "", adress: "", phone: "" });
  };

  render() {
    const { name, email, adress, phone } = this.state;
    if (this.state.serverAccepted) {
      setTimeout(() => {
        this.props.history.replace(this.props.match.path + "/finalized");
      }, 500);
      return <Loader />;
    }

    const maxLength = 20;
    return (
      <div className={classes.ContactData} ref={this.contactPageRef}>
        <h2>Your contact data:</h2>
        <form onSubmit={this.handleSubmitForm}>
          <label>
            <p>Name:</p>
            <input
              type='text'
              value={name}
              onChange={this.handleChangeNameInput}
              placeholder='enter your name...'
              autoComplete='no'
              maxLength={maxLength}
            />
          </label>
          <label>
            <p>Email:</p>
            <input
              type='text'
              value={email}
              onChange={(e) => this.setState({ email: e.target.value })}
              placeholder='enter your email...'
              autoComplete='no'
              maxLength={maxLength}
            />
          </label>
          <label>
            <p>Adress:</p>
            <input
              type='text'
              value={adress}
              onChange={(e) => this.setState({ adress: e.target.value })}
              placeholder='enter your adress...'
              autoComplete='no'
              maxLength={maxLength}
            />
          </label>
          <label>
            <p>Phone number:</p>
            <input
              type='number'
              value={phone}
              onChange={this.handleChangeNumberInput}
              placeholder='enter your phone number'
              autoComplete='no'
              maxLength='10'
            />
          </label>
          <button type='submit'>Send</button>
        </form>
      </div>
    );
  }
}

export default withRouter(ContactData);
