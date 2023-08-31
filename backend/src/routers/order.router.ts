import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import { HTTP_BAD_REQUEST } from '../constants/http_status';
import { OrderModel } from '../models/order.model';
import { OrderStatusEnum } from '../constants/order_status';
import auth from "../middlewares/auth.mid";
import mongoose from 'mongoose';

const router = Router();
router.use(auth);

router.post('/create',
    asyncHandler(async (req: any, res: any) => {
        const requestOrder = req.body;

        if (requestOrder.items.length <= 0) {
            res.status(HTTP_BAD_REQUEST).send('Cart Is Empty!');
            return;
        }

        await OrderModel.deleteOne({
            user: req.user.id,
            status: OrderStatusEnum.NEW
        });

        const newOrder = new OrderModel({ ...requestOrder, user: req.user.id });
        await newOrder.save();
        res.send(newOrder);
    })
)

router.get('/newOrderForCurrentUser', asyncHandler(async (req: any, res) => {
    const order = await getNewOrderForCurrentUser(req);

    if (order) res.send(order);
    else res.status(HTTP_BAD_REQUEST).send();
}))

router.post('/pay', asyncHandler(async (req: any, res) => {
    const { paymentId } = req.body;
    const order = await getNewOrderForCurrentUser(req);
    if (!order) {
        res.send(HTTP_BAD_REQUEST).send('Order Not Found');
        return;
    }

    order.paymentId = paymentId;
    order.status = OrderStatusEnum.PAYED;
    await order.save();

    res.send(order._id)

}))

export default router;

function getNewOrderForCurrentUser(req: any) {
    return OrderModel.findOne({ user: req.user.id, status: OrderStatusEnum.NEW });
}
