import PropTypes from 'prop-types';
import { Table,Title, Item } from "components/Transaction/TransactionHistory.styled"

export const TransactionHistory = ({items}) => {
    return (<Table>
    <thead>
      <tr>
        <Title>Type</Title>
        <Title>Amount</Title>
        <Title>Currency</Title>
      </tr>
    </thead>
    <tbody>
{items.map(({id, type, amount, currency}) => 
(  
  
    <tr key={id}>
      <Item>{type}</Item>
      <Item>{amount}</Item>
      <Item>{currency}</Item>
    </tr>
 
))}
 </tbody>
</Table>
    )
    }
    

    TransactionHistory.propTypes = {
      items: PropTypes.arrayOf(
          PropTypes.exact({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,})
  )}