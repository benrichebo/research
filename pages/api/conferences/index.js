import moment from "moment";
import { connectToDatabase } from "../../../lib/mongodb";

export default async (req, res) => {
  if (req.method == "GET") {
    try {
      const { db } = await connectToDatabase();

      const conferences = await db
        .collection("conferences")
        .find(
          {},
          { title: 1, startDate: 1, country: 1, endDate: 1 }
        )
        .toArray();

      console.log("conferences", conferences);

      let finalConferences = [];
      for (let i = 0; i < conferences.length; i++) {
        const conference = conferences[i];

        //calculate posted at
        const date = conference?.startDate?.split("-");
        const fromNow = moment(date, "YYYYMMDD").fromNow();
        finalConferences.push({
          ...conference,
          daysLeft: fromNow,
        });
      }

      console.log("finalConferences", finalConferences);

      if (finalConferences?.length >= 0) {
        res.status(200).json(finalConferences);
      } else {
        res.status(400).json({ msg: "There are no conferences" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Internal server error" });
    }
  }
};
