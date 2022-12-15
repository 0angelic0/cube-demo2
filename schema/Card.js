cube('Card', {
  sql: `SELECT * FROM ibath.Card`,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {

  },

  measures: {
    count: {
      type: "count",
      sql: "iCardID"
    },
    sumCashRemain: {
      type: "sum",
      sql: "nCashRemain"
    },
    sumCashFriend: {
      type: "sum",
      sql: "nCashFriend"
    }
  },

  dimensions: {
    cardId: {
      type: "number",
      sql: "iCardID",
      primaryKey: true
    },
    barcode: {
      type: "string",
      sql: "vBarCode"
    },
    lotId: {
      type: "number",
      sql: "iLotID"
    },
    memberId: {
      type: "number",
      sql: "iMemberID"
    },
    cashRemain: {
      type: "number",
      sql: "nCashRemain"
    },
    lastUpdatedRemainAt: {
      type: "time",
      sql: "dtLastUpdate_Remain"
    },
    grade: {
      type: "string",
      sql: "cGrade"
    },
    unlockedAt: {
      type: "time",
      sql: "dtUnlock"
    },
    lastUsedAt: {
      type: "time",
      sql: "dtLastUse"
    },
    lastLoginFailedAt: {
      type: "time",
      sql: "dtLastLoginFail"
    },
    numberOfLoginFailed: {
      type: "number",
      sql: "iNoOfLoginFail"
    },
    lastToppedUpAt: {
      type: "time",
      sql: "dtLastTopup"
    },
    cardType: {
      type: "string",
      sql: "cCardType"
    },
    cardIdMaster: {
      type: "number",
      sql: "iCardIDMaster"
    },
    appType: {
      type: "string",
      sql: "vAppType"
    },
    active: {
      type: "string",
      sql: "cIsActive"
    },
    risk: {
      type: "string",
      sql: "cIsRisk"
    },
    optionId: {
      type: "number",
      sql: "iOptionID"
    },
    walletLimit: {
      type: "number",
      sql: "nWalletLimit"
    },
    createdAt: {
      type: "time",
      sql: "dtCreate"
    },
    kycSession: {
      type: "string",
      sql: "vKYCSession"
    },
    kycLevel: {
      type: "string",
      sql: "vKYCLevel"
    }
  }
});
