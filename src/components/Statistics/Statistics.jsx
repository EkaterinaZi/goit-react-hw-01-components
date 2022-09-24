import PropTypes from 'prop-types';
import { Section, Item, List, Percentage } from './Statistics.styled';
import { TitleStatistic } from './Title';

export const Statistics = ({title, stats}) => {
return (<Section><div>
<TitleStatistic title={title}></TitleStatistic>
 <List>{stats.map(({id, label, percentage}) => (
        <Item key={id}>
        <span >{label}</span>
        <Percentage >{percentage}%</Percentage>
      </Item>
    ))
        }  
   </List>
   </div>
</Section>
)
}


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
        id: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired})
)}