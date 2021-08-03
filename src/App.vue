<template>
  <v-app>
    <v-card>

      <v-app-bar color="deep-purple accent-4" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>

        <v-spacer/>

        <v-btn icon> <v-icon>mdi-magnify</v-icon> </v-btn>

        <v-btn icon> <v-icon>mdi-filter</v-icon> </v-btn>

        <v-btn icon> <v-icon>mdi-dots-vertical</v-icon> </v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute temporary app clipped>
        <v-list nav dense>
            <v-list-item :to="{path: '/'}">
              <v-list-item-action>
                <v-icon>mdi-{{ icons[0] }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item :to="{path: '/articles'}">
              <v-list-item-action>
                <v-icon>mdi-{{ icons[1] }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Articles</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item :to="{path: '/contact'}">
              <v-list-item-action>
                <v-icon>mdi-{{ icons[2] }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Contact</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container fluid>
          <v-fade-transition mode="out-in">
            <router-view></router-view>
          </v-fade-transition>
        </v-container>
      </v-main>
    
    </v-card>
  </v-app>
</template>

<script>
  export default {
    name: "App",
    data: () => ({
      icons: ['home', 'shopping', 'email'],
      drawer: false
    })
  }
</script>