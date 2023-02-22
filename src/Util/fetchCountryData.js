import axios from "axios";
import { pathOr } from "ramda";

import { apiData } from "./api";

export async function fetchCountryData(type, name) {
  let url = apiData;

  if (type === "all") {
    url += "/all";
  } else if (type === "region") {
    url += "/region/" + name;
  }

  await axios
    .get(url)
    .then(function (response) {
      return response;
    })
    .catch((e) => {
      return e;
    });
}
