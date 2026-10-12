import VitaPricing from "./VitaPricing";

import { vitaTables } from "../data/vitaTables";

export default function ContractsDetail() {
  return (
    <VitaPricing tables={vitaTables} />
  );
}