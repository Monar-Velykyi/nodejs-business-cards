const axios = require('axios')
const FIRST_PAGE = `https://reqres.in/api/users?page=1`
const SECOND_PAGE = `https://reqres.in/api/users?page=2`

exports.getCards = (req, res) => {

    const getFirstPageData = axios.get(FIRST_PAGE);
    const getSecondPageData = axios.get(SECOND_PAGE)

    axios.all([getFirstPageData, getSecondPageData])
        .then(
            axios.spread((...allData) => {
                const cards = [...allData[0].data.data, ...allData[1].data.data]
                res.render('index', {
                    title: 'Business-cards',
                    cards
                })
            })
        )
        .catch((err) => {
            console.error(err)
        })
}