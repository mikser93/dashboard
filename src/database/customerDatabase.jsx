import data from "./clients.json";

export const createData = (customer) => {
  const { name, company, phoneNumber, email, country, status } = customer;
  return { customerName: name, company, phoneNumber, email, country, status };
};

const rowsData = data.clients.map(createData);

export const rows = [...rowsData];
