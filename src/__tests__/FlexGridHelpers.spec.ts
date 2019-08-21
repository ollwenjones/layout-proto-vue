import { generateStyles } from "../FlexGridHelpers";

test('generateStyles', () => {
    // since we know via browser testing, that it currently does what we want
    // we can "snapshot" the result to ensure any modifications in the future
    // don't break what's expected here. Not as thorough as a dozen, difficult
    // to write comparisons, but it's very fast to write.
    // If I'm suspicious of this, I can change the params and inspect the output.
    expect(generateStyles(10, 10, 12, 8, 4)).toMatchSnapshot();
});