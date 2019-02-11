
export const setCrudRoutes = (router, controller) => {
    router.get('/:id', controller.find);
    router.put('/:id', controller.update);
    router.delete('/:id', controller.delete);
    router.get('/', controller.findAll);
    router.post('/', controller.create);
    return router;
}
