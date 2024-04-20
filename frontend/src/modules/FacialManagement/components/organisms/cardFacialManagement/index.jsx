import PropTypes from "prop-types";
import "./styles.css";
import {CardPersons} from "../../atoms/cardPersons";
import {CardRegisterPerson} from "../../molecules/cardRegisterPerson";
import {CardLoader} from "../../atoms/cardLoader";

export const CardFacialManagement = ({list}) => {
  console.log("=> ", list);
  return (
    <div className="card-facial-management-container">
      <div className="card-facial-management-header-container">
        <div className="card-facial-management-title">Facial management</div>
      </div>
      <CardRegisterPerson />
      <div className="card-facial-management-body-container">
        {Array.isArray(list) && list.length > 0 &&
          list?.map((item, index) => (
            <CardPersons key={index} imgSrc={item.image} name={item.name} wanted={item.wanted} />
          ))}
        {Array.isArray(list) && list.length === 0 && <CardLoader />}
      </div>
    </div>
  );
};

CardFacialManagement.propTypes = {
  list: PropTypes.array.isRequired,
};
