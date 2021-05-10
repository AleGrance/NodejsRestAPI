module.exports = app => {
    const Tasks = app.db.models.Tasks;

    app.route('/tasks')
        .get((req, res) => {
            Tasks.findAll({})
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                });
        })
        .post((req, res) => {
            Tasks.create(req.body)
                .then(result => res.json(result))
                .catch(error => res.json(error.errors));
        })

    app.route('/tasks/:id')
        .get((req, res) => {
            Tasks.findOne({
                    where: req.params
                })
                .then(result => res.json(result))
                .catch(error => {
                    res.status(404).json({
                        msg: error.message
                    });
                })
        })
        .put((req, res) => {
            Tasks.update(req.body, {
                    where: req.params
                })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                })
        })
        .delete((req, res) => {
            Tasks.destroy({
                    where: req.params
                })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({
                        msg: error.message
                    });
                })
        })

    app.route('/tasks/findByDone')
        .post((req, res) => {
            Tasks.findAll({
                    where: {
                        done: req.body.done
                    }
                })
                .then(result => res.json(result))
                .catch(error => res.json(error))
        })
};