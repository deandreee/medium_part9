module.exports = {
  ATR_ADX: {
    ATR: 25,
    ADX: 35,
    candleSize: 120,
    ATR_threshold: 90,
    BEAR_Multiplier_low: 3,
    BULL_Multiplier_low: 3,
    BEAR_Multiplier_high: 6,
    BULL_Multiplier_high: 6
  },
  bestone: {
    thresholds: { RSIlow: 30, MACDlow: 0, RSIhigh: 85, MACDhigh: 0, persistance: 1 },
    RSI: { optInTimePeriod: 10 },
    MACD: { optInFastPeriod: 12, optInSlowPeriod: 26, optInSignalPeriod: 9 },
    STOCH: {
      optInSlowKMAType: 1,
      optInSlowDMAType: 1,
      optInSlowKPeriod: 3,
      optInFastKPeriod: 9,
      optInSlowDPeriod: 3
    },
    EMAlong: { optInTimePeriod: 50 },
    EMAshort: { optInTimePeriod: 10 }
  },
  EMADIV: {
    ema: 50,
    long: -2.5,
    short: 2.5
  },
  HL: {
    Period: 25
  },
  IWannaBeRich: {
    macd: { up: 0, long: 26, down: 0, short: 12, signal: 9, persistence: 1 },
    rsi: { low: 30, high: 60, interval: 10, persistence: 1 },
    candleSize: 120,
    bbands: { NbDevUp: 2, NbDevDn: 4, TimePeriod: 20 }
  },
  "MACD-CCI-RSI": {
    MACD: {
      short: 15,
      long: 30,
      signal: 9
    },

    CCI: {
      constant: 0.015,
      history: 31
    },

    RSI: {
      interval: 14
    },

    thresholds: {
      MACDup: 0.025,
      MACDdown: -0.025,
      MACDpersistence: 1,
      CCIup: 0,
      CCIdown: 0,
      CCIpersistence: 1,
      RSIlow: 30,
      RSIhigh: 70,
      RSIpersistence: 1
    }
  },
  NEO: {
    SMA_long: 150, // defaults in toml
    SMA_short: 40, // defaults in toml
    BULL_RSI: 10,
    BULL_RSI_high: 80,
    BULL_RSI_low: 50,
    IDLE_RSI: 12,
    IDLE_RSI_high: 65,
    IDLE_RSI_low: 39,
    BEAR_RSI: 15,
    BEAR_RSI_high: 50,
    BEAR_RSI_low: 25,
    ROC: 6,
    ROC_lvl: 0
  },
  RBB_ADX_BB: {
    ADX: { adx: 5, ADX_low: 30, ADX_high: 70 },
    BEAR: { rsi: 5, low: 35, high: 70, mod_low: -5, mod_high: 10 },
    BULL: { rsi: 10, low: 60, high: 70, mod_low: -10, mod_high: 10 },
    SMA: { long: 200, short: 10 },
    candleSize: 120,
    historySize: 400,
    BBands: { NbDevDn: 4, NbDevUp: 4, TimePeriod: 25 },
    BBtrend: { persistence: 15, upperThreshold: 50, lowerThreshold: 50 }
  },
  RSI_BULL_BEAR_ADX: {
    SMA_long: 150, // had to change from 1000 to fit 30d limit, no it's actually 20d limit because VEN since May10
    SMA_short: 50,
    BULL_RSI: 10,
    BULL_RSI_high: 80,
    BULL_RSI_low: 60,
    BEAR_RSI: 15,
    BEAR_RSI_high: 50,
    BEAR_RSI_low: 20,
    BULL_MOD_high: 5,
    BULL_MOD_low: -5,
    BEAR_MOD_high: 15,
    BEAR_MOD_low: -5,
    ADX: 3,
    ADX_high: 70,
    ADX_low: 50
  },
  RSI_WR: {
    interval: 14,
    low: 30,
    high: 70,
    up: -90,
    down: -10,
    optInTimePeriod: 10
  },
  rsidyn: {
    interval: 8,
    sellat: 0.4,
    buyat: 1.5,
    stop_percent: 0.96,
    stop_enabled: true
  },
  SchaffTrendCycle: {
    factor: 0.7,
    stcLength: 10,
    slowLength: 150,
    candleSize: 120,
    fastLength: 20,
    threshold_low: 30,
    threshold_high: 70,
    enable_stop_loss: true,
    stoploss_threshold: 5,
    adjust_false_signal: true,
    threshold_adjustment: 5
  },

  stratego_smaxv7_SL: {
    sma_up: 20,
    fast_sma: 10,
    slow_sma: 150,
    stoploss: 0.9,
    sma_down: 15,
    change_up: 60,
    slowchoice: "sma",
    fastchoice: "sma",
    candleSize: 120,
    stophistory: 10,
    historySize: 200,
    change_down: -60
  },
  Supertrend: { atrEma: 9, bandFactor: 3, candleSize: 120 },
  Turtle: {
    enter_fast: 20,
    exit_fast: 10,
    enter_slow: 55,
    exit_slow: 20,
    trailingStop: 15
  },
  w2: {
    pd: 40,
    lb: 25,
    ph: 0.7,
    bbl: 35,
    mult: 3,
    fastrsi: 9,
    slowrsi: 30,
    rsi_long: 25,
    rsi_short: 80,
    candleSize: 120,
    rsi_interval: 30
  }
};
