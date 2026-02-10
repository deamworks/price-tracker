// import FirecrawlApp from "@mendable/firecrawl-js";

// const firecrawl = new FirecrawlApp({
//   apiKey: process.env.FIRECRAWL_API_KEY,
// });

// export async function scrapeProduct(url) {
//   try {
//     const result = await firecrawl.scrapeUrl(url, {
//       formats: ["extract"],
//       extract: {
//         prompt:
//           "Extract the product name as 'productName', current price as a number as 'currentPrice', currency code (USD, EUR, etc) as 'currencyCode', and product image URL as 'productImageUrl' if available",
//         schema: {
//           type: "object",
//           properties: {
//             productName: { type: "string" },
//             currentPrice: { type: "number" },
//             currencyCode: { type: "string" },
//             productImageUrl: { type: "string" },
//           },
//           required: ["productName", "currentPrice"],
//         },
//       },
//     });

//     // Firecrawl returns data in result.extract
//     const extractedData = result.extract;

//     if (!extractedData || !extractedData.productName) {
//       throw new Error("No data extracted from URL");
//     }

//     return extractedData;
//   } catch (error) {
//     console.error("Firecrawl scrape error:", error);
//     throw new Error(`Failed to scrape product: ${error.message}`);
//   }
// }

import FirecrawlApp from "@mendable/firecrawl-js";

const firecrawl = new FirecrawlApp({
  apiKey: process.env.FIRECRAWL_API_KEY,
});

export async function scrapeProduct(url) {
  try {
    // 1. เปลี่ยนจาก scrapeUrl เป็น scrape
    const result = await firecrawl.scrape(url, {
      formats: ["extract"],
      extract: {
        prompt:
          "Extract the product name as 'productName', current price as a number as 'currentPrice', currency code (USD, EUR, etc) as 'currencyCode', and product image URL as 'productImageUrl' if available",
        schema: {
          type: "object",
          properties: {
            productName: { type: "string" },
            currentPrice: { type: "number" },
            currencyCode: { type: "string" },
            productImageUrl: { type: "string" },
          },
          required: ["productName", "currentPrice"],
        },
      },
    });

    // 2. ตรวจสอบว่า Firecrawl ทำงานสำเร็จหรือไม่
    if (!result.success) {
      throw new Error(result.error || "Failed to scrape with Firecrawl");
    }

    // 3. ดึงข้อมูลที่ได้จากการ Extract
    const extractedData = result.extract;

    if (!extractedData || !extractedData.productName) {
      throw new Error("No data extracted from URL");
    }

    return extractedData;
  } catch (error) {
    console.error("Firecrawl scrape error:", error);
    // 4. แก้จาก new error เป็น new Error (ตัวพิมพ์ใหญ่)
    throw new Error(`Failed to scrape product: ${error.message}`);
  }
}