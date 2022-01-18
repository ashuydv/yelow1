import React from "react";

import {
  Form as BTForm,
  FormGroup,
  Input,
  Label,
  Col,
  Button,
} from "reactstrap";

const Form = ({
  name,
  amount,
  handleName,
  handleAmount,
  handleSubmitForm,
  handleClearExpenses,
}) => (
  <BTForm
    style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-around", border: "0px" }}
    onSubmit={handleSubmitForm}
  >
    <FormGroup className="row" style={{ width: "50%" }}>
      <Col className="mr-1">
        <Input
          type="text"
          name="name"
          id="expenseName"
          placeholder="Name of expense?"
          value={name}
          onChange={handleName}
        />
      </Col>
    </FormGroup>
    <FormGroup className="row" style={{ width: "50%" }}>
      <Col className="mr-1">
        <Input
          type="number"
          name="amount"
          id="expenseAmount"
          placeholder="0.00"
          value={amount}
          onChange={handleAmount}
        />
      </Col>
    </FormGroup>
    <FormGroup className="row">
      <Col>
        <Button type="submit" color="primary">
          +
        </Button>
      </Col>
      <Col>
        <Button type="submit" color="danger" onClick={handleClearExpenses}>
          -
        </Button>
      </Col>
    </FormGroup>
  </BTForm>
);

export default Form;
