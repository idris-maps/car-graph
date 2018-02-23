# It wasn't me graph

## Usage

```
<script src="graph.js"></script>
```

Adds a global variable `graph`

```
graph(elementId, data, xKey, yKey, style)
```

**example**

```
graph('graph', data, 'timestamp', 'mileage', {
  color: {
    graph: 'lightblue',
    serviceIconBg: 'yellow',
    serviceIcon: 'gray',
    approvedIconBg: 'lightgreen',
    approvedIcon: 'white',
    axis: 'purple',
  },
})
```


