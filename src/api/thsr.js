import axios from "axios"

export const getData = (from, to, date) => {
  return axios({
    methods: "GET",
    url: `https://ptx.transportdata.tw/MOTC/v2/Rail/THSR/DailyTimetable/OD/${from}/to/${to}/${date}?$format=JSON`
  })
}