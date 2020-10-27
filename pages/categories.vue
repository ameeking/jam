<template>
  <main>
    <h1>Categories</h1>
    <p>This lists out all the categories and the associated products</p>

    <v-treeview :items="items">
      <template slot="label" slot-scope="props">
        <nuxt-link :to="props.item.to" v-if="props.item.to">{{ props.item.name }}</nuxt-link>
        <span v-else>{{ props.item.name }}</span>
      </template>
    </v-treeview>

  </main>
</template>
<script>
export default {
  name: "about",
  data: () => ({
    items: [
      {
        id: 1,
        name: 'Oceania :',
        to: '/',
        children: [
          { id: 2, name: 'Australia' },
          { id: 3, name: 'Fiji' },
          { id: 4, name: 'New Zealand' },
        ],
      },
      {
        id: 5,
        name: 'Asia :',
        children: [
          {id: 6, name: 'China :'},
          {id: 7, name: 'Thailand' },
          {id: 8, name: 'Vietnam' },
          {id: 9, name: 'Laos' },
        ],
      },
      {
        id: 10,
        name: 'Europe :',
        children: [
          { id: 11, name: 'Austria' },
          { id: 12, name: 'France' },
          { id: 13, name: 'Switzerland' },
          { id: 14, name: 'United Kingdom' },
          { id: 15, name: 'Spain' },
          { id: 16, name: 'Poland' },
          { id: 17, name: 'Greece' },
        ],
      },
    ],
  }),
};
</script>
