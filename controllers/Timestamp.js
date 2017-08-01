module.exports = app => {

    app.get('/:date', ( req, res ) => {

        const date = new Date(req.params.date)
        const dateInt = parseInt(req.params.date)

        const monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ]
        
        if ( date instanceof Date && isFinite(date) && isNaN(dateInt)  ) {
            const unix = Math.floor(+date / 1000)
            res.send({
                unix: unix,
                natural: `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
            })
        } 
        
        if ( !isNaN(dateInt) ){
            const naturalDate = new Date(req.params.date * 1000)
            if ( !isNaN(naturalDate.getFullYear() ) ){
                res.send({
                    unix: req.params.date,
                    natural: `${monthNames[naturalDate.getMonth()]} ${naturalDate.getDate()}, ${naturalDate.getFullYear()}`,
                })
            }
            else {
                res.send({
                    unix: null,
                    natural: null
                })
            }
        }
        else {
            res.send({
                unix: null,
                natural: null
            })
        }
        })
}

