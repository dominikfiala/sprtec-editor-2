var appData = {
  templates: {
    'stl-2015-home': {
      title: 'St. Louis Blues 2015 domácí',
      style: {
        image: 'src/gfx/stl-2015-home.png'
      },
      text: {
        'surname': {
          controls: {
            placeholder: 'Příjmení',
            parentClass: 'col-xs-9'
          },
          style: {
            'x': 150,
            'y': 261,
            'text-anchor': 'middle',
            'font-family': 'new_athletic_m54',
            'fill': '#fff',
            'stroke': '#00285d',
            'stroke-width': 7,
            'paint-order': 'stroke',
            'font-size': 34
          }
        },
        'number': {
          controls: {
            placeholder: 'Číslo',
            parentClass: 'col-xs-2'
          },
          style: {
            'x': 190,
            'y': 105,
            'text-anchor': 'middle',
            'font-family': 'new_athletic_m54',
            'fill': '#fff',
            'stroke': '#00285d',
            'stroke-width': 7,
            'paint-order': 'stroke',
            'font-size': 42
          }
        }
      }
    },
    'stl-2015-away': {
      title: 'St. Louis Blues 2015 hosté',
      style: {
        image: 'src/gfx/stl-2015-away.png'
      },
      text: {
        'surname': {
          controls: {
            placeholder: 'Příjmení',
            parentClass: 'col-xs-9'
          },
          style: {
            'x': 150,
            'y': 261,
            'text-anchor': 'middle',
            'font-family': 'new_athletic_m54regular',
            'fill': '#00285d',
            'stroke': '#ffb924',
            'stroke-width': 4,
            'paint-order': 'stroke',
            'font-size': 34
          }
        },
        'number': {
          controls: {
            placeholder: 'Číslo',
            parentClass: 'col-xs-2'
          },
          style: {
            'x': 190,
            'y': 105,
            'text-anchor': 'middle',
            'font-family': 'new_athletic_m54regular',
            'fill': '#00285d',
            'stroke': '#ffb924',
            'stroke-width': 4,
            'paint-order': 'stroke',
            'font-size': 42
          }
        }
      }
    },
    'stl-2013-home': {
      title: 'St. Louis Blues 2013 domácí',
      style: {
        image: 'src/gfx/stl-2013-home.png'
      },
      text: {
        'name': {
          controls: {
            placeholder: 'Jméno',
            parentClass: 'col-xs-4'
          },
          style: {
            'x': 150,
            'y': 78,
            'text-anchor': 'middle',
            'font-family': 'jersey_m54',
            'fill': '#fff',
            'font-size': 18.6
          }
        },
        'surname': {
          controls: {
            placeholder: 'Příjmení',
            parentClass: 'col-xs-5'
          },
          style: {
            'x': 150,
            'y': 254,
            'text-anchor': 'middle',
            'font-family': 'jersey_m54',
            'fill': '#fff',
            'stroke': '#f6c93b',
            'stroke-width': 6,
            'paint-order': 'stroke',
            'font-size': 35
          },
          clone: [
            {'stroke': '#234190', 'stroke-width': 3}
          ]
        },
        'number': {
          controls: {
            placeholder: 'Číslo',
            parentClass: 'col-xs-2'
          },
          style: {
            'x': 255,
            'y': 165,
            'text-anchor': 'middle',
            'font-family': 'jersey_m54',
            'fill': '#fff',
            'stroke': '#f6c93b',
            'stroke-width': 5,
            'paint-order': 'stroke',
            'font-size': 44
          },
          clone: [
            {'fill': 'none', 'stroke': '#234190', 'stroke-width': 2},
            {'x': 45, 'stroke': '#f6c93b', 'stroke-width': 5},
            {'x': 45, 'fill': 'none', 'stroke': '#234190', 'stroke-width': 2}
          ]
        }
      }
    },
    'stl-2013-away': {
      title: 'St. Louis Blues 2013 hosté',
      style: {
        image: 'src/gfx/stl-2013-away.png'
      },
      text: {
        'name': {
          controls: {
            placeholder: 'Jméno',
            parentClass: 'col-xs-4'
          },
          style: {
            'x': 150,
            'y': 78,
            'text-anchor': 'middle',
            'font-family': 'jersey_m54',
            'fill': '#000',
            'font-size': 18.6
          }
        },
        'surname': {
          controls: {
            placeholder: 'Příjmení',
            parentClass: 'col-xs-5'
          },
          style: {
            'x': 150,
            'y': 254,
            'text-anchor': 'middle',
            'font-family': 'jersey_m54',
            'fill': 'none',
            'stroke': '#000',
            'stroke-width': 4,
            'paint-order': 'stroke',
            'font-size': 35
          },
          clone: [
            {'fill': 'black', 'stroke': '#fff', 'stroke-width': 2}
          ]
        },
        'number': {
          controls: {
            placeholder: 'Číslo',
            parentClass: 'col-xs-2'
          },
          style: {
            'x': 255,
            'y': 165,
            'text-anchor': 'middle',
            'font-family': 'jersey_m54',
            'fill': 'none',
            'stroke': '#000',
            'stroke-width': 4,
            'paint-order': 'stroke',
            'font-size': 44
          },
          clone: [
            {'fill': 'black', 'stroke': '#fff', 'stroke-width': 2},
            {'x': 45},
            {'x': 45, 'fill': 'black', 'stroke': '#fff', 'stroke-width': 2}
          ]
        }
      }
    }
  },
  settings: {
    'previewSize': 100
  },
  groups: []
}

var savedDataIndexes = ['settings', 'teams']

if (window.localStorage) {
  var store = window.localStorage

  savedDataIndexes.forEach(index => {
    if (store.getItem(index)) {
      var savedData = JSON.parse(store.getItem(index))
      appData[index] = savedData
    }
  })
}

Vue.component('controls-add-group', {
  props: {
    options: Array,
    selected: {
      type: String,
      default: ''
    }
  },
  methods: {
    addGroup: function() {
      console.log(this.selected)
    }
  },
  template: `
    <div :id="$options.name">
      <div class="row">
        <div class="col-xs-10">
          <select v-model="selected" class="form-control">
            <option value="">Zvolte tým</option>
            <option v-for="option in options" :value="option.value">{{option.text}}</option>
          </select>
          {{selected}}
        </div>
        <div class="col-xs-2">
          <button @click="addGroup" type="button" class="btn btn-success"><span class="glyphicon glyphicon-plus"></span></button>
        </div>
      </div>
    </div>
  `
})

Vue.component('controls', {
  props: ['availableGroups'],
  template: `
    <div :id="$options.name">
      <controls-add-group :options="availableGroups"></controls-add-group>
    </div>
  `
})

Vue.component('preview', {
  template: `
    <div :id="$options.name">Test</div>
  `
})

var app = new Vue({
  el: '#app',
  data: appData,
  template: `
    <div id="app">
      <div id="wrap">
        <controls :availableGroups="availableGroups"></controls>
        <preview></preview>
      </div>
    </div>
  `,
  computed: {
    availableGroups: function() {
      var out = [];
      for (group in this.templates) {
        out.push({
          value: group,
          text: this.templates[group].title
        })
      }
      // sort by title
      out.sort((a, b) => {
        if (a.text === b.text) { return 0; }
        else { return (a.text < b.text) ? -1 : 1; }
      });
      return out;
    },
  },
  methods: {
    addGroup: function(groupIndex) {
    },
  },

  mounted: function() {
    $('body').addClass('app-loaded')
  }
});

if (store) {
  savedDataIndexes.forEach(index => {
    app.$watch(index, value => {
      store.setItem(index, JSON.stringify(value))
    }, {deep: true})
  })
}
