module.exports = app => {
    const Users = app.db.models.Users;

    app.route('/users')
        .get((req, res) => {
            Users.findAll()
                .then(result => res.json(result))
                .catch(error => {
                    res.status(402).json({
                        msg: error.menssage
                    });
                });
        })

        .post((req, res) => {
            Users.create(req.body)
                .then(result => res.json(result))
                .catch(error => res.json(error.errors));
        })

    app.route('/users/:id')
        .get((req, res) => {
            Users.findOne({
                    where: req.params
                })
                .then(result => res.json(result))
                .catch(error => {
                    res.status(402).json({
                        msg: error.menssage
                    });
                });
        })
};