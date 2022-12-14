const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      characters: [],
      planets: [],
      vehicles: [],
      character: [],
      planet: [],
      vehicle: [],
      favorites: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      addFav:(item) => { 
        let aux = getStore().favorites
        aux.push(item)
        setStore({ favorites: aux})
    },
      removeFav:(uid) => { 
        let aux = getStore().favorites
        let x = aux.filter((element,i)=> element.uid != uid)
        setStore({ favorites: x})
    },
      getCharacter: async (uid) => { 
        fetch(`https://www.swapi.tech/api/people/${uid}`)
          .then((resp) => resp.json())
          .then((resp) => setStore({ character: resp.result.properties }))
          .catch((err) => console.error(err));
      }, 
      getPlanet: async (uid) => { 
        fetch(`https://www.swapi.tech/api/planets/${uid}`)
          .then((resp) => resp.json())
          .then((resp) => setStore({ planet: resp.result.properties }))
          .catch((err) => console.error(err)); 
      },
      getSpaceship: async (uid) => { 
        fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
        .then((resp) => resp.json())
        .then ((resp) => setStore({ vehicle: resp.result.properties }))
        .catch((err) => console.error(err));

      },
      getMessage: async () => {
        fetch("https://www.swapi.tech/api/people")
          .then((resp) => resp.json())
          .then((resp) => setStore({ characters: resp.results }))
          .catch((err) => console.error(err));

        fetch("https://www.swapi.tech/api/planets")
          .then((resp) => resp.json())
          .then((resp) => setStore({ planets: resp.results }))
          .catch((err) => console.error(err));

        fetch("https://www.swapi.tech/api/vehicles")
          .then((resp) => resp.json())
          .then((resp) => setStore({ vehicles: resp.results }))
          .catch((err) => console.error(err));
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
