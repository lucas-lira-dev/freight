import { GetFreightList } from "../../app/usecase/GetFreightList";
import HttpServer from "./HttpServer";

export default class FreightController {
  constructor(
    readonly httpServer: HttpServer,
    readonly getFreightList: GetFreightList
  ) {
    httpServer.register(
      "post",
      "/freight",
      async function (params: any, body: any) {
        const output = await getFreightList.execute(body);
        return output;
      }
    );
  }
}
