import { Express } from 'express';
import { indexController } from '../controllers/index.server.controller';

export default class IndexRoute {
	constructor(app: Express) {
		app.route('/api/balance/:walletAddress')
			.get(indexController.index);
		app.route('/api/transactions/:walletAddress')
			.get(indexController.msg);
	}
}