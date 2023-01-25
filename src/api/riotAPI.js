/* const [searchText, setSearchText] = useState('');
const [playerData, setPlayerData] = useState({}); */
const API_KEY = "RGAPI-a0bb5c09-68f2-4fcb-b9f0-c1cc63e6df54"

const PlayerApi = {
    
    getPlayerId: async (event) => {
        try {
            const responce = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${event}?api_key=${API_KEY}`)
            const data = await responce.json()
            return data
        } catch (error) {
            console.log(error);
        }
    },
    getPlayerId2: async (event) => {
        try {
            const responce = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${event}?api_key=${API_KEY}`)
            const data = await responce.json()
            return data
        } catch (error) {
            console.log(error);
        }
    },

    getPlayerInfo: async (player) => {
        try {
            const responce = await fetch(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${player.id}?api_key=${API_KEY}`)
            const data = await responce.json()
            return data
        } catch (error){
            console.log(error)
        }
    },

    getMatchesId: async (player) => {
        try {
            const responce = await fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${player.puuid}/ids?start=0&count=10&api_key=${API_KEY}`)
            const data = await responce.json()
            return data
        }catch (error){
            console.log(error)
        }
    },

    detMatchInfo: async (matchId) => {
        try {
            const responce = await fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${API_KEY}`)
            const data = await responce.json()
            return data
        }catch (error){
            console.log(error)
        } 
    },

    getRanking: async (queue, tier, division) => {
        try {
            const responce = await fetch(`https://euw1.api.riotgames.com/lol/league-exp/v4/entries/${queue}/${tier}/${division}?page=1&api_key=${API_KEY}`)
            const data = await responce.json()
            return data
        }catch (error){
            console.log(error)
        }
    },

    getRankingMaster: async (division, queue) => {
        try {
            const responce = await fetch(`https://euw1.api.riotgames.com/lol/league-exp/v4/entries/${queue}/${division}/I?page=1&api_key=${API_KEY}}`)
            const data = await responce.json()
            return data
        }catch (error){
            console.log(error)
        }
    },

}

export default PlayerApi ;