const ObjectsToCsv = require('objects-to-csv')
const axios = require('axios')
const FIRST_PAGE = `https://reqres.in/api/users?page=1`
const SECOND_PAGE = `https://reqres.in/api/users?page=2`

(function() {

    const getFirstPageData = axios.get(FIRST_PAGE);
    const getSecondPageData = axios.get(SECOND_PAGE)

    axios.all([getFirstPageData, getSecondPageData])
        .then(
            axios.spread(async(...allData) => {
                const cards = [...allData[0].data.data, ...allData[1].data.data]
                const csv = new ObjectsToCsv(cards)
                await csv.toDisk('./cards.csv')
            })
        )
        .catch((err) => {
            console.error(err)
        })
}())