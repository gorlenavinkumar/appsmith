/* eslint-disable cypress/no-unnecessary-waiting */

import EditorNavigation, {
  EntityType,
} from "../../../../support/Pages/EditorNavigation";

const widgetsPage = require("../../../../locators/Widgets.json");
const testdata = require("../../../../fixtures/testdata.json");
import {
  propPane,
  agHelper,
} from "../../../../support/Objects/ObjectsCore";

describe(
  "Table Widget V2 property pane feature validation",
  { tags: ["@tag.Binding"] },
  function () {
    before(() => {
      agHelper.AddDsl("tableV2NewDsl");
    });

    let propPaneBack = "[data-testid='t--property-pane-back-btn']";

    it("1. Table widget V2 toggle test for text alignment", function () {
      EditorNavigation.SelectEntityByName("Table1", EntityType.Widget);
      cy.editColumn("id");
      cy.moveToStyleTab();
      cy.wait(500);

      propPane.EnterJSContext("Text align", testdata.bindingAlign);

      cy.readTableV2dataValidateCSS("0", "0", "justify-content", "flex-start");
      cy.readTableV2dataValidateCSS("1", "0", "justify-content", "flex-end");
    });

    it("2. Table widget V2 change text size and validate", function () {
      cy.readTableV2dataValidateCSS("0", "0", "font-size", "14px");
      EditorNavigation.SelectEntityByName("Table1", EntityType.Widget);
      cy.get(propPaneBack).click({ force: true });
      cy.editColumn("id");
      cy.moveToStyleTab();
      cy.wait(500);
      cy.wait(1000);
      cy.get(widgetsPage.textSize).last().click({ force: true });
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(1000);
      cy.selectTxtSize("XL");

      cy.readTableV2dataValidateCSS("0", "0", "font-size", "30px");
    });

    it("3. Table widget toggle test for text size", function () {
      EditorNavigation.SelectEntityByName("Table1", EntityType.Widget);
      cy.get(propPaneBack).click({ force: true });
      cy.editColumn("id");
      cy.moveToStyleTab();
      cy.wait(500);
      propPane.EnterJSContext("Text size", testdata.bindingNewSize);
      cy.readTableV2dataValidateCSS("0", "0", "font-size", "14px");
      cy.readTableV2dataValidateCSS("1", "0", "font-size", "24px");
    });

    it("4. Table widget toggle test for vertical Alignment", function () {
      EditorNavigation.SelectEntityByName("Table1", EntityType.Widget);
      cy.get(propPaneBack).click({ force: true });
      cy.editColumn("id");
      cy.moveToStyleTab();
      cy.get(widgetsPage.toggleTextSize).first().click({ force: true });
      cy.wait(1000);
      propPane.EnterJSContext(
        "Vertical alignment",
        testdata.bindingVerticalAlig,
      );
      cy.readTableV2dataValidateCSS("0", "0", "align-items", "flex-start");
      cy.readTableV2dataValidateCSS("1", "0", "align-items", "flex-end");
    });

    it("5. Table widget V2 toggle test for style Alignment", function () {
      EditorNavigation.SelectEntityByName("Table1", EntityType.Widget);
      cy.get(propPaneBack).click({ force: true });
      cy.editColumn("id");
      cy.moveToStyleTab();
      /*
    cy.get(widgetsPage.toggleVerticalAlig)
      .first()
      .click({ force: true });
      */
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(1000);
      propPane.EnterJSContext("Emphasis", testdata.bindingStyle);
      cy.readTableV2dataValidateCSS("0", "0", "font-style", "normal");
      cy.readTableV2dataValidateCSS("1", "0", "font-style", "italic");
    });

    it("6. Table widget toggle test for text color", function () {
      EditorNavigation.SelectEntityByName("Table1", EntityType.Widget);
      cy.get(propPaneBack).click({ force: true });
      cy.editColumn("id");
      cy.moveToStyleTab();
      cy.get(widgetsPage.toggleVerticalAlig).first().click({ force: true });
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(1000);
      propPane.EnterJSContext("Text color", testdata.bindingTextColor);
      cy.readTableV2dataValidateCSS("0", "0", "color", "rgb(0, 128, 0)");
      cy.readTableV2dataValidateCSS("1", "0", "color", "rgb(255, 0, 0)");
    });

    it("7. Table widget toggle test for background color", function () {
      EditorNavigation.SelectEntityByName("Table1", EntityType.Widget);
      cy.get(propPaneBack).click({ force: true });
      cy.editColumn("id");
      cy.moveToStyleTab();
      cy.wait(1000);
      propPane.EnterJSContext("Cell Background", testdata.bindingTextColor);
      cy.readTableV2dataValidateCSS(
        "0",
        "0",
        "background",
        "rgb(0, 128, 0) none repeat scroll 0% 0% / auto padding-box border-box",
      );
      cy.readTableV2dataValidateCSS(
        "1",
        "0",
        "background",
        "rgb(255, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
      );
    });
  },
);
