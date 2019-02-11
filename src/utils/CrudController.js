import {ErrorResponse, SuccessResponse} from "./GenericResponse";

export default (Model) => {
    return class CrudController {

        findAll(req, res) {
            Model.find()
                .then(data => res.status(200).send(SuccessResponse(data)))
                .catch(err => res.status(500).send(ErrorResponse(err)))
        }

        find(req, res) {
            Model.findById(req.params.id)
                .then(data => {
                    if (!data) return res.status(404).send(ErrorResponse('Entity not found'));
                    res.status(200).send(SuccessResponse(data));
                })
                .catch(err => res.status(500).send(ErrorResponse(err)));
        }

        create(req, res) {
            Model.create(req.body)
                .then(data => res.status(200).send(SuccessResponse(data)))
                .catch((err) => {
                    if (err.name === 'ValidationError') {
                        res.status(422).send(ErrorResponse(err));
                    } else {
                        res.status(500).send(ErrorResponse(err));
                    }
                });
        };

        update(req, res) {
            Model.findByIdAndUpdate(req.params.id, req.body, {new: true})
                .then(data => {
                    if (!data) return res.status(404).send(ErrorResponse('Entity not found'));
                    res.status(200).send(SuccessResponse(data));
                })
                .catch(err => {
                    if (err.name === 'ValidationError') {
                        res.status(422).send(ErrorResponse(err));
                    } else {
                        res.status(500).send(ErrorResponse(err));
                    }
                })
        }

        delete(req, res) {
           Model.findByIdAndRemove(req.params.id)
               .then(data => {
                   if (!data) return res.status(404).send(ErrorResponse('Entity not found'));
                   res.status(200).send(SuccessResponse(data));
               })
               .catch(err => res.status(500).send(ErrorResponse(err)))
        }
    };
}
