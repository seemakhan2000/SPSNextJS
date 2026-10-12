"use client";

import { useMemo } from "react";

function pageNumbers(current, total) {
  const maxVisible = 5;
  let start = Math.max(1, current - 2);
  let end = Math.min(total, start + maxVisible - 1);

  if (end - start + 1 < maxVisible) {
    start = Math.max(1, end - maxVisible + 1);
  }

  const pages = [];
  for (let page = start; page <= end; page += 1) pages.push(page);

  return pages;
}

export default function VitaTable({
  table,
  query,
  onQuery,
  page,
  onPage,
  perPage,
  onPerPage,
}) {
  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();

    if (!needle) return table.rows;

    return table.rows.filter((row) =>
      [
        row.sr,
        row.supplier,
        row.description,
        row.rate,
        row.hours,
        row.serviceType,
      ]
        .join(" ")
        .toLowerCase()
        .includes(needle),
    );
  }, [query, table.rows]);

  const totalPages = Math.max(
    1,
    Math.ceil(filtered.length / perPage) || 1,
  );

  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * perPage;
  const visible = filtered.slice(start, start + perPage);

  return (
    <div className="table-pagination-wrapper">
      <div className="flex flex-wrap items-center justify-between gap-3 py-3 px-2 text-sm font-normal text-heading">
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <span>Show</span>

          <input
            type="number"
            min="1"
            value={perPage}
            onChange={(event) => {
              const next = Number.parseInt(event.target.value, 10);

              if (next > 0) onPerPage(next);
            }}
            className="entries-input w-16 px-2 py-1.5 bg-white border border-default rounded-md focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-colors duration-200"
            aria-label="Rows per page"
          />

          <span>entries</span>
        </div>

        <div className="flex items-center gap-2">
          <label
            className="whitespace-nowrap"
            htmlFor={`${table.id}-search`}
          >
            Search:
          </label>

          <input
            id={`${table.id}-search`}
            type="search"
            value={query}
            onChange={(event) => onQuery(event.target.value)}
            className="table-search w-full sm:w-48 px-3 py-1.5 bg-white border border-default rounded-md focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-all duration-200"
          />
        </div>
      </div>

      <div className="relative overflow-x-auto bg-neutral-primary shadow-xs rounded-base border border-default">
        <table className="w-full text-sm text-left rtl:text-right text-body border-collapse">
          <thead className="text-sm text-body border-b border-default bg-white">
            <tr className="bg-secondary text-white">
              {table.columns.map((column, index) => (
                <th
                  key={column}
                  scope="col"
                  className={`px-6 py-3 font-medium${
                    index < table.columns.length - 1
                      ? " border-r border-default"
                      : ""
                  }`}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {visible.length ? (
              visible.map((row, index) => {
                const striped = index % 2 === 1;

                return (
                  <tr
                    key={`${row.sr}-${row.supplier}-${row.description}`}
                    className={`border-b border-default ${
                      striped ? "bg-light" : "bg-white"
                    }`}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-heading whitespace-nowrap border-r border-default"
                    >
                      {row.sr}
                    </th>

                    <td className="px-6 py-4 border-r border-default">
                      {row.supplier}
                    </td>

                    <td className="px-6 py-4 border-r border-default">
                      {row.description}
                    </td>

                    <td className="px-6 py-4 border-r border-default">
                      {row.rate}
                    </td>

                    <td className="px-6 py-4 border-r border-default">
                      {row.hours}
                    </td>

                    <td className="px-6 py-4">
                      {row.serviceType}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="bg-white">
                <td
                  className="px-6 py-8 text-center text-body"
                  colSpan={table.columns.length}
                >
                  No matching rates found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <nav
        className="inline-flex -space-x-px rounded-md mt-4"
        aria-label="Pagination"
      >
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => onPage(currentPage - 1)}
          className="relative rounded-full me-1 inline-flex items-center px-4 py-1 text-secondary border border-black/10 hover:bg-light disabled:opacity-50 disabled:pointer-events-none"
        >
          Previous
        </button>

        {pageNumbers(currentPage, totalPages).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onPage(item)}
            aria-current={
              item === currentPage ? "page" : undefined
            }
            className={
              item === currentPage
                ? "relative rounded-full me-1 border border-black/10 inline-flex items-center bg-primary size-9 justify-center text-sm font-semibold text-white"
                : "relative rounded-full me-1 border border-black/10 inline-flex items-center size-9 justify-center text-sm font-semibold text-secondary hover:bg-light"
            }
          >
            {item}
          </button>
        ))}

        <button
          type="button"
          disabled={currentPage === totalPages}
          onClick={() => onPage(currentPage + 1)}
          className="relative rounded-full me-1 inline-flex items-center px-4 py-1 text-secondary border border-black/10 hover:bg-light disabled:opacity-50 disabled:pointer-events-none"
        >
          Next
        </button>
      </nav>
    </div>
  );
}