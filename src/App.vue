<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Favoritos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="blue"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>App de Frases</v-toolbar-title>
    </v-app-bar>
    <br/><br/><br/>
    <v-layout py-5>
      <v-flex xs12 md3>
        <v-card
          max-width="300" 
          class="mx-auto"
        >
        <v-img
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            height="194"
          ></v-img>

          <h2>Comidas</h2>

          <v-card-actions>
          
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
        <template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">click para ver as opções</v-btn>
        
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Alimentos:</span>
        </v-card-title>
        <v-card-text>
           <h3>
             Açucar, feijão, arroz
          </h3>
          </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
      </v-flex>
      <v-flex xs12 md3>
        <v-card
          max-width="300" v-on:click ="('AV. Afonso Pena')"
          class="mx-auto"
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/road.jpg"
            height="194"
          ></v-img>
          
          <h2>Ruas / Avenidas</h2>
          <v-card-actions>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
        
        <template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">click para ver as opções</v-btn>
        
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Ruas e Avenidas</span>
        </v-card-title>
        <v-card-text>
           <h3>Av Afonso pena
          </h3>
          </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
      </v-flex>
      <v-flex xs12 md3>
        <v-card
          max-width="300" 
          class="mx-auto"
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
            height="194"
          ></v-img>

          <h2>Hotel</h2>

          <v-card-actions>
          
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
        <template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">click para ver as opções</v-btn>
        
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Hoteis ou Pousadas</span>
        </v-card-title>
        <v-card-text>
           <h3>Hotel Vale verde
          </h3>
          <h3>Hotel Paraisos
          </h3>
          <h3>Hotel nacional
          </h3>
          
          </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
      </v-flex>
      <v-flex xs12 md3>
        <v-card
          max-width="300"  
          class="mx-auto"
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
            height="194"
          ></v-img>

          <h2>Paisagens</h2>

          <v-card-actions>
          
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            
          </v-card-actions>
        </v-card>
        <template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">click para ver as opções</v-btn>
        
      </template>
      <v-card>
        <v-card-title>
          <span class="headline"></span>
        </v-card-title>
        <v-card-text>
           <h3>Parque das nações
          </h3>
          <h3>parque Airton Senna
          </h3>
          <h3>Praça da radio club
          </h3>
          </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
      </v-flex>

    </v-layout>

    <v-layout>
      <v-flex xs12 md3>
        <v-card 
          max-width="300" 
          class="mx-auto"
        >
        <v-img
            src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
            height="194"
          ></v-img>

          <h2>Lojas</h2>

          <v-card-actions>
          
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
             <template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">click para ver as opções</v-btn>
        
      </template>
      <v-card>
        <v-card-title>
          <span class="headline"></span>
        </v-card-title>
        <v-card-text>
           <h3>Lojas Americanas
          </h3>
          <h3>Lojas renner
          </h3>
          <h3>Loja Mariza
          </h3>
          </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
          </v-card-actions>
        </v-card>
        
      </v-flex>
      <v-flex xs12 md3>
        <v-card
          max-width="300" 
          class="mx-auto"
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/plane.jpg"
            height="194"
          ></v-img>
          <h2>Transportes</h2>
          <v-card-actions>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
             <template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">click para ver as opções</v-btn>
        
      </template>
      <v-card>
        <v-card-title>
          <span class="headline"></span>
        </v-card-title>
        <v-card-text>
           <h3>Taxi
          </h3>
          <h3>Uber
          </h3>
          <h3>Aeroporto
          </h3>
          </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
          </v-card-actions>
        </v-card>
        <template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">click para ver as opções</v-btn>
        
      </template>
      <v-card>
        <v-card-title>
          <span class="headline"></span>
        </v-card-title>
        <v-card-text>
           <h3>Parque das nações
          </h3>
          <h3>parque Airton Senna
          </h3>
          <h3>Praça da radio club
          </h3>
          </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
      </v-flex>
      

    </v-layout>
    <v-footer
      color="blue"
      app
    >
      <span class="white--text">&copy; Jhonantan Tads 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),

    methods: {
    say: function (message) {
      alert(message)
    }
  }
  }
</script>