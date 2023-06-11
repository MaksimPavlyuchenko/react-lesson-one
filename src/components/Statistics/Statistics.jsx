import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiClawHammer, GiTreeDoor } from 'react-icons/gi';

const icons = [
  <MdPeople />,
  <MdOutlineProductionQuantityLimits />,
  <GiClawHammer />,
  <GiTreeDoor />
];

export const Statistics = ({ data, title }) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}
    
      <StatisticsList>
        {data.map(({ id, title, total }, index) => {
          return <StatisticItem key={id} icon = {icons[index]} title={title} total={total} />;
        })}
      </StatisticsList>
    </>
  );
};
