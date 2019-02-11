/**
 * Lets put all the roads of a crud for a controller that inherits from CrudController
 * @param router
 * @param controller
 */
export const setCrudRoutes = (router, controller) => {
    router.get('/:id', controller.find);
    router.put('/:id', controller.update);
    router.delete('/:id', controller.delete);
    router.get('/', controller.findAll);
    router.post('/', controller.create);
};
