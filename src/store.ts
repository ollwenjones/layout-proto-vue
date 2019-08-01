import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: getDefaultState(),
  mutations: {
    SET_CELLS: function setGrid(state, grid: FlexGridCellConfig[]) {
      state.cells = [...grid];
    },
    SET_GRID_WIDTH: function setGridWidth(state, width: number) {
      state.width = width;
    },
    SET_GRID_HEIGHT: function setGridHeight(state, width: number) {
      state.width = width;
    },
    SET_GUTTER_HORIZONTAL: (state, gutter) =>
      (state.gutters.horizontal = gutter),
    SET_GUTTER_VERTICAL: (state, gutter) => (state.gutters.vertical = gutter),
    SET_MARGIN_HORIZONTAL: (state, margin) =>
      (state.margins.horizontal = margin),
    SET_MARGIN_VERTICAL: (state, margin) => (state.margins.vertical = margin)
  },
  actions: {
    updateCellsFromText: ({ commit, state }, text: string) =>
      commit("SET_CELLS", textToCellConfig(text, state)),
    addCell: ({ commit, state }, cell: FlexGridCellConfig) =>
      commit("SET_CELLS", [...state.cells, cell]),
    removeCell: ({ commit, state }, index: number) => {
      const newCells = [...state.cells].splice(index, 1);
      commit("SET_CELLS", [...state.cells, newCells]);
    },
    updateCell: ({ commit, state }) => {
      // not as obvious, need index and config, probably to know which to update
    },
    updateWidth: ({ commit }, width: number) => commit("SET_GRID_WIDTH", width),
    updateHeight: ({ commit }, height: number) => commit("SET_GRID_WIDTH", height),
    updateGutterHorizontal: ({ commit }, gutter: number) => commit("SET_GUTTER_HORIZONTAL", gutter),
    updateGutterVertical: ({ commit }, gutter: number) => commit("SET_GUTTER_VERTICAL", gutter),
    updateMarginHorizontal: ({ commit }, margin: number) => commit("SET_MARGIN_HORIZONTAL", margin),
    updateMarginVertical: ({ commit }, margin: number) => commit("SET_MARGIN_VERTICAL", margin),
  },
  getters: {
    cellModelsAsText: state => cellsModelToText(state.cells)
  }
});

export interface FlexGridCellConfig {
  columns: {
    desktop: number;
    tablet: number;
    phone: number;
  };
}

export const enum ActionTypes {
  updateCellsFromText = "updateCellsFromText",
  addCell = "addCell",
  removeCell = "removeCell",
  updateCell = "updateCell"
}

export interface FlexGridConfig extends FlexGridCellConfig {
  width: number;
  height: number;
  gutters: {
    horizontal: number;
    vertical: number;
  };
  margins: {
    horizontal: number;
    vertical: number;
  };
  cells: FlexGridCellConfig[];
}

/** Pure function helpers (below) are easy to unit test */

// TODO this should live somewhere else.
export function textToCellConfig(
  columnsText: string,
  columnConfig: FlexGridCellConfig
): FlexGridCellConfig[] {
  return columnsText.split(/\n|\r/).map(column => {
    const minDefault = getPhoneCols(columnConfig);
    let values: any[] = column.split(/,| /);
    // ensure present or load default:
    values[0] = values.length >= 1 ? parseInt(values[0], 10) : minDefault;
    values[1] = values.length >= 2 ? parseInt(values[1], 10) : minDefault;
    values[2] = values.length >= 3 ? parseInt(values[2], 10) : minDefault;

    // ensure number
    values[0] = isNaN(values[0]) ? minDefault : values[0];
    values[1] = isNaN(values[1]) ? minDefault : values[1];
    values[2] = isNaN(values[2]) ? minDefault : values[2];

    let breakPoints = {
      desktop: values[0],
      tablet: values[1],
      phone: values[2]
    };

    return { columns: breakPoints };
  });
}

function getPhoneCols(columnConfig: FlexGridCellConfig) {
  return columnConfig.columns.phone;
}

function cellsModelToText(model: FlexGridCellConfig[]) {
  let values = model.map(cell => {
    const cellValue = getCellColumns(cell);
    return [cellValue.desktop, cellValue.tablet, cellValue.phone].join(" ");
  });
  return values.join("\n");
}

function getCellColumns(cell: FlexGridCellConfig) {
  // defend against model changes
  return cell.columns;
}

function getDefaultState(): FlexGridConfig {
  return {
    columns: { desktop: 12, tablet: 8, phone: 4 },
    width: 600,
    height: 500,
    gutters: {
      horizontal: 8,
      vertical: 5
    },
    margins: {
      horizontal: 15,
      vertical: 10
    },
    cells: [
      { columns: { desktop: 1, tablet: 2, phone: 2 } },
      { columns: { desktop: 1, tablet: 2, phone: 2 } },
      { columns: { desktop: 1, tablet: 2, phone: 2 } },
      { columns: { desktop: 1, tablet: 2, phone: 2 } },
      { columns: { desktop: 2, tablet: 2, phone: 2 } },
      { columns: { desktop: 2, tablet: 2, phone: 2 } },
      { columns: { desktop: 2, tablet: 4, phone: 2 } },
      { columns: { desktop: 2, tablet: 4, phone: 2 } },
      { columns: { desktop: 4, tablet: 4, phone: 4 } },
      { columns: { desktop: 4, tablet: 5, phone: 4 } },
      { columns: { desktop: 4, tablet: 3, phone: 4 } },
      { columns: { desktop: 6, tablet: 4, phone: 4 } },
      { columns: { desktop: 6, tablet: 4, phone: 4 } },
      { columns: { desktop: 5, tablet: 3, phone: 4 } },
      { columns: { desktop: 7, tablet: 5, phone: 4 } },
      { columns: { desktop: 12, tablet: 8, phone: 4 } }
    ]
  };
}
