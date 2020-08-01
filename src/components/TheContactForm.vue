<template>
    <div class="formulario-contacto">
        <h1 class="fw-300 centrar-texto">Contact</h1>
        <img :src="imageSrc('destacada3.jpg')" alt="Imagen Principal">

        <main class="contenedor seccion contenido-centrado">
            <h2 class="fw-300 centrar-texto">Fill the contact form</h2>
            <form action="" class="contacto">
                <fieldset>
                    <legend>Personal information</legend>
                    <label for="nombre">Name:</label>
                    <input type="text" id="nombre" placeholder="Tu Nombre">

                    <label for="email">Email:</label>
                    <input type="email" id="email" placeholder="Tu email" required>

                    <label for="telefono">Phone:</label>
                    <input type="tel" id="telefono" placeholder="Tu Telefono" required>

                    <label for="mensaje">Message:</label>
                    <textarea id="mensaje"></textarea>
                </fieldset>
                <fieldset>
                    <legend>About the property</legend>
                    <label for="opciones">Selling or buying?</label>
                    <select id="opciones">
                        <option value="" disabled selected>-- Select --</option>
                        <option value="">Buying</option>
                        <option value="">Selling</option>
                    </select>

                    <label for="cantidad"></label>
                    <input type="number" id="cantidad" min="0">
                </fieldset>

                <fieldset>
                    <legend>Contact:</legend>
                    <p>How would you like to be reached?</p>
                    <div class="forma-contacto">
                        <label for="radio-telefono">Phone</label>
                        <input type="radio" value="phone" v-model="selectedValue" name="contacto" id="radio-telefono">
                        <label for="radio-email">Email</label>
                        <input type="radio" value="email" v-model="selectedValue" name="contacto" id="radio-email">
                    </div>

                    <div class="" v-show="selectedValue === 'phone'">
                        <p>Si eligió teléfono, elija la fecha y hora</p>
                        <label for="fecha">Fecha:</label>
                        <input type="date" id="fecha">
                        <label for="hora">Hora:</label>
                        <input type="time" id="hora" min="9:00" max="18:00">
                    </div>
                </fieldset>

                <input type="submit" class="boton boton-verde">
            </form>
        </main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedValue: null
        }
    },
    methods: {
        imageSrc(image) {
            return require(`@/assets/img/${image}`);
        }
    }
}
</script>

<style>

</style>