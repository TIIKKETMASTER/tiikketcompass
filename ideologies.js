
const ideologies = [
  //Clumps:

  //Full Orange
  { name: "Orthodox Marxism", values: [-9, 1, 0],
    description: "Description work in progress"
  },
  { name: "Classical Social Democracy", values: [-7, 1, 0],
    description: "Description work in progress"
  },
  { name: "Utopian Socialism", values: [-9, -1, 0],
    description: "Description work in progress"
  },
  { name: "Modern Socialism", values: [-7, -1, 0],
    description: "Description work in progress"
  },

  //Light Orange
  { name: "Left-Wing Populism", values: [-5, 1, 0],
    description: "Description work in progress"
  },
  { name: "Social Democracy", values: [-3, 1, 0],
    description: "Description work in progress"
  },
  { name: "Liberal Socialism", values: [-5, -1, 0],
    description: "Description work in progress"
  },
  { name: "Radical Liberalism", values: [-3, -1, 0],
    description: "Description work in progress"
  },
  { name: "Kautskyism", values: [-5.8, -0.5, 0],
    description: "Description work in progress"
  },

  //Centrist
  { name: "Centrist", values: [0, 0, 0],
    description: "Description work in progress"
  },
  { name: "Distributism", values: [-1, 1, 0],
    description: "Description work in progress"
  },
  { name: "Keynesian Liberalism", values: [1, 1, 0],
    description: "Description work in progress"
  },
  { name: "Modern Liberalism", values: [-1, -1, 0],
    description: "Description work in progress"
  },
  { name: "Third Way Liberalism", values: [1, -1, 0],
    description: "Description work in progress"
  },

  //Light Cyan
  { name: "Right-Wing Populism", values: [3, 1, 0],
    description: "Description work in progress"
  },
  { name: "Neoliberalism", values: [5, 1, 0],
    description: "Description work in progress"
  },
  { name: "Right-Wing Modern Liberalism", values: [3, -1, 0],
    description: "Description work in progress"
  },
  { name: "Classical Liberalism", values: [5, -1, 0],
    description: "Description work in progress"
  },


  //Full Cyan
  { name: "Neocameralism", values: [7, 1, 0],
    description: "Description work in progress"
  },
  { name: "Darwinian Liberalism", values: [9, 1, 0],
    description: "Description work in progress"
  },
  { name: "Capitalism", values: [7, -1, 0],
    description: "Description work in progress"
  },
  { name: "\"Reactionary\" Liberalism", values: [9, -1, 0],
    description: "Description work in progress"
  },


  //Light Purple
  { name: "State Distributism", values: [-1, 5, 0],
    description: "Description work in progress"
  },
  { name: "Stakeholder Capitalism", values: [1, 5, 0],
    description: "Description work in progress"
  },
  { name: "Yellow Socialism", values: [-1, 3, 0],
    description: "Description work in progress"
  },
  { name: "Paternalism", values: [1, 3, 0],
    description: "Description work in progress"
  },

  //Full Purple
  { name: "Legionarism", values: [-1, 9, 0],
    description: "Description work in progress"
  },
  { name: "Evolian Superfascism", values: [1, 9, 0],
    description: "Description work in progress"
  },
  { name: "Brazilian Integralism", values: [-1, 7, 0],
    description: "Description work in progress"
  },
  { name: "Cameralism", values: [1, 7, 0],
    description: "Description work in progress"
  },
  //Light Green
  { name: "Social Capitalism", values: [-1, -3, 0],
    description: "Description work in progress"
  },
  { name: "Georgism", values: [1, -3, 0],
    description: "Description work in progress"
  },
  { name: "Civil Libertarianism", values: [-1, -5, 0],
    description: "Description work in progress"
  },
  { name: "Libertarian Distributism", values: [1, -5, 0],
    description: "Description work in progress"
  },

  //Full Green
  { name: "Anarcho-Distributism", values: [-1, -7, 0],
    description: "Description work in progress"
  },
  { name: "Individualist Minarchism", values: [1, -7, 0],
    description: "Description work in progress"
  },
  { name: "Anarchism", values: [-1, -9, 0],
    description: "Description work in progress"
  },
  { name: "Anarchist Individualism", values: [1, -9, 0],
    description: "Description work in progress"
  },

  //LibRight

  //2 to 6 RIGHT, -2 to -6 AUTH - Quadrand 1 of LibRight
  { name: "Liberal Conservatism", values: [3, -3, 0],
    description: "Description work in progress"
  },
  { name: "Jeffersonianism", values: [5, -3, 0],
    description: "Description work in progress"
  },
  { name: "Social Libertarianism", values: [3, -5, 0],
    description: "Description work in progress"
  },
  { name: "Bleeding-Heart Libertarianism", values: [5, -5, 0],
    description: "Description work in progress"
  },

  //6 to 10 RIGHT, -2 to -6 AUTH - Quadrant 2 of LibRight
  { name: "Chicagoan Liberalism", values: [7, -3, 0],
    description: "Description work in progress"
  },
  { name: "Propertarianism", values: [9, -3, 0],
    description: "Description work in progress"
  },
  { name: "Right-Libertarianism", values: [7, -5, 0],
    description: "Description work in progress"
  },
  { name: "Austrian Liberalism", values: [9, -5, 0],
    description: "Description work in progress"
  },

  //2 to 6 RIGHT, -6 to -10 AUTH - Quadrant 3 of LibRight
  { name: "Minarcho-Georgism", values: [3, -7, 0],
    description: "Description work in progress"
  },
  { name: "Hayekian Minarchism", values: [5, -7, 0],
    description: "Description work in progress"
  },
  { name: "Anarcho-Georgism", values: [3, -9, 0],
    description: "Description work in progress"
  },
  { name: "Agorism", values: [5, -9, 0],
    description: "Description work in progress"
  },

  //6 to 10 RIGHT, -6 to -10 AUTH - Quadrand 4 of LibRight
  { name: "Minarcho-Capitalism", values: [7, -7, 0],
    description: "Description work in progress"
  },
  { name: "Randian Minarchism", values: [7, -9, 0],
    description: "Description work in progress"
  },
  { name: "Left-Rothbardianism", values: [7, -9, 0],
    description: "Description work in progress"
  },
  { name: "Anarcho-Capitalism", values: [9, -9, 0],
    description: "Description work in progress"
  },
  
  //LibLeft

  //-6 to -10 RIGHT, -2 to -6 AUTH - Quadrant 1 of LibLeft
  { name: "Council Communism", values: [-9, -3, 0],
    description: "Description work in progress"
  },
  { name: "Syndicalism", values: [-7, -3, 0],
    description: "Description work in progress"
  },
  { name: "Autonomism", values: [-9, -5, 0],
    description: "Description work in progress"
  },
  { name: "Libertarian Socialism", values: [-7, -5, 0],
    description: "Description work in progress"
  },

  //-2 to -6 RIGHT, -2 to -6 AUTH - Quadrand 2 of LibLeft
  { name: "Guild Socialism", values: [-5, -3, 0],
    description: "Description work in progress"
  },
  { name: "Progressivism", values: [-3, -3, 0],
    description: "Description work in progress"
  },
  { name: "Democratic Confederalism", values: [-5, -5, 0],
    description: "Description work in progress"
  },
  { name: "Libertarian Market Socialism", values: [-3, -5, 0],
    description: "Description work in progress"
  },

  //-6 to -10 RIGHT, -6 to -10 AUTH - Quadrand 3 of LibLeft
  { name: "Anarcho-Syndicalism", values: [-9, -7, 0],
    description: "Description work in progress"
  },
  { name: "Anarcho-Communism", values: [-9, -9, 0],
    description: "Description work in progress"
  },
  { name: "Minarcho-Socialism", values: [-7, -7, 0],
    description: "Description work in progress"
  },
  { name: "Anarcho-Collectivism", values: [-7, -9, 0],
    description: "Description work in progress"
  },

  //-2 to -6 RIGHT, -6 to -10 AUTH - Quadrant 4 of LibLeft
  { name: "Social Individualism", values: [-5, -7, 0],
    description: "Description work in progress"
  },
  { name: "Minarcho-Mutualism", values: [-3, -7, 0],
    description: "Description work in progress"
  },
  { name: "Social Anarchism", values: [-5, -9, 0],
    description: "Description work in progress"
  },
  { name: "Anarcho-Mutualism", values: [-3, -9, 0],
    description: "Description work in progress"
  },



    //AuthLeft

  //-6 to -10 RIGHT, 6 to 10 AUTH - Quadrant 1 of AuthLeft
  { name: "Juche", values: [-9, 9, 0],
    description: "Description work in progress"
  },
  { name: "National Syndicalism", values: [-7, 9, 0],
    description: "A fusion of union-based socialism and nationalist politics that came about primarily due to Syndicalist thinker Georges Sorel’s brief political affiliation with French integralists"
  },
  { name: "Paetelism", values: [-9, 7, 0],
    description: "Karl Otto Paetel’s personal beliefs, attempting to reconcile revolutionary nationalism and Marxism to counter capitalism"
  },
  { name: "Niekischism", values: [-7, 7, 0],
    description: "Description work in progress"
  },

  //-2 to -6 RIGHT, 6 to 10 AUTH - Quadrand 2 of AuthLeft
  { name: "Fascism", values: [-5, 9, 0],
    description: "Totalitarian nationalism, seeking to institute a corporate-syndical model to oppose both international capitalism and Marxist communism as well as revive the nation through palingenesis "
  },
  { name: "National Socialism", values: [-3, 9, 0],
    description: "Description work in progress"
  },
  { name: "Falangism", values: [-5, 7, 0],
    description: "Spanish integralism, its founder wanted to reconstitute Spain as a Catholic nation spiritually and morally, adopting syndicalist and guild economics, whilst opposing nationalism and Marxism"
  },
  { name: "Corporatism", values: [-3, 7, 0],
    description: "The organisation of society into interest groups (employers, employees, etc) in order to coordinate production using the state as a forum"
  },

  //-6 to -10 RIGHT, 2 to 6 AUTH - Quadrand 3 of AuthLeft
  { name: "Trotskyism", values: [-9, 5, 0],
    description: "Description work in progress"
  },
  { name: "Guevarism", values: [-7, 5, 0],
    description: "Description work in progress"
  },
  { name: "Italian Left-Communism", values: [-9, 3, 0],
    description: "Description work in progress"
  },
  { name: "Vperedism", values: [-7, 3, 0],
    description: "Description work in progress"
  },

  //-2 to -6 RIGHT, 2 to 6 AUTH - Quadrant 4 of AuthLeft
  { name: "Peronism", values: [-5, 5, 0],
    description: "Description work in progress"
  },
  { name: "Titoism", values: [-3, 5, 0],
    description: "Description work in progress"
  },
  { name: "Democratic Socialism", values: [-5, 3, 0],
    description: "Description work in progress"
  },
  { name: "Montagnardism", values: [-3, 3, 0],
    description: "Description work in progress"
  },




    //AuthRight

  //2 to 6 RIGHT, 6 to 10 AUTH - Quadrant 1 of AuthRight
  { name: "Francoism", values: [3, 9, 0],
    description: "Description work in progress"
  },
  { name: "Optimateism", values: [5, 9, 0],
    description: "Description work in progress"
  },
  { name: "Carlism", values: [3, 7, 0],
    description: "Description work in progress"
  },
  { name: "Corporatocracy", values: [5, 7, 0],
    description: "Description work in progress"
  },

  //6 to 10 RIGHT, 6 to 10 AUTH - Quadrand 2 of AuthRight
  { name: "National Capitalism", values: [7, 9, 0],
    description: "Description work in progress"
  },
  { name: "Private Autocracy", values: [9, 9, 0],
    description: "Description work in progress"
  },
  { name: "Mesoconservatism", values: [7, 7, 0],
    description: "Description work in progress"
  },
  { name: "Aristocracy", values: [9, 7, 0],
    description: "Description work in progress"
  },

  //2 to 6 RIGHT, 2 to 6 AUTH - Quadrand 3 of AuthRight
  { name: "State Capitalism", values: [3, 5, 0],
    description: "Description work in progress"
  },
  { name: "Hamiltonianism", values: [5, 5, 0],
    description: "Description work in progress"
  },
  { name: "Ordoliberalism", values: [3, 3, 0],
    description: "Description work in progress"
  },
  { name: "Neoconservatism", values: [5, 3, 0],
    description: "Description work in progress"
  },

  //6 to 10 RIGHT, 6 to 10 AUTH - Quadrant 4 of AuthRight
  { name: "Paleoconservatism", values: [7, 5, 0],
    description: "Description work in progress"
  },
  { name: "Mercantilism", values: [9, 5, 0],
    description: "Description work in progress"
  },
  { name: "Monarchist Capitalism", values: [7, 3, 0],
    description: "Description work in progress"
  },
  { name: "Timocracy", values: [9, 3, 0],
    description: "Description work in progress"
  },
  
  



  
  //{ name: "3rd Internat. Theory", values: [-8.5, 6, -1] },
  //{ name: "Fourth Theory", values: [-7, 9, -2] },
  //{ name: "Folkish Syndicalism", values: [-9, 9, -2.5] },
  //{ name: "Stalinism", values: [-8.5, 9.5, -2] },
  //{ name: "Reactionarism", values: [8.5, 4, -6] },
];