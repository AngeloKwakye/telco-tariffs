export const telcos = [
    {
      name: "MTN",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/New-mtn-logo.jpg",
      rates: [
        {
          internal: [
            {
              lowAmount: 50,
              networkLowRate: 0.005,
              highAmount: 50,
              networkHighRate: 0.01,
              chargeAmount: null,
            },
          ],
        },
        {
          external: [
            {
              lowAmount: 0,
              networkLowRate: 0.0075,
              highAmount: 1000,
              networkHighRate: 0.0075,
              chargeAmount: null,
            },
            {
              lowAmount: 1000.01,
              networkLowRate: 0,
              highAmount: Infinity,
              networkHighRate: 0,
              chargeAmount: 7.5,
            },
          ],
        },
      ],
    },
    {
      name: "Telecel",
      logo: "https://telecelgroup.com/wp-content/uploads/2022/09/cropped-icon-01-270x270.png",
      rates: [
        { internal: [] },
        {
          external: [
            {
              lowAmount: 0,
              networkLowRate: 0,
              highAmount: 100,
              networkHighRate: 0,
              chargeAmount: null,
            },
            {
              lowAmount: 100.01,
              networkLowRate: 0.005,
              highAmount: 1000,
              networkHighRate: 0.005,
              chargeAmount: null,
            },
            {
              lowAmount: 1000.01,
              networkLowRate: 0,
              highAmount: Infinity,
              networkHighRate: 0,
              chargeAmount: 5,
            },
          ],
        },
      ],
    },
    {
      name: "AT",
      logo: "https://newsghana.com.gh/wp-content/uploads/2023/06/WhatsApp-Image-at-AM-28-640x537.jpeg",
      rates: [
        { internal: [] },
        {
          external: [
            {
              lowAmount: 0,
              networkLowRate: 0,
              highAmount: 100,
              networkHighRate: 0,
              chargeAmount: null,
            },
            {
              lowAmount: 100.01,
              networkLowRate: 0.005,
              highAmount: 1000,
              networkHighRate: 0.005,
              chargeAmount: null,
            },
            {
              lowAmount: 1000.01,
              networkLowRate: 0,
              highAmount: Infinity,
              networkHighRate: 0,
              chargeAmount: 5,
            },
          ],
        },
      ],
    },
  ];