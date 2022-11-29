import { browser, element, by} from 'protractor';

describe('Prueba Home Cliente',()=>{
    beforeEach(()=>{
        browser.get("./cliente-home");
    });
    it("Titulo de Home cliente se muestra correctamente",()=>{
        expect(element(by.css(".homecliente ion-title")).getText()).toContain("Home Cliente");
    });
});