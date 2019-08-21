import { FlexGridCellConfig, FlexGridConfig } from "./store";

const LAYOUT_CLASS_NAME = "dp-flex-layout";
const CONTENT_CELL_CLASS_NAME = "dp-flex-layout__content-cell";
const PREVIEW_CELL_CLASS_NAME = "dp-flex-layout__preview-cell";

const GRID_DESKTOP_BREAKPOINT = 840;
const GRID_TABLET_BREAKPOINT = 520;

export function getDesktopClass(cols: number) {
  return `dp-flex-layout--${cols}-col`;
}

export function getTabletClass(cols: number) {
  return `dp-flex-layout--${cols}-col-tablet`;
}

export function getPhoneClass(cols: number) {
  return `dp-flex-layout--${cols}-col-phone`;
}

export function getFlexCellClasses(cell: FlexGridCellConfig) {
  return [
    getDesktopClass(cell.columns.desktop),
    getTabletClass(cell.columns.tablet),
    getPhoneClass(cell.columns.phone)
  ].join(" ");
}

/**
 * Create the CSS markup for the model.
 * 
 * This also illustrates the flexibility & testability of functional programming.
 * 
 * @param rowGap between rows
 * @param columnGap between columns
 * @param desktopColumns how many colums in desktop break-point
 * @param tabletColumns how many columns in tablet break-point
 * @param phoneColumns how many columns in phone break-point
 */
export function generateStyles(
  rowGap: number,
  columnGap: number,
  desktopColumns: number,
  tabletColumns: number,
  phoneColumns: number
) {
  let styleStrings = [];

  // set cell margins on general class names, for gutters:
  styleStrings.push(`
  .${CONTENT_CELL_CLASS_NAME},
  .${PREVIEW_CELL_CLASS_NAME} {
    margin: ${rowGap / 2}px ${columnGap / 2}px;
  }
  `);

  // add desktop rules
  styleStrings.push(
    `@media (min-width: ${GRID_DESKTOP_BREAKPOINT}px) {`,
    ...createStyleNamesForBreakPoint(desktopColumns, columnGap),
    `}

  `
  );

  // add tablet rules
  styleStrings.push(
    `@media (min-width: ${GRID_TABLET_BREAKPOINT}px) and (max-width: ${GRID_DESKTOP_BREAKPOINT -
      1}px) {`,
    ...createStyleNamesForBreakPoint(tabletColumns, columnGap, "tablet"),
    `}

  `
  );

  // add phone rules
  styleStrings.push(
    `@media (max-width: ${GRID_TABLET_BREAKPOINT - 1}px) {`,
    ...createStyleNamesForBreakPoint(phoneColumns, columnGap, "phone"),
    `}

  `
  );

  return styleStrings.join("");
}

function createStyleNamesForBreakPoint(columns: number, columnGap: number, sizeName = "") {
  const names = [];
  for (let i = columns; i > 0; i--) {
    names.push(`
      .${getClassNameForCol(i, sizeName)} {
        width: calc(${(i / columns) * 100}% - ${columnGap}px);
        /* flex: ${i}; */
      }
    `);
  }
  return names;
}

function getClassNameForCol(spanning: number , sizeName = "") {
  return sizeName
    ? `${LAYOUT_CLASS_NAME}--${spanning}-col-${sizeName}`
    : `${LAYOUT_CLASS_NAME}--${spanning}-col`;
}
