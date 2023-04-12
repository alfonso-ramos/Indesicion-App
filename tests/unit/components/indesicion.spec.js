import { shallowMount } from "@vue/test-utils";
import Indecision from "@/components/Indecision.vue";

describe('Indesicion component', () => {
    let wrapper;
    let clgSpy;

    global.fetch = jest.fn( () => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forved: 'false' ,
            image: 'https://yesno.wtf/assets/yes/2.gif'
        })
    }))

    beforeEach(() => {
        wrapper = shallowMount(Indecision)

        clgSpy = jest.spyOn(console, 'log')

        jest.clearAllMocks()
    })
    test('Debe hacer match con el snapshot ', () => {
        expect(wrapper.html()).toMatchSnapshot()
    });
    test('Al escribir en el input no debe de disparar nada (console.log)', async () => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer' )     

        const input = wrapper.find("input")
        await input.setValue("Hola mundo")

        expect(clgSpy).toHaveBeenCalled()
        expect(getAnswerSpy).not.toHaveBeenCalled()
    });
    test('Al escribir "?" debe de disparar el getAnswer', async() => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer' ) 

        const input = wrapper.find("input")
        await input.setValue("Hola ?")

        expect(getAnswerSpy).toHaveBeenCalled()
        
    });
    test('Pruebas en getAnswer', async () => {
        await wrapper.vm.getAnswer()
        const img = wrapper.find('img')

        expect(img.exists()).toBeTruthy
        expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif')
        expect(wrapper.vm.answer).toBe('Si!')
    });
    test('Pruebas en getAnswer - fallos en la API', async () => {
        
        fetch.mockImplementationOnce(() => Promise.reject('API is down'))
        
        await wrapper.vm.getAnswer()

        const img = wrapper.find('img')

        expect(img.exists()).toBeFalsy()
        expect(wrapper.vm.answer).toBe('No se pudo cargar de la API!')
    });
})