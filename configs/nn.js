const min_predictions = 200;

module.exports = {
  neataptic: {
    hiddenLayers: 3,
    lookAheadCandles: 6,
    iterations: 100,
    error: 0.0001,
    learnRate: 0.05,
    momentum: 0.1,

    architecture: "LSTM",

    minPercentIncrease: 2,
    candlesForShort: [6],
    candlesForLong: [6],
    stopLoss: 3,

    RSI: [14],
    // SMA: [50, 1000] // default
    SMA: [50, 900], // reduced for Aug 240
    min_predictions
  },
  "mounirs-ga-version-1": {
    min_periods: min_predictions // hardcoded
  },
  "mounirs-ga-version-2": {
    min_periods: min_predictions // hardcoded
  },
  mounirs_esto: {
    rsi: {
      interval: 6
    },
    ema: {
      ema1: 10
    },
    min_predictions
  },
  NNv2: {
    threshold_buy_bear: 1,
    threshold_buy_bull: 2,
    threshold_sell_bear: -0.2,
    threshold_sell_bull: -0.5,
    NN_SMMA_Length: 4,
    maFast: 30,
    maSlow: 720,
    decay: 0.6,
    price_buffer_len: 90,
    stoploss_threshold: 6,
    waitTime: min_predictions
  },
  NN_ADX_RSI: {
    SMA_long: 800,
    SMA_short: 40,
    interval: 14,
    SL: 1,
    BULL_RSI: 10,
    BULL_RSI_high: 80,
    BULL_RSI_low: 50,
    IDLE_RSI: 12,
    IDLE_RSI_high: 65,
    IDLE_RSI_low: 39,
    BEAR_RSI: 15,
    BEAR_RSI_high: 50,
    BEAR_RSI_low: 25,
    ROC: 9,
    ROC_lvl: 0,
    ADX: 3,
    ADX_high: 70,
    ADX_low: 50,
    thresholds: {
      low: 30,
      high: 70,
      down: 0.1,
      persistence: 1
    },
    min_predictions
  },
  LSTM_MACD_RSI_V3: {
    min_predictions // hardcoded
  },
  Luke_NN: {
    neuralnet: {
      price_buffer_len: 100,
      learning_rate: 0.01,
      scale: 1,
      momentum: 0.1,
      decay: 0.1,
      min_predictions
    }
  },
  ManuNet: {
    price_buffer_len: 100,
    scale: -1,
    min_predictions,
    RsiPeriod1: 14,
    RsiPeriod2: 9,
    SMA1: 10,
    SMA2: 80,
    buyZonePercent: 0.01,
    sellZonePercent: 0.01
  },
  n8: {
    // officially doesn't have any props, but some hardcoded
    min_predictions
  },
  n8_v2: {
    // officially doesn't have any props, but some hardcoded
    min_predictions
  },
  n8_v2_BB_RSI_SL: {
    interval: 14,
    SL: 1,
    BULL_RSI: 10,
    BULL_RSI_high: 80,
    BULL_RSI_low: 60,
    BEAR_RSI: 15,
    BEAR_RSI_high: 50,
    BEAR_RSI_low: 20,
    ADX: 3,
    ADX_high: 70,
    ADX_low: 50,
    thresholds: {
      low: 30,
      high: 70,
      down: 0.1,
      persistence: 1
    },
    min_predictions
  },

  neuralnet_zschro: {
    threshold_buy: 1,
    threshold_sell: -1,
    method: "adadelta",
    learning_rate: 1.2,
    momentum: 0.9,
    decay: 0.1,
    stoploss_enabled: false,
    stoploss_threshold: 0.85,
    hodl_threshold: 1,
    price_buffer_len: 100,
    min_predictions
  },

  zuki_nn: {
    threshold_buy: 1,
    threshold_sell: -1,
    learning_rate: 0.01,
    momentum: 0.1,
    decay: 0.01,
    stoploss_enabled: false,
    stoploss_threshold: 0.85,
    hodl_threshold: 1,
    price_buffer_len: 100,
    min_predictions
  },

  neuralnet_SirTificate: {
    threshold_buy: 1,
    threshold_sell: -1,
    learning_rate: 0.01,
    momentum: 0.1,
    decay: 0.01,
    stoploss_enabled: false,
    stoploss_threshold: 0.85,
    hodl_threshold: 1,
    price_buffer_len: 100,
    min_predictions
  }
};
