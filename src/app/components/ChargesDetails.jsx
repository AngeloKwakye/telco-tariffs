import { Card } from "@nextui-org/react";

export const ChargesDetails = ({ totalDetails }) => {
  return (
      <div className="mt-4 text-sm flex flex-col gap-2">
        <p>
          <span className="font-bold">Amount: </span>
          {totalDetails.amount} GH&#8373;
        </p>
        <p>
          <span className="font-bold">Charges:</span> {totalDetails.charges.toFixed(2)}{" "}
          GH&#8373;
        </p>
        <p>
          <span className="font-bold">E-LEVY:</span>{" "}
          {totalDetails.e_levy.toFixed(2)} GH&#8373;
        </p>
        <p>
          <span className="font-bold">Total Charge:</span>{" "}
          {totalDetails.total_charges.toFixed(2)}{" "}GH&#8373;
        </p>
      </div>
  );
};
