"use client";

import { useState } from "react";
import VitaTable from "./VitaTable";

const DEFAULT_PER_PAGE = 40;

export default function VitaPricing({ tables }) {
  const [activeId, setActiveId] = useState(tables[0]?.id);

  const [tableState, setTableState] = useState(() =>
    Object.fromEntries(
      tables.map((table) => [
        table.id,
        {
          query: "",
          page: 1,
          perPage: DEFAULT_PER_PAGE,
        },
      ]),
    ),
  );

  function updateState(id, patch) {
    setTableState((current) => ({
      ...current,
      [id]: {
        ...current[id],
        ...patch,
      },
    }));
  }

  return (
    <section className="2xxl:pt-5 md:pt-5 sm:pt-5 pt-5 bg-light z-2">
      <div className="p-12">
        <div className="row">
          <div className="w-full">
            <div className="mb-5 text-start">
              <div className="vita-pricing-tabs">
                <ul
                  className="flex flex-wrap gap-2"
                  role="tablist"
                >
                  {tables.map((table) => {
                    const active = table.id === activeId;

                    return (
                      <li
                        key={table.id}
                        className={`tab-title${
                          active ? " active" : ""
                        }`}
                        role="presentation"
                      >
                        <button
                          type="button"
                          role="tab"
                          aria-selected={active}
                          onClick={() =>
                            setActiveId(table.id)
                          }
                          className="bg-white text-heading py-2.5 px-5 font-medium rounded-2lg duration-500 hover:bg-primary hover:text-white [.tab-title.active_&]:bg-primary [.tab-title.active_&]:text-white"
                        >
                          {table.label}
                        </button>
                      </li>
                    );
                  })}
                </ul>

                <div className="tab-contents mt-5">
                  {tables.map((table) => {
                    const state = tableState[table.id];
                    const active = table.id === activeId;

                    return (
                      <div
                        key={table.id}
                        className={`tab-content${
                          active ? " active" : ""
                        }`}
                        role="tabpanel"
                        hidden={!active}
                      >
                        {active ? (
                          <VitaTable
                            table={table}
                            query={state.query}
                            page={state.page}
                            perPage={state.perPage}
                            onQuery={(query) =>
                              updateState(table.id, {
                                query,
                                page: 1,
                              })
                            }
                            onPage={(page) =>
                              updateState(table.id, {
                                page,
                              })
                            }
                            onPerPage={(perPage) =>
                              updateState(table.id, {
                                perPage,
                                page: 1,
                              })
                            }
                          />
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}