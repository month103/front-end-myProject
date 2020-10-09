import { Pipe, PipeTransform } from '@angular/core';
import {Order} from "./order/order";

@Pipe({
  name: 'orderTextFilter'
})
export class OrderTextFilterPipe implements PipeTransform {

  transform(orders: Order[], text: string): Order[] {
    if (text == null || text === "") {
      return orders;
    }
    return orders.filter(n => n.date.includes(text) || n.doctor.includes(text) || n.note.includes(text) || n.status.includes(text) || n.time.includes(text));
  }
}
