import { cacheDirectory } from '@best/utils';

const defaultOptions = {
    cache: true,
    gitIntegration: false,
    cacheDirectory: cacheDirectory(),
    useHttp: false,
    openPages: false,
    moduleDirectories: ['node_modules'],
    moduleFileExtensions: ['js'],
    moduleNameMapper: {},
    modulePathIgnorePatterns: [],
    runner: "default",
    runners: [{
        alias: "default",
        runner: '@best/runner-headless'
    }],
    plugins: [],
    projects: [],
    runnerConfig: {},
    benchmarkEnvironment: 'production',
    benchmarkMaxDuration: 1000 * 15, // 15s
    benchmarkMinIterations: 30,
    benchmarkOnClient: false,
    benchmarkIterations: 0,
    benchmarkOutput: '<rootDir>/__benchmarks_results__',
    benchmarkEnvironmentOptions: {},
    benchmarkCustomAssets: '<rootDir>/__benchmarks__/assets',
    testMatch: ['**/__benchmarks__/**/*.benchmark.js'],
    testPathIgnorePatterns: [
        '**/__benchmarks_results__/**',
        '**/node_modules/**',
        '**/__tests__/**'
    ],

    // Calculate statistics on entire distributions (including possible outliers).
    // samplesQuantileThreshold: 1,

    // Don't try to normalize distributions.
    // normalize: false,

    // Show every metric (e.g. "duration" and "runDuration") in CLI output.
    // outputMetricNames: '*',

    // Don't show totals for each metric in a benchmark table.
    // outputTotals: false,

    // Don't show histograms for each distribution in CLI output.
    // outputHistograms: false,

    // If showing histograms, show every one.
    // outputHistogramNames: '*',

    // If histograms are shown, hide long tails by omitting the top and bottom 5%.
    // histogramQuantileRange: [0.05, 0.95],

    // If histograms are shown, make them a limited number of characters wide.
    // histogramMaxWidth: 50,

    rootDir: process.cwd(),
};

export default defaultOptions;
