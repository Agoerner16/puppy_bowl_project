// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2208-FTB-ET-WEB-FT';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${2208-FTB-ET-WEB-FT}/`;


export const fetchAllPlayers = async () => {
const response = fetch(`${APIURL}/players`);
const data = await response.json();
const players = data.data.players;
return players;
};

export const fetchSinglePlayer = async (playerId) => {
 const response = await fetch `${APIURL}/players/${playerId}`;
const data = await response.json();
const player = data.data.player; 
return player;
};

export const addNewPlayer = async (playerObj) => {

};

export const removePlayer = async (playerId) => {

};
