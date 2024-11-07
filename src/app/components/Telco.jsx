"use client";
import {
  Avatar,
  Button,
  Card,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useState } from "react";
import { ChargesDetails } from "./ChargesDetails";
import { telcos } from "../data/telcos";
import { Newsletter } from "./NewsLetter";

export const Telco = () => {
  const [sendingTelco, setSendingTelco] = useState(telcos[0]);
  const [receivingTelco, setReceivingTelco] = useState(telcos[0]);
  const [amount, setAmount] = useState("");
  const [totalCharge, setTotalCharge] = useState(null);
  const [totalNotice, setNotice] = useState("");
  const [totalDetails, setTotalDetails] = useState(null);
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const [isNewsletterOpen, setNewsletterOpen] = useState(false);
  const E_LEVY = 0.015;

  const handleAmountChange = (e) => setAmount(e.target.value);

  const calculateCharge = () => {
    const amountValue = parseFloat(amount);
    if (isNaN(amountValue) || amountValue <= 0) {
      setPopoverOpen(false);
      setNotice("Please enter a valid amount.");
      return;
    } else {
      setNotice("");

      const isInternal = sendingTelco.name === receivingTelco.name;
      const rateType = isInternal ? "internal" : "external";
      const rateInfo = sendingTelco.rates.find((rate) => rate[rateType])[
        rateType
      ];

      let charge = 0;
      for (const range of rateInfo) {
        if (amountValue >= range.lowAmount && amountValue <= range.highAmount) {
          if (range.chargeAmount !== null) {
            charge = range.chargeAmount;
          } else {
            const rate =
              amountValue <= range.highAmount
                ? range.networkLowRate
                : range.networkHighRate;
            charge = amountValue * rate;
          }
          break;
        }
      }

      const eLevyCharge = amountValue * E_LEVY;
      const totalCharge = amountValue + charge + eLevyCharge;

      setTotalCharge(totalCharge);
      setPopoverOpen(true);
      setTotalDetails({
        amount: amountValue,
        charges: charge,
        e_levy: eLevyCharge,
        total_charges: totalCharge,
      });

      setTimeout(() => {
        setPopoverOpen(false);
        setNewsletterOpen(true);
      }, 5000);
    }
  };

  const handleOpenChange = (open) => {
    setNewsletterOpen(open);
  };

  return (
    <div>
      <Card>
        <div className="w-full flex flex-col mx-auto p-5">
          <h1 className="text-lg md:text-2xl font-bold">
            MoMo Charges Calculator
          </h1>
          <div className="w-full flex justify-center">
            {telcos.map((telco) => (
              <Avatar
                alt="logo"
                className="w-6 h-6"
                src={telco.logo}
                key={telco.name}
              />
            ))}
          </div>
          <div className="my-4">
            <label htmlFor="sendingTelco" className="block text-base">
              Select Sending Telco:
            </label>
            <Select
              items={telcos}
              label="Sending Network"
              isRequired
              placeholder="please select sending network"
              className="max-w-xs"
              onChange={(e) =>
                setSendingTelco(telcos.find((t) => t.name === e.target.value))
              }
            >
              {(telco) => (
                <SelectItem
                  startContent={
                    <Avatar
                      alt="Argentina"
                      className="w-6 h-6"
                      src={telco.logo}
                    />
                  }
                  key={telco.name}
                >
                  {telco.name}
                </SelectItem>
              )}
            </Select>
          </div>

          <div className="my-4">
            <label htmlFor="receivingTelco" className="block text-base">
              Select Receiving Network:
            </label>
            <Select
              items={telcos}
              isRequired
              label="Receiving Network:"
              placeholder="please select receiving network"
              className="max-w-xs"
              onChange={(e) =>
                setReceivingTelco(telcos.find((t) => t.name === e.target.value))
              }
            >
              {(telco) => (
                <SelectItem
                  startContent={
                    <Avatar
                      alt={telco.name}
                      className="w-6 h-6"
                      src={telco.logo}
                    />
                  }
                  key={telco.name}
                >
                  {telco.name}
                </SelectItem>
              )}
            </Select>
          </div>

          <div className="my-4">
            <label htmlFor="amount" className="block text-base">
              Enter MoMo Amount:
            </label>
            <Input
              value={amount}
              onChange={handleAmountChange}
              type="number"
              placeholder="Please enter amount"
            />
          </div>
          <div className="m-2 flex justify-center">
            {totalNotice ? (
              <span className="text-xs text-red-600 text-center">
                {totalNotice}
              </span>
            ) : (
              ""
            )}
          </div>
          <Popover
            isOpen={isPopoverOpen}
            onOpenChange={setPopoverOpen}
            showArrow
          >
            <PopoverTrigger>
              <Button onClick={calculateCharge}>Calculate</Button>
            </PopoverTrigger>
            <PopoverContent>
              <h2 className="font-bold text-lg">Calculation Result</h2>
              {totalCharge !== null && (
                <ChargesDetails totalDetails={totalDetails} />
              )}
            </PopoverContent>
          </Popover>
        </div>
      </Card>
      <Newsletter isOpen={isNewsletterOpen} onOpenChange={handleOpenChange} />
    </div>
  );
};
