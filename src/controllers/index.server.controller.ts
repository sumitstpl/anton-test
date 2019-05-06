import { Request, Response } from 'express';
import config from '../config/config';
import * as rp from "request-promise";

export default class IndexController {
    public index(req: Request, res: Response, next: Function): void {
        rp(`${config.API_URL}accounts/${req.params.walletAddress}/balances?limit=1`)
            .then(function (data) {
                res.send(JSON.parse(data)).status(200)
            })
            .catch(function (err) {
                console.log('err', err)
                res.send(JSON.parse(err)).status(500)
            });
    }

    public msg(req: Request, res: Response): void {
        let marker = req.query.marker;
        let apiUrl = `${config.API_URL}accounts/${req.params.walletAddress}/transactions?`

        if(marker) {
            apiUrl = apiUrl + `marker=${marker}`
        }

        rp(apiUrl)
            .then(function (data) {
                res.send(JSON.parse(data)).status(200)
            })
            .catch(function (err) {
                console.log('err', err)
                res.send(JSON.parse(err)).status(500)
            });
    }
}

export const indexController = new IndexController();