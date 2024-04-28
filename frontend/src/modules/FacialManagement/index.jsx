/* eslint-disable react-hooks/exhaustive-deps */
import {useContext, useEffect, useState, useMemo} from "react";
import {CardFacialManagement} from "./components/organisms/cardFacialManagement";
import API from "../../services/api";
import {ContextApi} from "../../contextApi";

export const FacialManagement = () => {
  const [list, setList] = useState([]);
  const {refresh, updateRefresh} = useContext(ContextApi);

  async function HealthCheck() {
    await API.get("/health-check").then((response) => {
      if (response.status === 200) {
        ListAll();
      }
    });

    const html = document.querySelector("html");
    html.style.height = "auto";
  }

  async function ListAll() {
    await API.get("/person-list-all").then((response) => {
      setList(response.data);
      updateRefresh(false);
    });
  }

  useEffect(() => {
    HealthCheck();
  }, []);

  useMemo(() => {
    refresh && ListAll();
  }, [refresh]);


  return <CardFacialManagement list={list} />;
};
