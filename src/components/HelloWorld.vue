<template>
<v-card
    class="mx-auto"
    max-width="100%"
    outlined
  >
   <v-list-item three-line>
      <v-list-item-content>
   <v-list-item-title class="headline mb-1">
 
  WHS125900 ADVANTI 7,5x17/5x115 ET40 D70,1 MM581 MGMFP

  </v-list-item-title>
   </v-list-item-content>
    </v-list-item>
 <v-row>
  <v-col
            cols="7"
          >
  <model-obj src="/obj/car.obj"></model-obj>
  </v-col>
     <v-col
            cols="1"
          >
          </v-col>
   <v-col
            cols="4"
          >
  <v-simple-table>
    <template v-slot:default>
      <tbody>
        <tr>
          <td>Артикул</td>
          <td>WHS125900</td>
        </tr>
        <tr>
          <td>Производитель</td>
          <td>ADVANTI</td>
        </tr>
        <tr>
          <td>Ширина</td>
          <td>7.5</td>
        </tr>
        <tr>
          <td>Диаметр</td>
          <td>17</td>
        </tr>
        <tr>
          <td>К-во крепежных отверстий, шт</td>
          <td>5</td>
        </tr>
        <tr>
          <td>Диаметр расположения отверстий, мм</td>
          <td>115</td>
        </tr>
        <tr>
          <td>Вылет диска, мм</td>
          <td>40</td>
        </tr>
        <tr>
          <td>Диаметр ступицы, мм</td>
          <td>70.1</td>
        </tr>
                <tr>
          <td>Цвет</td>
          <td>MGMFP</td>
        </tr>
                <tr>
          <td>Модель</td>
          <td>MM581</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <v-row>
   <v-btn class="ma-2 tile outlined" color="primary">
      <v-icon left >mdi-share-variant</v-icon> Поделиться
    </v-btn>
      <v-btn class="ma-2 tile outlined" color="success">
      <v-icon left >mdi-cart-plus</v-icon> Добавить в корзину
    </v-btn>
    </v-row>
  </v-col>
 
   </v-row>
    <v-divider></v-divider>
    <v-row justify="space-around">
   <v-col  cols="8">
    <v-card-text>
      <p class="display-1 text--primary">
        Описание
      </p>
      <div class="text--primary">
   Quis autem vel eum iure reprehenderit, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem eum fugiat, quo voluptas nulla pariatur?

Lorem ipsum dolor sit amet, nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat!

Nemo enim ipsam voluptatem, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, ut et voluptates repudiandae sint et molestiae non recusandae.

Nemo enim ipsam voluptatem, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minima veniam, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Duis aute irure dolor in reprehenderit in voluptate, consectetur adipiscing elit, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Sed...
      </div>
    </v-card-text>
    </v-col>
    </v-row>
   <v-row style="height:80px">
   </v-row>
   <v-row justify="space-around">
   <v-col  cols="4">
    <v-list-item-content>
   <v-list-item-title class="headline mb-1 text-center">
   Есть вопросы? 
     </v-list-item-title>
<v-list-item-title class="headline mb-1 text-center">
     Оставтье заявку - мы Вам перезвоним
       </v-list-item-title>
   </v-list-item-content>
        <template>
        <ValidationObserver ref="observer" v-slot="{  }">
          <form>
            <ValidationProvider v-slot="{ errors }" name="Name" rules="required|max:10">
              <v-text-field
                v-model="name"
                :counter="10"
                :error-messages="errors"
                label="Имя"
                required
              ></v-text-field>
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" name="phone" rules="required|phone">
              <v-text-field
                v-model="phone"
                :error-messages="errors"
                label="Телефон"
                required
              ></v-text-field>
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" rules="required" name="checkbox">
              <v-checkbox
                v-model="checkbox"
                :error-messages="errors"
                value="1"
                label="согласие на обработку персональных данных"
                type="checkbox"
                required
              ></v-checkbox>
            </ValidationProvider>

            <v-btn class="mr-4" @click="submit">submit</v-btn>
            <v-btn @click="clear">clear</v-btn>
          </form>
        </ValidationObserver>
      </template>
      </v-col>
  </v-row>
   </v-card>
</template>
<script>
import { ModelObj } from 'vue-3d-model';
  import { required, email, max } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })
export default {
  components: { ModelObj,      
      ValidationProvider,
      ValidationObserver, },
  data: function () {
        return {
        }
    },
        methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = null
        this.$refs.observer.reset()
      },
    },
}
</script>