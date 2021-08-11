import React from "react";
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";

import CardSection from "../CardSection";
import "./DonateForm.css";

class CheckoutForm extends React.Component {
  handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    const { stripe, elements } = this.props;

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make  sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const paymentAmount = event.target.elements.amount.value; // from elements property
    const customerName = event.target.customerName.value;
    if (!paymentAmount || isNaN(paymentAmount)) {
      alert("Enter a valid payment amount");
      return;
    }

    if (!customerName) {
      alert("Customer name should not be empty");
      return;
    }

    const response = await fetch("/api/payment", {
      method: "POST",
      body: JSON.stringify({ amount: paymentAmount * 100 }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json);
    const clientSecret = json.client_secret;

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: customerName,
        },
      },
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
      alert("There was an error processing donation");
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === "succeeded") {
        console.log("Payment succeeded");
        alert("Donation processing completed successfully. Thank you!");
        window.location.replace("/");
      }
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="paymentForm">
        <CardSection />
        <button
          className="button"
          type="submit"
          variant="success"
          size="lg"
          disabled={!this.props.stripe}
        >
          Confirm donation
        </button>
      </form>
    );
  }
}

export default function DonateForm() {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}
