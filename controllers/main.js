const axios = require("axios");

// fetch data -- todaysScoreboard
const fetchLiveScoreboard = async () => {
  const { data } = await axios(
    `https://nba-prod-us-east-1-mediaops-stats.s3.amazonaws.com/NBA/liveData/scoreboard/todaysScoreboard_00.json`
  );
  return data;
};
// returns live updates of scores
const liveData = async (req, res) => {
  try {
    const { scoreboard } = await fetchLiveScoreboard();
    res.status(200).json(scoreboard);
  } catch (error) {
    res.status(404).json({ message: " Error Code 404 - /liveData not found" });
  }
};

module.exports = liveData;
