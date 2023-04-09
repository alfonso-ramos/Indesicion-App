import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Counter component", () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Counter)
    })

    test('Debe de hacer match con el snapshot', () => {
        const wrapper = shallowMount(Counter)
        expect(wrapper.html()).toMatchSnapshot()
    });

    test('h2 debe de tener el valor por defecto: Counter', () => {
        const h2Value = wrapper.find("h2").text()
        expect(h2Value).toBe("Counter")
    });

    test('El valor por defecto debe ser 100 en el p', () => {
        const value = wrapper.find("[data-testid='counter']").text()

        expect(value).toBe("100")
    });
    test('Debe incrementar y decrementar en 1 el valor del contador', async () => {
        const [increaseBtn, decreaseBnt] = wrapper.findAll("button")

        await increaseBtn.trigger("click")
        await increaseBtn.trigger("click")
        await increaseBtn.trigger("click")
        
        await decreaseBnt.trigger("click")
        await decreaseBnt.trigger("click")
        
        const value = wrapper.find("[data-testid='counter']").text()

        expect(value).toBe("101")
    });
    test('Debe establecer el valor por defecto', () => {
        const start = wrapper.props("start")
        expect(start).toBe(100)
    });
    test('Debe de mostrar la prop title', () => {

        const title = "Hola Mundo!" 
        const wrapper = shallowMount(Counter, {
            props: {
                title
            }
        })
        expect(wrapper.find("h2").text()).toBe(title)
    });
})