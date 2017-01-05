var appData = {
  templates: {
    'stl-2015-home': {
      title: 'St. Louis Blues 2015 domácí',
      style: {
        image: 'gfx/stl-2015-home.png'
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
        image: 'gfx/stl-2015-away.png'
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
        image: 'gfx/stl-2013-home.png'
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
        image: 'gfx/stl-2013-away.png'
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

var savedDataIndexes = ['settings', 'groups']

if (window.localStorage) {
  var store = window.localStorage

  savedDataIndexes.forEach(index => {
    if (store.getItem(index)) {
      var savedData = JSON.parse(store.getItem(index))
      appData[index] = savedData
    }
  })
}

Vue.component('controls-group-add', {
  props: {
    options: Array,
    selected: {
      type: String,
      default: ''
    }
  },
  methods: {
    addGroup: function() {
      var parentEl = $(this.$refs['option-select']).parent()
      if (this.selected) {
        app.$emit('groupAdded', this.selected)
        parentEl.removeClass('has-error')
      }
      else {
        parentEl.addClass('has-error')
      }
    }
  },
  template: `
    <div :id="$options.name">
      <div class="row form-group">
        <div class="col-xs-9">
          <select v-model="selected" ref="option-select" class="form-control">
            <option value="">Zvolte tým</option>
            <option v-for="option in options" :value="option.value">{{option.text}}</option>
          </select>
        </div>
        <div class="col-xs-3">
          <button @click="addGroup" type="button" class="btn btn-success"><span class="glyphicon glyphicon-plus"></span></button>
        </div>
      </div>
    </div>
  `
})

Vue.component('controls-group', {
  props: {
    template: Object,
    items: Array
  },
  template: `
    <div class="row form-group">
      <div class="col-xs-9">
        <h5><strong class="form-control-static">{{template.title}}</strong></h5>
      </div>
      <div class="col-xs-3">
        <div class="btn-group">
          <button type="button" class="btn btn-success"><span class="glyphicon glyphicon-plus"></span></button>
          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="caret"></span>
            <span class="sr-only">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu dropdown-menu-right">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>
      </div>
    </div>
  `
})

Vue.component('controls', {
  props: {
    templates: Object,
    groups: Array
  },
  data: function() {
    var availableGroups = [];
    for (group in this.templates) {
      availableGroups.push({
        value: group,
        text: this.templates[group].title
      })
    }
    // sort by title
    availableGroups.sort((a, b) => {
      if (a.text === b.text) { return 0; }
      else { return (a.text < b.text) ? -1 : 1; }
    });

    return {
      availableGroups: availableGroups
    };
  },
  template: `
    <div :id="$options.name">
      <controls-group-add :options="availableGroups"></controls-group-add>
      <controls-group v-for="group in groups" :template="templates[group.template]" :items="group.items"></controls-group-add>
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
        <controls :templates="templates" :groups="groups"></controls>
        <preview></preview>
      </div>
    </div>
  `,
  methods: {
    addGroup: function(groupIndex) {
      this.groups.unshift({
        template: groupIndex,
        items: []
      })

      this.addItem(groupIndex)
    },
    addItem: function(groupIndex, item = {}) {
      this.groups.forEach(function(index) {
        if (groupIndex === index.template) {
          index.items.unshift(item)
        }
      })
    }
  },

  mounted: function() {
    $('body').addClass('app-loaded')
  },

  created () {
    this.$on('groupAdded', function(groupIndex) {
      this.addGroup(groupIndex)
    })
  }
});

if (store) {
  savedDataIndexes.forEach(index => {
    app.$watch(index, value => {
      store.setItem(index, JSON.stringify(value))
    }, {deep: true})
  })
}
