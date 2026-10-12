const fs = require("fs");
const path = require("path");

const phpPath =
  "c:/wamp64/www/my_sites/sps/sps-enterpriselocal/contracts/vita/index.php";
const outPath = path.join(__dirname, "../src/lib/vita-tables.json");

const html = fs.readFileSync(phpPath, "utf8");

function decode(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function extractRows(chunk) {
  const rows = [];
  const trs = chunk.split(/<tr[\s\S]*?>/).slice(1);
  for (const tr of trs) {
    const cells = [...tr.matchAll(/<(?:td|th)[^>]*>([\s\S]*?)<\/(?:td|th)>/gi)].map((m) =>
      decode(m[1]),
    );
    if (cells.length >= 6 && /^\d+$/.test(cells[0])) {
      rows.push({
        sr: Number(cells[0]),
        supplier: cells[1],
        description: cells[2],
        rate: cells[3],
        hours: cells[4],
        serviceType: cells[5],
      });
    }
  }
  return rows;
}

const chunks = html.split(/<div class="tab-content">/).slice(1);
const tables = chunks.map((chunk, index) => {
  const rows = extractRows(chunk);
  return {
    index: index + 1,
    rows,
    first: rows[0] || null,
    last: rows[rows.length - 1] || null,
  };
});

tables.forEach((table) => {
  console.log(
    `table ${table.index}: ${table.rows.length} rows | first ${table.first?.sr} ${table.first?.supplier} / ${table.first?.description} | last ${table.last?.sr} ${table.last?.supplier}`,
  );
});

const labels = [
  "Labor Rate",
  "Additional Labor",
  "Software Titles",
  "Suppliers Option",
  "Managed Services",
];

// The PHP page has 6 tab-content blocks; the first is discarded at runtime.
// The PHP page has 6 tab-content blocks. A runtime script removes the first
// one, so the 5 remaining tables map to the 5 tab labels as shown on localhost.
const dataTables = tables.slice(1, 6);
const data = labels.map((label, i) => ({
  id: label.toLowerCase().replace(/\s+/g, "-"),
  label,
  columns: ["Sr", "Supplier", "Description", "Rate", "Hours", "Service Type"],
  rows: dataTables[i]?.rows || [],
}));

fs.writeFileSync(outPath, JSON.stringify(data, null, 2));
console.log("wrote", outPath, "tabs", data.map((t) => `${t.label}:${t.rows.length}`).join(", "));
