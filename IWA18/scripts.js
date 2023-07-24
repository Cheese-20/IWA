import {
  createOrderHtml,
  html,
  updateDraggingHtml,
  moveToColumn,
} from "./view.js";
import {
  TABLES,
  COLUMNS,
  state,
  createOrderData,
  updateDragging,
} from "./data.js";

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event
 */
const handleDragOver = (event) => {
  event.preventDefault();
  const path = event.path || event.composedPath();
  let column = null;

  for (const element of path) {
    const { area } = element.dataset;
    if (area) {
      column = area;
      break;
    }
  }

  if (!column) return;
  updateDragging({ over: column });
  updateDraggingHtml({ over: column });
};

const handleDragStart = (event) => {};

const handleDragEnd = (event) => {};

// displays the help dialog
const handleHelpToggle = (event) => {
  event.preventDefault();
  const overlay = document.querySelector("[data-help-overlay]");
  overlay.style.display = "block"; // adding the ovelay
  const remove = () => {
    overlay.style.display = "none";
  };
  document
    .querySelector("[data-help-overlay] .button")
    .addEventListener("click", remove);
};

//adds the order to the grid
const handleAddToggle = (event) => {
  const overlay = document.querySelector("[data-add-overlay]");
  overlay.style.display = "block"; // adding items
  const remove = () => {
    overlay.style.display = "none";
  };
  document
    .querySelector("[data-add-overlay] .button_primary")
    .addEventListener("click", remove);

  document
    .querySelector("[data-add-overlay] .button")
    .addEventListener("click", remove);
};

// this function creates an order
const handleAddSubmit = (event) => {
  event.preventDefault();
  const order = {
    id: null,
    title: document.querySelector("[data-add-title]").value,
    table: document.querySelector("[data-add-table]").value,
    column: document.querySelector('[data-column="ordered"]'),
    created: null,
  };
  document
    .querySelector('[data-column="ordered"]')
    .appendChild(createOrderHtml(createOrderData(order)));
  html.add.overlay.close();
  html.add.form.reset();
};

// this fiunction displays the dialog
const handleEditToggle = (event) => {
  const overlay = document.querySelector("[data-edit-overlay] ");
  overlay.style.display = "block"; 
  const remove = () => {
    overlay.style.display = "none";
  };
  document
    .querySelector("[data-edit-cancel]")
    .addEventListener("click", remove);
};

// this functions edits the order
const handleEditSubmit = (event) => {
    event.preventDefault();
    const order = document.querySelector('.order')
    order.remove()
    const data = {
        title: html.edit.title.value,
        table: html.edit.table.value,
        column: html.edit.column.value,
    }
    const orderData = createOrderData(data)
    const orderHtml = createOrderHtml(orderData)
    const columns = document.querySelector(`[data-column="${data.column}"]`)
    columns.appendChild(orderHtml)
    html.edit.overlay.close()
};

// this function deletes the order
const handleDelete = (event) => {
    const { target } = event

    if (target == html.edit.delete) {
        document.querySelector('.order').remove()
    }
    const overlay = document.querySelector("[data-edit-overlay] ");
    overlay.style.display = "none"; 
};

html.add.cancel.addEventListener("click", handleAddToggle);
html.other.add.addEventListener("click", handleAddToggle);
html.add.form.addEventListener("submit", handleAddSubmit);

html.other.grid.addEventListener("click", handleEditToggle);
html.edit.cancel.addEventListener("click", handleEditToggle);
html.edit.form.addEventListener("submit", handleEditSubmit);
html.edit.delete.addEventListener("click", handleDelete);

html.help.cancel.addEventListener("click", handleHelpToggle);
html.other.help.addEventListener("click", handleHelpToggle);

for (const htmlColumn of Object.values(html.columns)) {
  htmlColumn.addEventListener("dragstart", handleDragStart);
  htmlColumn.addEventListener("dragend", handleDragEnd);
}

for (const htmlArea of Object.values(html.area)) {
  htmlArea.addEventListener("dragover", handleDragOver);
}
