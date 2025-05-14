
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { RECENT_ORDERS_LIST } from "@/constants";


export function RecentOrdersTable() {
    return (
        <div className="h-full border bg-accent text-gray-600 dark:text-gray-300 rounded-2xl py-0">
            <h3 className="text-xl font-semibold capitalize text-black dark:text-white px-4 py-4">Recent Orders</h3>
            <Table>
                <TableHeader className="bg-background">
                    <TableRow className="uppercase text-xs">
                        <TableHead className="w-[241px] text-gray-600 dark:text-gray-300 px-4">Order ID</TableHead>
                        <TableHead className="text-gray-600 dark:text-gray-300">Products</TableHead>
                        <TableHead className="text-gray-600 dark:text-gray-300">Channel</TableHead>
                        <TableHead className="text-gray-600 dark:text-gray-300">Customer</TableHead>
                        <TableHead className="text-gray-600 dark:text-gray-300">Total</TableHead>
                        <TableHead className="text-gray-600 dark:text-gray-300">Delivery Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {RECENT_ORDERS_LIST?.map((order) => (
                        <TableRow key={order.id} className="text-sm">
                            <TableCell className="font-medium px-4">{order.id}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <div className="relative h-8 w-8 bg-muted rounded flex items-center justify-center text-xs overflow-hidden">
                                        {order.product.image ? (
                                            <img src={order.product.image} alt={order.product.name} className="h-full w-full object-cover" />
                                        ) : (
                                            order.product.name.substr(0, 2)
                                        )}
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm">
                                            {`${order.quantity > 1 ? `x${order.quantity} ` : ''}${order.product.name}`}
                                        </p>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-1">
                                    <span
                                        className={`inline-block h-4 w-4 rounded ${order.channel === "amazon" ? "bg-orange-500" :
                                            order.channel === "ebay" ? "bg-blue-500" :
                                                order.channel === "walmart" ? "bg-blue-600" :
                                                    order.channel === "facebook" ? "bg-blue-700" :
                                                        "bg-gray-500"
                                            }`}
                                    />
                                    <span className="capitalize">{order.channel}</span>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <div className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                                        {order.customer.image ? (
                                            <img src={order.customer.image} alt={order.customer.name} className="h-full w-full object-cover" />
                                        ) : (
                                            <span className="flex h-full w-full items-center justify-center text-xs font-medium">
                                                {order.customer.name.charAt(0)}
                                            </span>
                                        )}
                                    </div>
                                    <span>{order.customer.name}</span>
                                </div>
                            </TableCell>
                            <TableCell className="font-medium">
                                ${order.total.toFixed(2)}
                            </TableCell>
                            <TableCell>{order.deliveryDate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="flex items-center justify-center py-2">
                <Button variant="ghost" size="sm" className="text-xs text-primary">
                    View 256 more orders
                </Button>
            </div>
        </div >
    );
}
