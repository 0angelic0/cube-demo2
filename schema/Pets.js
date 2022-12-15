cube(`Pets`, {
  sql: `SELECT * FROM transactionscript.pets`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name]
    }
  },
  
  dimensions: {
    age: {
      sql: `age`,
      type: `number`
    },
    
    isSold: {
      sql: `is_sold`,
      type: `boolean`
    },
    
    id: {
      sql: `id`,
      type: `string`,
      primaryKey: true
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    addedAt: {
      sql: `added_at`,
      type: `time`
    },
    
    soldAt: {
      sql: `sold_at`,
      type: `time`
    }
  }
});
