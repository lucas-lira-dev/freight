import { GetFreightList } from "./app/usecase/GetFreightList";
import FreightController from "./infra/http/FreightController";
import { ExpressAdapter } from "./infra/http/HttpServer";

const httpServer = new ExpressAdapter();
const getFreightList = new GetFreightList();
new FreightController(httpServer, getFreightList);
httpServer.listen(3000);
