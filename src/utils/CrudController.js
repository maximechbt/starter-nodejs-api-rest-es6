import {ErrorResponse, SuccessResponse} from "./GenericResponse";
import {setCrudRoutes} from "./CrudRoutes";

export default (Model) => {
    return class CrudController {

        constructor(router) {
            if(router) {
                setCrudRoutes(router, this);
            }
        }

        /**
         * Find all document of Model
         * @param req
         * @param res
         */
        findAll(req, res) {
            Model.find()
                .then(data => res.status(200).send(SuccessResponse(data)))
                .catch(err => res.status(500).send(ErrorResponse(err)))
        }

        /**
         * Find one document of Model according to id
         * @param req
         * @param res
         */
        find(req, res) {
            Model.findById(req.params.id)
                .then(data => {
                    if (!data) return res.status(404).send(ErrorResponse('Entity not found'));
                    res.status(200).send(SuccessResponse(data));
                })
                .catch(err => res.status(500).send(ErrorResponse(err)));
        }

        /**
         * Create a document of Model
         * @param req
         * @param res
         */
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

        /**
         * Update a documpent of Model
         * @param req
         * @param res
         */
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

        /**
         * Delete a document of Model
         * @param req
         * @param res
         */
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
