import { createElement } from 'lwc';
import UnitTest from 'c/unitTest';

describe('c-unit-test', () => {
    afterEach(() => {
        // afterEach se ejecuta después de cada caso de prueba
        while(document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('muestra el estado de la unidad con unitNumber predeterminado', () => {
        // Crea una instancia del componente c-unit-test
        const element = createElement('c-unit-test', {
            is: UnitTest
        });

        // Asegura que el valor de unitNumber sea 5 por defecto
        expect(element.unitNumber).toBe(5);
        // Agrega el elemento a la instancia jsdom

        /*appendChild(element): Este método se utiliza para agregar un nuevo nodo (en este caso, el componente c-unit-test) como hijo de otro nodo,
                                que en este caso es el cuerpo del documento. El elemento especificado se agregará al final de la lista de hijos del nodo padre,
                                en este caso, al final del cuerpo del documento.
                                Entonces, en resumen, la línea de código está añadiendo dinámicamente la instancia del componente c-unit-test al cuerpo del documento HTML.
                                Esto es esencial para simular la presencia del componente en la interfaz de usuario durante la ejecución de la prueba.
                                Después de agregar el elemento al cuerpo del documento, puedes interactuar con él y realizar 
                                comprobaciones sobre su apariencia y comportamiento como si estuviera integrado en la página.        
                                En el contexto de pruebas, esto es especialmente útil porque permite manipular y probar el componente en un entorno controlado sin necesidad 
                                de renderizarlo en un navegador real.*/

        document.body.appendChild(element);    
        // Verifica el saludo mostrado
        const div = element.shadowRoot.querySelector('div');
        expect(div.textContent).toBe('Unidad 5 Ordenada!');
    });
    

    it('muestra el estado de la unidad con unitNumber actualizado', () => {
        // Crea una instancia del componente c-unit-test
        const element = createElement('c-unit-test', {
            is: UnitTest
        });
    
        // Agrega el elemento a la instancia jsdom
        document.body.appendChild(element);
    
        // Actualiza unitNumber después de que el elemento se ha agregado
        element.unitNumber = 6;
    
        const div = element.shadowRoot.querySelector('div');
        
        // Verifica el estado de la unidad mostrado
        // expect(div.textContent).toBe('Unidad 6 Ordenada!'); // Fallará inicialmente
        expect(div.textContent).not.toBe('Unidad 6 Ordenada!');
    
        // Devuelve una promesa para esperar cualquier actualización asíncrona del DOM. Jest
        // automáticamente esperará a que la cadena de promesas se complete antes de
        // finalizar la prueba y fallará si la promesa se rechaza.
        return Promise.resolve().then(() => {
            // Ahora verifica nuevamente después de la actualización asíncrona
            expect(div.textContent).toBe('Unidad 6 Ordenada!');
        });
    });

});