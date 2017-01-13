console.log('Adam je Buh');

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
            size: '9'
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
            size: '2'
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
            size: '9'
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
            size: '2'
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
            size: '4'
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
            size: '5'
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
            size: '2'
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
            size: '4'
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
            size: '5'
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
            size: '2'
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
  groups: [],
  helpText: document.getElementById('app-help').innerHTML
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

Vue.component('controls-panel', {
  props: {
    options: Array
  },
  data: function() {
    return {
      selected: ''
    }
  },
  methods: {
    addGroup: function() {
      var selectState = this.$refs['option-select-state']
      if (this.selected) {
        app.$emit('groupAdded', this.selected)
        selectState.classList.remove('has-error')
      }
      else {
        selectState.classList.add('has-error')
      }
    }
  },
  template: `
    <div :class="$options.name">
      <div class="row form-group">
        <div class="col-xs-10" ref="option-select-state">
          <select v-model="selected" class="form-control">
            <option value="">Zvolte tým</option>
            <option v-for="option in options" :value="option.value">{{option.text}}</option>
          </select>
        </div>
        <div class="col-xs-2">
          <button @click="addGroup" type="button" class="btn btn-success" title="Přidat vybraný tým">
            <span class="glyphicon glyphicon-plus"></span>
          </button>
        </div>
      </div>
    </div>
  `
})

Vue.component('controls-group', {
  props: {
    template: Object,
    items: Array,
    index: Number
  },
  methods: {
    addItem: function() {
      app.$emit('itemAdded', this.index)
    },
    removeItem: function(itemIndex) {
      app.$emit('itemRemoved', this.index, itemIndex)
    },
    removeGroup: function() {
      app.$emit('groupRemoved', this.index)
    }
  },
  template: `
    <div :class="$options.name">
      <div class="row form-group">
        <div class="col-xs-9">
          <h5><strong class="form-control-static">{{template.title}}</strong></h5>
        </div>
        <div class="col-xs-3">
          <div class="btn-group">
            <button @click="addItem(index)" title="Přidat do týmu hráče" type="button" class="btn btn-success">
              <span class="glyphicon glyphicon-plus"></span>
            </button>
            <button title="Více možností práce s týmem" type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu dropdown-menu-right">
              <li><a @click="removeGroup" href="#">Odebrat tým</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div v-for="item, itemIndex in items" class="row form-group">
        <div v-for="text, textIndex in template.text" :class="'col-xs-' + text.controls.size">
          <input v-model="item[textIndex]" :placeholder="text.controls.placeholder" class="form-control">
        </div>
        <div class="col-xs-1">
          <button @click="removeItem(itemIndex)" title="Odebrat tohoto hráče" type="button" class="btn btn-xs btn-danger">
            <span class="glyphicon glyphicon-remove"></span>
          </button>
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
  methods: {
    print: () => {
      window.print()
    },
    showHelp: () => {

    }
  },
  template: `
    <div :id="$options.name">
      <h4>
        Editor šprtcových hráčů&ensp;
        <button data-toggle="modal" data-target="#help" title="Nápověda aplikace" type="button" class="btn btn-info btn-sm">
          <span class="glyphicon glyphicon-question-sign"></span>
        </button>
        <button data-toggle="modal" data-target="#settings" title="Nastavení aplikace" type="button" class="btn btn-warning btn-sm">
          <span class="glyphicon glyphicon-cog"></span>
        </button>
        <button @click="print" title="Tisknout hráče" type="button" class="btn btn-primary btn-sm">
          <span class="glyphicon glyphicon-print"></span>
        </button>
      </h4>
      <controls-panel :options="availableGroups"></controls-panel>
      <controls-group v-for="group, groupIndex in groups" :template="templates[group.template]" :items="group.items" :index="groupIndex"></controls-panel>
    </div>
  `
})

Vue.component('preview', {
  template: `
    <div :id="$options.name">Test</div>
  `
})

Vue.component('modal', {
  props: {
    id: String,
    title: String,
    size: String
  },
  data: function() {
    var classList = ['modal-dialog'];
    if (this.size == 'large') {
      classList.push('modal-lg')
    }
    else if (this.size == 'small') {
      classList.push('modal-sm')
    }
    return {
      classList: classList
    }
  },
  template: `
    <div :id="id" class="modal fade" tabindex="-1" role="dialog">
      <div :class="classList" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
            <h4 class="modal-title">{{title}}</h4>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
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
      <modal v-once id="help" title="Nápověda">
        <div v-html="helpText"></div>
      </modal>
      <modal id="settings" title="Možnosti" size="small">
        <form>
          <div class="form-group">
            <label for="">Velikost náhledu</label>
            <input v-model="settings.previewSize" type="number" min="100" max="600" step="25" class="form-control" id="exampleInputEmail1">
          </div>
        </form>
      </modal>
    </div>
  `,
  methods: {
    addGroup: function(templateIndex) {
      this.groups.unshift({
        template: templateIndex,
        items: []
      })

      this.addItem(0)
    },
    removeGroup: function(groupIndex) {
      this.groups.splice(groupIndex, 1)
    },

    addItem: function(groupIndex, item) {
      var item = {} || item
      var templateIndex = this.groups[groupIndex].template
      var template = this.templates[templateIndex]
      for (textIndex in template.text) {
        item[textIndex] = ''
      }
      app.groups[groupIndex].items.unshift(item)
    },
    removeItem: function(groupIndex, itemIndex) {
      app.groups[groupIndex].items.splice(itemIndex, 1)
    }
  },

  mounted: function() {
    document.body.classList.add('app-loaded')
  },

  created () {
    this.$on('groupAdded', function(templateIndex) {
      this.addGroup(templateIndex)
    })
    this.$on('groupRemoved', function(groupIndex) {
      this.removeGroup(groupIndex)
    })

    this.$on('itemAdded', function(groupIndex) {
      this.addItem(groupIndex)
    })
    this.$on('itemRemoved', function(groupIndex, itemIndex) {
      this.removeItem(groupIndex, itemIndex)
    })
  }
});

if (store) {
  savedDataIndexes.forEach(function(index) {
    app.$watch(index, function(value) {
      store.setItem(index, JSON.stringify(value))
    }, {deep: true})
  })
}
