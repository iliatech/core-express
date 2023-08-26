import { serverPort } from "../settings/port.js";
import { systemStatus } from "../settings/system.js";

const info = async (req, response) => {
  response.send({ status: systemStatus.alive, port: serverPort });
};

export default { info };