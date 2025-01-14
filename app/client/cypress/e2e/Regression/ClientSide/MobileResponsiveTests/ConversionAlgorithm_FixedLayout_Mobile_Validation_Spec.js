import { agHelper, autoLayout } from "../../../../support/Objects/ObjectsCore";

describe(
  "Auto conversion algorithm usecases for fixed Layout",
  { tags: ["@tag.MobileResponsive"] },
  function () {
    it("1. Validate basic conversion algorithm usecases fixed layout usecase Mobile", function () {
      agHelper.AddDsl("conversionFrAutoLayoutDsl");
      //cy.openPropertyPane("containerwidget");
<<<<<<< HEAD
<<<<<<< HEAD
      cy.get("@getPage").then((httpResponse) => {
        const data = httpResponse.response.body.data;
=======
=======
>>>>>>> 695741d412c30de2c1ee7660e75eceb935e56e51
      cy.get("@getConsolidatedData").then((httpResponse) => {
        const data = httpResponse.response.body.data.pageWithMigratedDsl.data;
        testHeight = data.layouts[0].dsl.bottomRow;
>>>>>>> f4d7de241d339c14e46b5c80c94addaec6dfb3ae
        //expect(testHeight).to.equal(380);
      });
      cy.get(".t--widget-audiorecorderwidget")
        .invoke("css", "height")
        .then((aheight) => {
          cy.get(".t--widget-buttongroupwidget")
            .invoke("css", "height")
            .then((bheight) => {
              cy.get(".t--widget-documentviewerwidget")
                .invoke("css", "height")
                .then((dheight) => {
                  cy.log(aheight);
                  cy.log(bheight);
                  cy.log(dheight);
                  cy.wait(3000);

                  autoLayout.ConvertToAutoLayoutAndVerify();

                  cy.get(".t--widget-audiorecorderwidget")
                    .invoke("css", "height")
                    .then((a1height) => {
                      cy.get(".t--widget-buttongroupwidget")
                        .invoke("css", "height")
                        .then((b1height) => {
                          cy.get(".t--widget-documentviewerwidget")
                            .invoke("css", "height")
                            .then((d1height) => {
                              expect(aheight).to.not.equal(a1height);
                              expect(bheight).to.not.equal(b1height);
                              expect(dheight).to.not.equal(d1height);

                              autoLayout.ConvertToFixedLayoutAndVerify(
                                "MOBILE",
                              );

                              cy.get(".t--widget-audiorecorderwidget")
                                .invoke("css", "height")
                                .then((raheight) => {
                                  cy.get(".t--widget-buttongroupwidget")
                                    .invoke("css", "height")
                                    .then((rbheight) => {
                                      cy.get(".t--widget-documentviewerwidget")
                                        .invoke("css", "height")
                                        .then((rdheight) => {
                                          expect(a1height).to.not.equal(
                                            raheight,
                                          );
                                          expect(b1height).to.not.equal(
                                            rbheight,
                                          );
                                          expect(d1height).to.not.equal(
                                            rdheight,
                                          );
                                          expect(aheight).to.equal(raheight);
                                          expect(bheight).to.equal(rbheight);
                                          expect(dheight).to.equal(rdheight);
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
      agHelper.Sleep();
    });
  },
);
