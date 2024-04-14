import PropTypes from "prop-types";
import "./styles.css";
import {CardPersons} from "../../atoms/cardPersons";

export const CardFacialManagement = ({list}) => {
  console.log(list);
  return (
    <div className="card-facial-management">
      <div className="card-facial-management-header-container">
        <div className="card-facial-management-title">Facial management</div>
      </div>
      <div className="card-facial-management-body-container">
        {list?.map((item, index) => (
          <CardPersons key={index} imgSrc={item.image} name={item.name} wanted={item.wanted} />
        ))}
      </div>
    </div>
  );
};

CardFacialManagement.propTypes = {
  list: PropTypes.array.isRequired,
};
