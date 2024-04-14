import {CardFacialManagement} from "./components/organisms/cardFacialManagement";
import API from "../../services/api";
import {useEffect, useState} from "react";

export const FacialManagement = () => {
  const [list, setList] = useState([]);

  async function HealthCheck() {
    await API.get("/health-check").then((response) => {
      if (response.status === 200) {
        ListAll();
      }
    });
  }

  async function ListAll() {
    await API.get("/person-list-all").then((response) => {
      setList(response.data);
    });
  }

  useEffect(() => {
    HealthCheck();
  }, []);

  return <CardFacialManagement list={list} />;
};
