const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');

            if (!incidents){
                return response.status(204).send();
            }

            return response.json(incidents);
    }
};