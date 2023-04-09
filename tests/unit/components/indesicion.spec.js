import { shallowMount } from "@vue/test-utils";
import Indecision from "@/components/Indecision.vue";

describe('Indesicion component', () => {
    let wrapper;
    let clgSpy;
    beforeEach(() => {
        wrapper = shallowMount(Indecision)

        clgSpy = jest.spyOn(console, 'log')
    })
    test('Debe hacer match con el snapshot ', () => {
        expect(wrapper.html()).toMatchSnapshot()
    });
    test('Al escribir en el input no debe de disparar nada (console.log)', async () => {
        const input = wrapper.find("input")
        await input.setValue("Hola mundo")

        expect(clgSpy).toHaveBeenCalled()
    });
    test('Al escribir "?" debe de disparar el fetch', () => {
        
    });
    test('Pruebas en getAnswer', () => {
        
    });
    test('Pruebas en getAnswer - fallos en la API', () => {
        
    });
})